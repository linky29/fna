import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle'; 

const Details = () => {
    const { t } = useTranslation();

    return (
    <section id="Details">
        <div className="container">
            <IconTitle titleKey="Details.Title" />    
        </div>

        <div id="details" className="module details">
            <div className="container">
                <div className="inter-l-light">{t('Details.Content.1')}</div>
                <div className='spacer-xs'></div>
                <div className="inter-l-light">
                    {t('Details.Content.2')}{' '}
                    <b>{t('Details.Content.3')}</b>{' '}
                    {t('Details.Content.4')}{' '}
                    <b>{t('Details.Content.5')}</b>{' '}
                    {t('Details.Content.6')}
                </div>
                           
                <div className='spacer-xs'></div>
            
                <div className="details-content-with-image">
                    <div className="details-content-text-side">
                        <div className="inter-l-light">
                            {t('Details.Content.7')}{' '}
                            <b>{t('Details.Content.8')}</b>{' '}
                            {t('Details.Content.9')}
                        </div>
                        <div className='spacer-xs'></div>
                        <div className="inter-l-light">{t('Details.Content.10')}</div>
                        <div className='spacer-xs'></div>
                    </div>
                    <picture className="details-content-image-side">
                        <source 
                            srcSet="
                                /details/uoc_board@1x.webp 1x, 
                                /details/uoc_board@1.5x.webp 1.5x, 
                                /details/uoc_board@2x.webp 2x" 
                            type="image/webp" 
                        />
                        <img 
                            src="/details/uoc_board.png" 
                            className='details-content-image'
                            width="657" 
                            height="422" 
                            alt={t('Details.Board')}
                        />
                    </picture>
                </div>
                
                <div className="inter-l-light">
                    {t('Details.Content.11')}{' '}
                    <i>{t('Details.Content.12')}{' '}</i>{' '}
                    {t('Details.Content.13')}{' '}
                    <i>{t('Details.Content.14')}{' '}</i>{'  '}
                    {t('Details.Content.15')}{' '}
                    <i>{t('Details.Content.16')}</i>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Details;