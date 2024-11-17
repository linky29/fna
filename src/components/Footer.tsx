import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="container footer-container" id="Footer">
            <div className="footer-links">
                <p className="inter-m-light">
                    <a href="/imprint">{t('Footer.Imprint')}</a>
                    <a href="/privacy">{t('Footer.Privacy')}</a>
                    © {new Date().getFullYear()} {t('Footer.Company')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
