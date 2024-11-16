import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header id="Header" className="container">
            <Link to="/" className="header-link">
                <div className="header-images">
                    <img
                        className="header-image-logo"
                        src="header/logo.png"
                        alt={t('Header.AltText.Logo')}
                        width="250"
                        height="250"
                    />
                    
                    <h1 className="header-title">
                        {t('Header.Title')}
                    </h1>
                    
                    <img
                        className="header-image-logo"
                        src="header/logo.png"
                        alt={t('Header.AltText.Logo')}
                        width="250"
                        height="250"
                    />
                </div>
            </Link>
        </header>
    );
};

export default Header;
