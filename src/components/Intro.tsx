import { useTranslation } from 'react-i18next';

const Intro = () => {
    const { t } = useTranslation();

    return (
        <section id="Intro" className="container">
            <div className="spacer-xs" />
            <div className="inter-l-light">{t('Intro')}</div>
        </section>
    );
};

export default Intro;