import { useTranslation } from 'react-i18next';
import { settings } from '../config/settings';
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
                    <a href={settings.linkedInUrl} target="_blank" rel="noopener noreferrer">
                        {t('Footer.LinkedIn')}
                    </a>
                    © {new Date().getFullYear()} {t('Footer.Company')}
                </p>
            </div>
        </div>
    );
};

export default Footer;