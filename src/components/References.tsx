import { useTranslation } from 'react-i18next';
import { settings } from '../config/settings';
import IconTitle from './IconTitle';

// Define an interface for the quote marks structure
interface QuoteMarks {
  start: string;
  end: string;
}

// Define a type for the object that holds all language-specific quote marks
interface Quotes {
  [key: string]: QuoteMarks;
}

const References = () => {
    const { t, i18n } = useTranslation();

    // Define the quotes with proper typing
    const quotes: Quotes = {
        en: { start: `“`, end: `”` },
        de: { start: `„`, end: `“` },
        fr: { start: `« `, end: ` »` }
    };
    const currentQuotes = quotes[i18n.language] || quotes['en']; // Default to English if not available

    return (
        <section id="References">
            <div className="container">
                <IconTitle titleKey="References.Title" />    
            </div>

            <div className="module references" id="References">
                <div className="container">
                    <div className="references-content">
                        <div className="references-content-voices">
                            <div className="references-left-column inter-l-light">
                                <blockquote>
                                    <p>{currentQuotes.start}{t('References.1.Voice')}{currentQuotes.end}</p>
                                    <footer><cite>{t('References.1.Customer')}</cite></footer>
                                </blockquote>
                                <blockquote>
                                    <p>{currentQuotes.start}{t('References.2.Voice')}{currentQuotes.end}</p>
                                    <footer><cite>{t('References.2.Customer')}</cite></footer>
                                </blockquote>
                            </div>
                            <div className="spacer-xs"></div>
                            <div className="references-right-column inter-l-light">
                                <blockquote>
                                    <p>{currentQuotes.start}{t('References.3.Voice')}{currentQuotes.end}</p>
                                    <footer><cite>{t('References.3.Customer')}</cite></footer>
                                </blockquote>
                                <blockquote>
                                    <p>{currentQuotes.start}{t('References.4.Voice')}{currentQuotes.end}</p>
                                    <footer><cite>{t('References.4.Customer')}</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="spacer-s"></div>
                        <div className="inter-l-light">
                            {t('References.Haufe.Pre')}{' '}
                            <a href={settings.haufeUrl} target="_blank" rel="noopener noreferrer" className="references-linkout">
                                <b>{t('References.Haufe.Mid')}</b>
                            </a>
                            {' '}{t('References.Haufe.End')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default References;