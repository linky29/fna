import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle'; 

const Membership = () => {
    const { t } = useTranslation();

    return (
    <section id="Membership">
        <div className="container">
            <IconTitle titleKey="Membership.Title" />    
        </div>

        <div id="membership" className="module membership">
            <div className="container">
                <div className="inter-l-light">{t('Membership.Content.1')}</div>
                <div className='spacer-xs'></div>
                <div className="inter-l-light">
                    {t('Membership.Content.2')}{' '}
                    <b>{t('Membership.Content.3')}</b>{' '}
                    {t('Membership.Content.4')}{' '}
                    <b>{t('Membership.Content.5')}</b>{' '}
                    {t('Membership.Content.6')}
                </div>
                           
                <div className='spacer-xs'></div>
            
                <div className="membership-content-with-image">
                    <div className="membership-content-text-side">
                        <div className="inter-l-light">
                            {t('Membership.Content.7')}{' '}
                            <b>{t('Membership.Content.8')}</b>{' '}
                            {t('Membership.Content.9')}
                        </div>
                        <div className='spacer-xs'></div>
                        <div className="inter-l-light">{t('Membership.Content.10')}</div>
                        <div className='spacer-xs'></div>
                    </div>
                    <picture className="membership-content-image-side">
                        <source 
                            srcSet="
                                /membership/uoc_board@1x.webp 1x, 
                                /membership/uoc_board@1.5x.webp 1.5x, 
                                /membership/uoc_board@2x.webp 2x" 
                            type="image/webp" 
                        />
                        <img 
                            src="/membership/uoc_board.png" 
                            className='membership-content-image'
                            width="657" 
                            height="422" 
                            alt={t('Membership.Board')}
                        />
                    </picture>
                </div>
                
                <div className="inter-l-light">
                    {t('Membership.Content.11')}{' '}
                    <i>{t('Membership.Content.12')}{' '}</i>{' '}
                    {t('Membership.Content.13')}{' '}
                    <i>{t('Membership.Content.14')}{' '}</i>{'  '}
                    {t('Membership.Content.15')}{' '}
                    <i>{t('Membership.Content.16')}</i>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Membership;