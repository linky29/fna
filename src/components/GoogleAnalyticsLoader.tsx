import React from 'react';
import { useEffect } from 'react';
import { settings } from '../config/settings';

const GoogleAnalyticsLoader: React.FC = () => {
    useEffect(() => {
      const loadGoogleAnalytics = () => {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`;
        script.async = true;
        document.head.appendChild(script);
  
        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          const gtag: any = (...args: any[]) => window.dataLayer.push(args);
  
          gtag('js', new Date());
          gtag('config', settings.googleAnalyticsId, { 'anonymize_ip': true, 'send_page_view': false });
        };
      };
  
      const handleConsent = (event: CustomEvent) => {
        if (event.detail?.consent?.statistics) {
          loadGoogleAnalytics();
          const gtag: any = (...args: any[]) => window.dataLayer.push(args);
          gtag('config', settings.googleAnalyticsId, { 'send_page_view': true });
        }
      };
  
      window.addEventListener('CookieConsent', handleConsent as EventListener);
  
      return () => {
        window.removeEventListener('CookieConsent', handleConsent as EventListener);
      };
    }, []);
  
    return null;
  };
  
  export default GoogleAnalyticsLoader;
  