import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="container" id="Header">
            <Link to="/" className="header-link">
                <div className="header-images">
                    <picture className="header-image-logo">
                        <source srcSet="/header/icon.webp" type="image/webp" />
                        <img
                            src="/header/logo.png"
                            alt={t('Header.AltText.Logo')}
                            width="200"
                            height="163"
                        />
                    </picture>
                    <picture className="header-image-header">
                        <source srcSet="/header/header.webp" type="image/webp" />
                        <img
                            src="/header/header.png"
                            alt={t('Header.AltText.Header')}
                            width="600"
                            height="190"
                        />
                    </picture>
                    <picture className="header-image-logo">
                        <source srcSet="/header/icon.webp" type="image/webp" />
                        <img
                            src="/header/logo.png"
                            alt={t('Header.AltText.Logo')}
                            width="200"
                            height="163"
                        />
                    </picture>
                </div>
            </Link>
        </header>
    );
};

export default Header;