import './config/i18n';
import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Dynamisch importierte Komponenten
const Header = lazy(() => import('./components/Header'));
const Basics = lazy(() => import('./components/Basics'));
const Details = lazy(() => import('./components/Details'));
const Commercials = lazy(() => import('./components/Commercials'));
const References = lazy(() => import('./components/References'));
const OrderForm = lazy(() => import('./components/OrderForm'));
const Footer = lazy(() => import('./components/Footer'));

function Head() {
  const { t } = useTranslation(); 

  return (
      <Helmet>
          <meta name="description" content={t('metaDescription')} />
          <title>{t('pageTitle')}</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </Helmet>
  );
}

function App() {

  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <div className="canvas">
                <Head />
                <div className="spacer-s"></div>
                <Routes>
                    <Route index element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <>
                                <Header />
                                <Basics />
                                <Details />
                                <Commercials />
                                <References />
                                <OrderForm />
                                <Footer />
                            </>
                        </Suspense>
                    } />
                </Routes>
            </div>
        </Suspense>
    </BrowserRouter>
);
}

export default App;