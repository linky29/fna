// References.tsx
import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle';

const References = () => {
    const { t } = useTranslation();
  
    return (
        <>
            <div className="container">
                <IconTitle titleKey="References.Title" />    
            </div>

            <div className="module references" id="References">
                <div className="container">
                    <div className="references-content">
                        <div className="left-column inter-l-light">
                            <p><i>{t('References.1.Voice')}</i><br/> <b>{t('References.1.Customer')}</b></p>
                            <p><i>{t('References.2.Voice')}</i><br/> <b>{t('References.2.Customer')}</b></p>
                        </div>
                        <div className="right-column">
                            <h3>{t('References.Haufe')}</h3>
                            <img src="path/to/haufe_image.jpg" alt="Haufe" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default References;