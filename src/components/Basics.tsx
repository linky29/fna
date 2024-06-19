import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle';
import { settings } from '../config/settings';

const Basics = () => {
    const { t } = useTranslation();
    const [visibleImages, setVisibleImages] = useState(3);

    const updateImageVisibility = () => {
        const width = window.innerWidth;
        if (width < settings.geometry.breakpoints.sm) {
            setVisibleImages(1);
        } else if (width < settings.geometry.breakpoints.md) {
            setVisibleImages(2);
        } else {
            setVisibleImages(3);
        }
    };

    useEffect(() => {
        updateImageVisibility();
        window.addEventListener('resize', updateImageVisibility);
        return () => window.removeEventListener('resize', updateImageVisibility);
    }, []);

    return (
        <section id="basics" className="container">
            <IconTitle titleKey="Basics.Title" />
            <div className="spacer-s" />
            <div className="inter-l-light">{t('Basics.Content.1')}</div>
            <div className="spacer-s" />
            <div className="inter-l-light">{t('Basics.Content.2')}</div>
            <div className="spacer-s" />
            <div className="basics-action-images">
                {[...Array(visibleImages).keys()].map((num) => (
                    <picture key={num + 1} className="basics-action-image">
                        <source srcSet={`/action/${num + 1}.webp`} type="image/webp" />
                        <img src={`/action/${num + 1}.png`} alt={`Action ${num + 1}`} width="400" height="266" />
                    </picture>
                ))}
            </div>
            <div className="spacer-s" />
            <div className="inter-l-light">{t('Basics.Content.3')}</div>
        </section>
    );
};

export default Basics;