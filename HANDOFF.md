# Handoff Guide — Proof Launch Studio
**Project:** Agency Landing Page MVP  
**Status:** Ready for production  
**Last Updated:** 2025-10-19T19:55:00Z

---

## What to Edit Next

### 1. Real Demo URLs (DemoGallery.tsx)
**Current:** Placeholder "View demo" buttons  
**Action:** Replace with actual client demo URLs

**File:** `src/components/DemoGallery.tsx`  
**Lines:** 24–30, 55–61

```typescript
// Replace handleViewDemo function:
const handleViewDemo = (demoUrl: string) => {
  sfga.fire('audit_click', {
    event_category: 'micro',
    dest: 'demo_view',
    page_location: window.location.href,
  });
  window.open(demoUrl, '_blank');
};

// Update Button onClick:
onClick={() => handleViewDemo('https://demo1.prooflaunchstudio.com')}
```

### 2. Privacy Policy Link (Footer.tsx)
**Current:** `href="#"` placeholder  
**Action:** Add real privacy policy URL

**File:** `src/components/Footer.tsx`  
**Line:** 41

```typescript
<a
  href="https://prooflaunchstudio.com/privacy"
  className="..."
>
  Privacy Policy
</a>
```

### 3. Production GA4 Setup
**Current:** DebugView enabled (`window.sfgaAllowed=true`)  
**Action:** Add production GA4 Measurement ID to `index.html`

**File:** `index.html`  
**Add before closing `</head>`:**

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## GA4 Tracking Setup

### Events to Monitor
1. **`audit_click` (conversion)** — Primary goal (Calendly bookings)
2. **`whatsapp_click`** — Secondary conversion (WhatsApp inquiries)
3. **`email_click`** — Tertiary conversion (Email inquiries)
4. **`audit_click` (micro)** — Engagement (Demo views)

### Mark as Conversions in GA4
1. Go to GA4 → Configure → Events
2. Find `audit_click`, `whatsapp_click`, `email_click`
3. Toggle "Mark as conversion"
4. Set up conversion goals in Google Ads (if running PPC)

### Expected Uplift Targets
- **Week 1:** 10–20 audit bookings (baseline)
- **Month 1:** 30–50 audit bookings (optimization phase)
- **Quarter 1:** 100+ audit bookings (scale phase)

---

## Edit Window Policy

### 1 Edit Round (≤15 Lines)
**Included in build fee:**
- Minor copy tweaks (headlines, CTAs)
- Color/spacing adjustments
- Link updates (demos, privacy policy)

**Not included:**
- New sections/components
- Functionality changes
- Third-party integrations

**How to Request:**
1. List changes in priority order
2. Keep total ≤15 lines changed
3. Submit via email with "Edit Round" in subject
4. Turnaround: 24–48 hours

---

## Rollback Instructions

### Last Block Summary
**Block:** H1-REFINE (Hero micro-polish)  
**Files changed:** `src/components/Hero.tsx`  
**Lines changed:** 12 lines

### Git Revert Commands
```bash
# View last commit
git log --oneline -1

# Revert Hero changes only
git checkout HEAD~1 -- src/components/Hero.tsx

# Or revert entire last commit
git revert HEAD

# Push to staging
git push origin main
```

### Manual Rollback (Hero.tsx)
**Revert spacing:** Change `space-y-5 md:space-y-7` back to `space-y-6 md:space-y-8` (line 10)  
**Revert CTA layout:** Move email link back into separate `<div className="pt-2">` wrapper (after line 64)

---

## Going Live Checklist

### Pre-Launch (30 min)
- [ ] **DNS:** Connect custom domain in Lovable → Settings → Domains
- [ ] **SSL:** Verify HTTPS certificate active (auto-provisioned)
- [ ] **GA4:** Add production Measurement ID to `index.html`
- [ ] **Links:** Replace demo URLs in `DemoGallery.tsx`
- [ ] **Privacy:** Add privacy policy URL in `Footer.tsx`

### Launch Day (15 min)
- [ ] **Cache warm:** Load site 3× to populate CDN edge cache
- [ ] **Test CTAs:** Click all 9 CTA instances (Hero, Offer, Packages, Demos, StickyCTA, Footer)
- [ ] **DebugView:** Confirm events fire in GA4 real-time report
- [ ] **Mobile:** Test on iPhone Safari + Android Chrome
- [ ] **Lighthouse:** Run audit → confirm Performance ≥85, SEO ≥90

### Post-Launch (Week 1)
- [ ] **Submit sitemap:** Google Search Console → Sitemaps → Add `sitemap.xml`
- [ ] **Monitor conversions:** GA4 → Reports → Conversions (daily check)
- [ ] **Speed check:** PageSpeed Insights → verify LCP <2.5s, CLS=0
- [ ] **Broken links:** Use Screaming Frog or similar crawler
- [ ] **90-day review:** Schedule follow-up call to review clicks + enquiries

---

## Support Contacts

**Agency:** Proof Launch Studio  
**Email:** hello@prooflaunchstudio.com  
**WhatsApp:** +61436275470  
**Calendly:** https://calendly.com/hello-prooflaunchstudio

**For edit requests:** Email with "Edit Round" in subject  
**For urgent fixes:** WhatsApp (response within 4 hours during business hours)

---

**Handoff Status:** ✅ **READY**  
**Next action:** Manual verification (Lighthouse + GA4 DebugView) → Go live