import { useTranslation } from 'react-i18next';

function Imprint() {
    const { t } = useTranslation();     
          
    return (
        <section className="imprint module" id="imprint">
            <div className="container">
                <div className="imprintTitle byrd-xl-extra-bold">{t('Imprint.Title')}</div>
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