import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle'; 

const Details = () => {
    const { t } = useTranslation();

    return (
    <>
        <div className="container">
            <IconTitle titleKey="Details.Title" />    
        </div>

        <div className="module details" id="details">
            <div className="container">
                <div className="inter-l-light">{t('Details.Content.1')}</div>
                <div className='spacer-s'></div>
                <div className="inter-l-light">{t('Details.Content.2')}</div>
                <div className='spacer-s'></div>
                <div className="content-with-image">
                    <div className="text-side">
                        <div className="inter-l-light">{t('Details.Content.3')}</div>
                        <div className='spacer-s'></div>
                        <div className="inter-l-light">{t('Details.Content.4')}</div>
                        <div className='spacer-s'></div>
                        <div className="inter-l-light">{t('Details.Content.5')}</div>
                        <div className='spacer-s'></div>
                    </div>
                    <picture className="image-side">
                        <source srcSet="/uoc_board.webp" type="image/webp" />
                        <img src="/uoc_board.png" alt="UOC Board" />
                    </picture>
                </div>
                <div className="inter-l-light">{t('Details.Content.6')}</div>
                <div className='spacer-s'></div>
                <div className="inter-l-light">{t('Details.Content.7')}</div>
            </div>
        </div>
    </>
    );
};

export default Details;