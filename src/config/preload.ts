/*import { settings } from './settings';

document.addEventListener("DOMContentLoaded", () => {
  // Setze Cookiebot-Skript
  const cookiebotScript = document.createElement('script');
  cookiebotScript.id = 'Cookiebot';
  cookiebotScript.src = 'https://consent.cookiebot.com/uc.js';
  cookiebotScript.setAttribute('data-cbid', settings.cookiebotId);
  cookiebotScript.setAttribute('data-blockingmode', 'auto');
  cookiebotScript.type = 'text/javascript';
  document.head.appendChild(cookiebotScript);

  // Füge Google Analytics Tag hinzu
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`;
  document.head.appendChild(gtagScript);

  // Füge Inline-Skript für Google Analytics hinzu
  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${settings.googleAnalyticsId}', {
      'send_page_view': false
    });
  `;
  document.head.appendChild(inlineScript);
});*/