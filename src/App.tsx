import './config/i18n';
import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GoogleAnalyticsLoader from './components/GoogleAnalyticsLoader';

// Dynamisch importierte Komponenten
const LanguageSwitch = lazy(() => import('./components/LanguageSwitch'));
const Header = lazy(() => import('./components/Header'));
const Basics = lazy(() => import('./components/Basics'));
const Details = lazy(() => import('./components/Details'));
const Commercials = lazy(() => import('./components/Commercials'));
const References = lazy(() => import('./components/References'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));
const Imprint = lazy(() => import('./components/Imprint'));
const Privacy = lazy(() => import('./components/Privacy'));

function Head() {
    const { t } = useTranslation(); 

    return (
        <Helmet>
            <meta name="description" content={t('Misc.MetaDescription')} />
            <title>{t('Misc.PageTitle')}</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
            <link rel="preconnect" href="https://consentcdn.cookiebot.com" />
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://consentcdn.cookiebot.com" />
        </Helmet>
    );
}

const App: React.FC = () => {
    const { t } = useTranslation(); 

    return (
    <BrowserRouter>
        <GoogleAnalyticsLoader />
        <Suspense fallback={<div>{t('Misc.Loading')}</div>}>
            <div className="canvas">
                <Head />
                <LanguageSwitch />
                <Header />
                <main>
                    <Routes>
                        <Route index element={
                            <Suspense fallback={<div>{t('Misc.Loading')}</div>}>
                                <Basics />
                                <Details />
                                <Commercials />
                                <References />
                                <ContactForm />
                            </Suspense>
                        } />
                        <Route path="/imprint" element={<Imprint />} />
                        <Route path="/privacy" element={<Privacy />} />
                    </Routes>
                </main>        
                <Footer />
            </div>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;