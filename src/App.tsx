import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import PressureWashing from "./pages/demos/PressureWashing";
import MobileDetailing from "./pages/demos/MobileDetailing";
import TradesTemplate from "./pages/demos/TradesTemplate";
import DebugView from "./pages/proof/DebugView";
import Lighthouse from "./pages/proof/Lighthouse";
import ProofGifs from "./pages/proof/ProofGifs";
import Dashboard from "./pages/proof/Dashboard";

const queryClient = new QueryClient();

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/demos/pressure-washing" element={<PressureWashing />} />
          <Route path="/demos/mobile-detailing" element={<MobileDetailing />} />
          <Route path="/demos/trades-template" element={<TradesTemplate />} />
          <Route path="/proof/debugview" element={<DebugView />} />
          <Route path="/proof/lighthouse" element={<Lighthouse />} />
          <Route path="/proof/gifs" element={<ProofGifs />} />
          <Route path="/proof/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
