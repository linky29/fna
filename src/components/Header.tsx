import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className="container" id="Header">
            <div className="header-images">
                <picture className="header-image-logo">
                    <source srcSet="/header/icon.webp" type="image/webp" />
                    <img src="/header/logo.png" alt="Logo" />
                </picture>
                <picture className="header-image-header">
                    <source srcSet="/header/header.webp" type="image/webp" />
                    <img src="/header/header.png" alt="Header" />
                </picture>
                <picture className="header-image-logo">
                    <source srcSet="/header/icon.webp" type="image/webp" />
                    <img src="/header/logo.png" alt="Logo" />
                </picture>
            </div>
            <div className="spacer-s"></div>
            <div className="inter-xl-light">{t('Header.Intro')}</div>
        </div>
    );
};

export default Header;
