import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="container" id="Header">
            <Link to="/" style={{ textDecoration: 'none' }}> {/* Hinzufügen des Link-Wrappers mit der Zielroute '/' */}
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
            </Link>
        </div>
    );
};

export default Header;
