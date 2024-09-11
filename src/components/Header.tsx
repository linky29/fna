import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header id="Header" className="container">
            <Link to="/" className="header-link">
                <div className="header-images">
                    <picture className="header-image-logo">
                        <source 
                            srcSet="
                                /header/icon.webp 1x, 
                                /header/icon@1.5x.webp 1.5x, 
                                /header/icon@2x.webp 2x" 
                            type="image/webp" />
                        <img
                            srcSet="
                                /header/icon.png 1x, 
                                /header/icon@1.5x.png 1.5x, 
                                /header/icon@2x.png 2x"
                            sizes="(max-width: 600px) 100px, 200px"
                            src="/header/icon.png"
                            alt={t('Header.AltText.Logo')}
                            width="200"
                            height="163"
                        />
                    </picture>
                    <picture className="header-image-header">
                        <source 
                            srcSet="
                                /header/header.webp 1x, 
                                /header/header@1.5x.webp 1.5x, 
                                /header/header@2x.webp 2x" 
                            type="image/webp" />
                        <img
                            srcSet="
                                /header/header.png 1x, 
                                /header/header@1.5x.png 1.5x, 
                                /header/header@2x.png 2x"
                            sizes="(max-width: 600px) 300px, 600px"
                            src="/header/header.png"
                            alt={t('Header.AltText.Header')}
                            width="600"
                            height="190"
                        />
                    </picture>
                    <picture className="header-image-logo">
                        <source 
                            srcSet="
                                /header/icon.webp 1x, 
                                /header/icon@1.5x.webp 1.5x, 
                                /header/icon@2x.webp 2x" 
                            type="image/webp" />
                        <img
                            srcSet="
                                /header/icon.png 1x, 
                                /header/icon@1.5x.png 1.5x, 
                                /header/icon@2x.png 2x"
                            sizes="(max-width: 600px) 100px, 200px"
                            src="/header/icon.png"
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
