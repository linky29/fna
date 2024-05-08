import { useTranslation } from 'react-i18next';

const Intro = () => {
    const { t } = useTranslation();

    return (
        <section className="container" id="Intro">
            <div className="spacer-xs"></div>
            <div className="inter-l-light">{t('Intro')}</div>
        </section>
    );
};

export default Intro;