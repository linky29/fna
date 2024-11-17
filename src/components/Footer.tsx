import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="container footer-container" id="Footer">
            <div className="footer-links inter-l-light">
                <a href="/imprint">{t('Footer.Imprint')}</a>
                <a href="/privacy">{t('Footer.Privacy')}</a>
            </div>
            <div className="inter-l-light">
                © {new Date().getFullYear()} {t('Footer.Company')}
            </div>

        </footer>
    );
};

export default Footer;
