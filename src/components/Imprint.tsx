import { useTranslation } from 'react-i18next';
import { settings } from '../config/settings'

function Imprint() {
    const { t, i18n } = useTranslation();
      
    const language = i18n.language;
    
    // Hole die AGB-Einstellungen aus der settings-Konfiguration
    const { basePath, prefix, generalTermsFileName, salesTermsFileName } = settings.agb;
      
    // Pfad basierend auf der aktuellen Sprache generieren
    function safelyGetFileName(fileNames: { en: string; de: string; fr: string }, language: string): string {
        return fileNames[language as keyof typeof fileNames] || fileNames.en; // Fallback to English if unavailable
    }
    
    const generalTermsPath = `${basePath}/${language}/${prefix}${safelyGetFileName(generalTermsFileName, language)}`;
    const salesTermsPath = `${basePath}/${language}/${prefix}${safelyGetFileName(salesTermsFileName, language)}`;
          
    return (
        <section className="imprint module" id="imprint">
            <div className="container">
                <div className="imprintTitle byrd-xl-extra-bold">{t('Imprint.Title')}</div>
                <div className="spacer-s" />
                {t('Imprint.Header')}<br />
                {/* Adressen */}
                <div className="imprintSection flexSection">
                    <div className="imprintSectionLeft">
                        <div className="imprintHeader inter-m-bold">{t('Imprint.Address.Title')}</div>
                        <div className="imprintContent inter-m-light">
                            {t('Imprint.Address.Address.1')}<br />
                            {t('Imprint.Address.Address.2')}<br />
                            {t('Imprint.Address.Address.3')}
                        </div>
                    </div>
                    <div className="imprintSectionRight">
                        <div className="imprintHeader inter-m-bold">{t('Imprint.VisitorAddress.Title')}</div>
                        <div className="imprintContent inter-m-light">
                            {t('Imprint.VisitorAddress.Address.1')}<br />
                            {t('Imprint.VisitorAddress.Address.2')}<br />
                            {t('Imprint.VisitorAddress.Address.3')}
                        </div>
                    </div>
                </div>

                {/* Management */}
                <div className="imprintSection">
                    <div className="imprintHeader inter-m-bold">{t('Imprint.ManagingDirector.Title')}</div>
                    <div className="imprintContent inter-m-light">{t('Imprint.ManagingDirector.Name')}</div>
                </div>

                {/* Kontakt & AGB */}
                <div className="imprintSection flexSection">
                    <div className="imprintSectionLeft">
                        <div className="imprintHeader inter-m-bold">{t('Imprint.Contact.Title')}</div>
                        <div className="imprintContent inter-m-light">
                            {t('Imprint.Contact.Details.1')}  -  {t('Imprint.Contact.Details.2')}
                        </div>
                        <div className="imprintContent inter-m-light">{t('Imprint.CommercialRegister.Title')}</div>
                        <div className="imprintContent inter-m-light">{t('Imprint.CommercialRegister.TaxNumber')}</div>
                    </div>
                    <div className="imprintSectionRight">
                        <div className="imprintHeader inter-m-bold">{t('Imprint.TermsAndConditions.Title')}</div>
                        <div className="imprintContent inter-m-light">
                            <a href={generalTermsPath} download>{t('Imprint.TermsAndConditions.General')}</a>
                        </div>
                        <div className="imprintContent inter-m-light">
                            <a href={salesTermsPath} download>{t('Imprint.TermsAndConditions.Sales')}</a>
                        </div>
                    </div>
                </div>

                {/* Haftungsausschluss */}
                <div className="imprintSection">
                    <div className="imprintHeader inter-m-bold">{t('Imprint.Disclaimer.Title')}</div>
                    <div className="imprintContent inter-m-light">{t('Imprint.Disclaimer.Content.1')}</div>
                    <div className="imprintContent inter-m-light">{t('Imprint.Disclaimer.Content.2')}</div>
                    <div className="imprintContent inter-m-light">{t('Imprint.Disclaimer.Content.3')}</div>
                </div>
            </div>
        </section>
    );
}

export default Imprint;