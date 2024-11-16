import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng);
    }; 
    
    return (
        <div className="language-switch-buttons">
            <button   
            className={`byrd-m-extra-bold language-switch-button ${i18n.language === 'de' ? 'language-switch-button-selected' : ''}`} 
            onClick={() => changeLanguage('de')}>
                {t('Header.Language.German')}
            </button>
            <button 
            className={`byrd-m-extra-bold language-switch-button ${i18n.language === 'en' ? 'language-switch-button-selected' : ''}`} 
            onClick={() => changeLanguage('en')}>
                {t('Header.Language.English')}
            </button>
            {/*<button 
            className={`byrd-m-extra-bold language-switch-button ${i18n.language === 'fr' ? 'language-switch-button-selected' : ''}`} 
            onClick={() => changeLanguage('fr')}>
                {t('Header.Language.French')}
            </button>*/}
        </div>
    );
};

export default Header;
