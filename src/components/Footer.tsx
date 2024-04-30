import { useTranslation } from 'react-i18next';
import ScalamentoWordmarkSvg from './ScalamentoWordmarkSvg';

const Footer = () => {
    const { t } = useTranslation();
  
    return (
        <div className="container footer-container" id="Footer">
            <div className="footer-logo">
                <ScalamentoWordmarkSvg />
            </div>
            <div className="footer-links">
                <p className="inter-m-light">
                    <a href="/imprint">{t('Footer.Imprint')}</a>
                    <a href="/privacy">{t('Footer.Privacy')}</a>
                    <a href="https://www.linkedin.com/company/scalamento" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    © {new Date().getFullYear()} {t('Footer.Company')}
                </p>
            </div>
        </div>
    );
};

export default Footer;