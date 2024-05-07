import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle'; 

const Basics = () => {
    const { t } = useTranslation();
  
    return (
        <div className="container" id="basics">
            <div className="inter-xl-light">{t('Header.Intro')}</div>
            <div className="spacer-s"></div>
            <IconTitle titleKey="Basics.Title" />
            <div className='spacer-s'></div>
            <div className="inter-l-light">{t('Basics.Content.1')}</div>
            <div className='spacer-s'></div> 
            <div className="inter-l-light">{t('Basics.Content.2')}</div>
            <div className='spacer-s'></div> 
            <div className="basics-action-images">
                {[1, 2, 3].map((num) => (
                    <picture key={num} className="action-image">
                        <source srcSet={`/action/${num}.webp`} type="image/webp" />
                        <img src={`/action/${num}.png`} alt={`Action ${num}`} width="400" height="266" />
                    </picture>
                ))}
            </div>
            <div className='spacer-s'></div> 
            <div className="inter-l-light">{t('Basics.Content.3')}</div>            
        </div>
    );
};

export default Basics;