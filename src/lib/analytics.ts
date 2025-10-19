/**
 * GA4 Analytics Helper (sfga)
 * Provides duplicate-guarded event tracking
 */

interface EventParams {
  event_category?: string;
  dest?: string;
  phone_number?: string;
  email?: string;
  page_location?: string;
  [key: string]: string | number | boolean | undefined;
}

class GA4Helper {
  private initialized = false;
  private eventQueue: Array<{ name: string; params: EventParams }> = [];

  constructor() {
    if (typeof window !== 'undefined') {
      // Expose globally for inline onclick handlers
      (window as any).sfga = this;
      // Enable DebugView in QA
      (window as any).sfgaAllowed = true;
    }
  }

  /**
   * Fire a GA4 event with duplicate guard
   */
  fire(eventName: string, params: EventParams = {}) {
    // Guard against duplicate rapid-fire events (within 1 second)
    const eventKey = `${eventName}_${JSON.stringify(params)}`;
    const now = Date.now();
    const lastFired = this.getLastFired(eventKey);
    
    if (lastFired && now - lastFired < 1000) {
      console.log(`[sfga] Duplicate event blocked: ${eventName}`, params);
      return;
    }

    this.setLastFired(eventKey, now);

    // Check if gtag is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
      console.log(`[sfga] Event fired: ${eventName}`, params);
    } else {
      // Queue for later if gtag not ready
      this.eventQueue.push({ name: eventName, params });
      console.log(`[sfga] Event queued: ${eventName}`, params);
    }
  }

  private getLastFired(key: string): number | null {
    try {
      const stored = sessionStorage.getItem(`sfga_${key}`);
      return stored ? parseInt(stored, 10) : null;
    } catch {
      return null;
    }
  }

  private setLastFired(key: string, timestamp: number) {
    try {
      sessionStorage.setItem(`sfga_${key}`, timestamp.toString());
    } catch {
      // Fail silently if storage unavailable
    }
  }

  /**
   * Flush queued events when gtag becomes available
   */
  flushQueue() {
    if (typeof window !== 'undefined' && (window as any).gtag && this.eventQueue.length > 0) {
      this.eventQueue.forEach(({ name, params }) => {
        (window as any).gtag('event', name, params);
        console.log(`[sfga] Queued event fired: ${name}`, params);
      });
      this.eventQueue = [];
    }
  }
}

// Create singleton instance
export const sfga = new GA4Helper();

// Auto-flush queue when gtag loads
if (typeof window !== 'undefined') {
  const checkGtag = setInterval(() => {
    if ((window as any).gtag) {
      sfga.flushQueue();
      clearInterval(checkGtag);
    }
  }, 100);
  
  // Stop checking after 10 seconds
  setTimeout(() => clearInterval(checkGtag), 10000);
}
