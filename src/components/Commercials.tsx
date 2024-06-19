import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle'; 

const Commercials = () => {
    const { t } = useTranslation();

    return (
        <section id="commercials" className="module commercials">
            <div className="container">
                <div className="spacer-s" />
                <IconTitle titleKey="Commercials.1.Title" />               
                <div className="spacer-s" />
                <div className="inter-l-light">
                    {t('Commercials.1.Content.1')}{' '}
                    <b>{t('Commercials.1.Content.2')}</b>{' '}
                    {t('Commercials.1.Content.3')}{' '}
                    <b>{t('Commercials.1.Content.4')}</b>{' '}
                    {t('Commercials.1.Content.5')}{' '}
                    <b>{t('Commercials.1.Content.6')}</b>{' '}
                    {t('Commercials.1.Content.7')}
                </div>
                <div className="spacer-m" />
                <IconTitle titleKey="Commercials.2.Title" />
                <div className="spacer-s" />
                <div className="inter-l-light">
                    {t('Commercials.2.Content.1')}{' '}
                    <b>{t('Commercials.2.Content.2')}</b>{' '}
                    {t('Commercials.2.Content.3')}{' '}
                </div>
            </div>
        </section>
    );
};

export default Commercials;