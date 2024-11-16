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
                    <div className="spacer-xs"></div>
                    <div className="inter-l-light">
                        {t('Membership.Content.2')}{' '}
                        <a 
                            href="/templates/aufnahmeantrag.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <b>{t('Membership.Content.3')}</b>
                        </a>{' '}
                        {t('Membership.Content.4')}{' '}
                        <a 
                            href="/templates/sepa-lastschriftmandat.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <b>{t('Membership.Content.5')}</b>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;
