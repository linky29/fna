import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import IconTitle from './IconTitle';
import { settings } from '../config/settings';

const Purpose = () => {
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
        <section id="purpose" className="container">
            <IconTitle titleKey="Purpose.Title" />
            <div className="spacer-s" />
            <div className="inter-l-light">{t('Purpose.Content.1')}</div>
            <div className="spacer-s" />
            <div className="inter-l-light">{t('Purpose.Content.2')}</div>
            <div className="spacer-s" />
            <div className="inter-l-light">
                {t('Purpose.Content.3')}{' '}
                <a 
                    className="purpose-action-link" 
                    href="/templates/satzung.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <b>{t('Purpose.Content.4')}</b>
                </a>
            </div>
            <div className="spacer-s" />
            <div className="purpose-action-images">
                {[...Array(visibleImages).keys()].map((num) => (
                    <img
                        key={num + 1}
                        className="purpose-action-image"
                        src={`/action/${num + 1}.png`}
                        alt={`Action ${num + 1}`}
                        width="400"
                        height="266"
                    />
                ))}
            </div>
        </section>
    );
};

export default Purpose;
