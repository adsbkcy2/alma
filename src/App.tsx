
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react'; // Added React and useEffect import
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        console.log('Netlify Identity initialized:', user);
      });
      window.netlifyIdentity.on('login', user => {
        console.log('User logged in:', user);
        // يمكنك هنا توجيه المستخدم إلى لوحة التحكم بعد تسجيل الدخول
        // window.location.href = '/admin/';
      });
      window.netlifyIdentity.on('logout', () => {
        console.log('User logged out');
      });
      window.netlifyIdentity.on('error', err => {
        console.error('Netlify Identity error:', err);
      });

      // هذا السطر مهم لضمان أن الويدجت يلتقط التوكنات في الرابط
      window.netlifyIdentity.init();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:id" element={<Collections />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;


