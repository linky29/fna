import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle';
import { settings } from '../config/settings';

const Membership = () => {
    const { t } = useTranslation();

    return (
        <section id="Membership">
            <div className="container">
                <IconTitle titleKey="Membership.Title" />
            </div>

            <div id="membership" className="module membership">
                <div className="container">
                    <div className="inter-l-light">
                        {t('Membership.Content.1')}
                        {t('Membership.Content.2')}
                    </div>
                    <div className="spacer-xs"></div>
                    <div className="inter-l-light">
                        {t('Membership.Content.3')}{' '}
                        <a
                            className="membership-action-link"
                            href="/templates/aufnahmeantrag.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>{t('Membership.Content.4')}</b>
                        </a>{' '}
                        {t('Membership.Content.5')}{' '}
                        <a
                            className="membership-action-link"
                            href="/templates/sepa-lastschriftmandat.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b>{t('Membership.Content.6')}</b>
                        </a>{' '}
                        {t('Membership.Content.7')}{' '}
                        <a
                            className="membership-action-link"
                            href={`mailto:${settings.email}`}
                        >
                            <b>{settings.email}</b>{' '}
                        </a>
                        {t('Membership.Content.8')}{' '}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;
