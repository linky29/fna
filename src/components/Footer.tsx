import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { settings } from '../config/settings';
import ScalamentoWordmarkSvg from './ScalamentoWordmarkSvg';
import ScalamentoSignetSvg from './ScalamentoSignetSvg';

const Footer = () => {
    const { t } = useTranslation();
    const [useSignet, setUseSignet] = useState(window.innerWidth < settings.geometry.breakpoints.minMd);

    // Anpassen des Logos basierend auf der Fensterbreite
    useEffect(() => {
        const handleResize = () => {
            setUseSignet(window.innerWidth < settings.geometry.breakpoints.minMd);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup-Funktion beim Unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className="container footer-container" id="Footer">
            <div className="footer-logo">
                {useSignet ? <ScalamentoSignetSvg /> : <ScalamentoWordmarkSvg />}
            </div>
            <div className="footer-links">
                <p className="inter-m-light">
                    <a href="/imprint">{t('Footer.Imprint')}</a>
                    <a href="/privacy">{t('Footer.Privacy')}</a>
                    <a href={settings.linkedInUrl} target="_blank" rel="noopener noreferrer">
                        {t('Footer.LinkedIn')}
                    </a>
                    © {new Date().getFullYear()} {t('Footer.Company')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
