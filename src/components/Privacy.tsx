import { useTranslation } from 'react-i18next';

function Privacy() {
    const { t } = useTranslation();
    let headlineCount = 0;
  
    // Funktion, um den Headline-Text mit Nummerierung zu generieren
    const getHeadline = (textKey: string) => {
        headlineCount += 1; // Inkrementieren bei jedem Aufruf
        return (
        <div className="privacyHeadline inter-l-bold">{`${headlineCount}. ${t(textKey)}`}</div>
        );
    };
    
    return (
        <section className="privacy module" id="privacy">
            <div className="container">
                <h1 className="byrd-xl-extra-bold">{t('Privacy.Title')}</h1>

                {/* Datenschutzerklärung */}
                <div className="privacySection">
                    <div className="privacyContent inter-l-light">{t('Privacy.PrivacyPolicy.Content.1')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.PrivacyPolicy.Content.2')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.PrivacyPolicy.Content.3')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.PrivacyPolicy.Content.4')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.PrivacyPolicy.Content.5')}</div>
                </div>

                {/* Begriffsbestimmungen */}
                <div className="privacySection">
                    {getHeadline('Privacy.Definitions.Headline')}
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Intro')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.PersonalData.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.PersonalData.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.DataSubject.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.DataSubject.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.Processing.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.Processing.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.ProcessingRestriction.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.ProcessingRestriction.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.Profiling.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.Profiling.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.Pseudonymisation.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.Pseudonymisation.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.Controller.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.Controller.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.Processor.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.Processor.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.Recipient.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.Recipient.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.ThirdParty.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.ThirdParty.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Definitions.Content.Consent.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Definitions.Content.Consent.Content')}</div>
                </div>

                {/* ControllerInformation */}
                <div className="privacySection">
                    {getHeadline('Privacy.ControllerInformation.Headline')}
                    <div className="privacyContent inter-l-light">{t('Privacy.ControllerInformation.Content.1')}</div>
                    <div className="privacyContent inter-l-light">
                        {t('Privacy.ControllerInformation.Content.2')}<br />
                        {t('Privacy.ControllerInformation.Content.3')}<br />
                        {t('Privacy.ControllerInformation.Content.4')}<br />
                        {t('Privacy.ControllerInformation.Content.5')}
                    </div>
                    <div className="privacyContent inter-l-light">
                        {t('Privacy.ControllerInformation.Content.6')}  |  {t('Privacy.ControllerInformation.Content.7')}
                    </div>
                </div>

                {/* GeneralDataCollection */}
                <div className="privacySection">
                    {getHeadline('Privacy.GeneralDataCollection.Headline')}
                    <div className="privacyContent inter-l-light">{t('Privacy.GeneralDataCollection.Collection')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.GeneralDataCollection.Usage')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.GeneralDataCollection.Footer')}</div>
                </div>

                {/* DataDeletionAndStorageDuration */}
                <div className="privacySection">
                    {getHeadline('Privacy.DataDeletionAndStorageDuration.Headline')}
                    <div className="privacyContent inter-l-light">{t('Privacy.DataDeletionAndStorageDuration.Content.1')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataDeletionAndStorageDuration.Content.2')}</div>
                </div>

                {/* DataSubjectRights */}
                <div className="privacySection">
                    {getHeadline('Privacy.DataSubjectRights.Headline')}
                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.RightToConfirmation.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToConfirmation.Content')}</div>

                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.RightToInformation.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.Intro')}</div>
                    <ul>
                        <li className="privacyListItem inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.1')}</li>
                        <li className="privacyListItem inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.2')}</li>
                        <li className="privacyListItem inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.3')}</li>
                        <li className="privacyListItem inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.4')}</li>
                        <li className="privacyListItem inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.5')}</li>
                        <li className="privacyListItem inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.6')}</li>
                        <li className="privacyListItem inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.7')}</li>
                        <li className="privacyListItem inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToInformation.Content.8')}</li>
                    </ul>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.RightToRectification.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToRectification.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.RightToErasure.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToErasure.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.RightToRestrictionOfProcessing.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToRestrictionOfProcessing.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.RightToDataPortability.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToDataPortability.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.RightToObject.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToObject.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.AutomatedIndividualDecisionMaking.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.AutomatedIndividualDecisionMaking.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.DataSubjectRights.Content.RightToWithdrawConsent.Heading')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.DataSubjectRights.Content.RightToWithdrawConsent.Content')}</div>                    
                </div>

                {/* PrivacyInApplicationsAndInTheApplicationProcess */}
                <div className="privacySection">
                    {getHeadline('Privacy.PrivacyInApplicationsAndInTheApplicationProcess.Headline')}                    
                    <div className="privacyContent inter-l-light">{t('Privacy.PrivacyInApplicationsAndInTheApplicationProcess.Content')}</div>
                </div>

                {/* Cookies */}
                <div className="privacySection">
                    {getHeadline('Privacy.Cookies.Headline')}
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Cookies.Content.SessionCookies.Title')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Cookies.Content.SessionCookies.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Cookies.Content.ThirdPartyCookies.Title')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Cookies.Content.ThirdPartyCookies.Content')}</div>
                    <div className="privacyHeading inter-l-bold">{t('Privacy.Cookies.Content.CookieRemovalOption.Title')}</div>
                    <div className="privacyContent inter-l-light">{t('Privacy.Cookies.Content.CookieRemovalOption.Content')}</div>                   
                </div>

                {/* Rechtsgrundlage der Verarbeitung */}
                <div className="privacySection">
                    {getHeadline('Privacy.LegalBasisForProcessing.Headline')}
                    <div className="privacyContent inter-l-light">{t('Privacy.LegalBasisForProcessing.Content')}</div>
                </div>

                {/* Berechtigte Interessen */}
                <div className="privacySection">
                    {getHeadline('Privacy.LegitimateInterestsPursuedByTheControllerOrByAThirdParty.Headline')}                    
                    <div className="privacyContent inter-l-light">{t('Privacy.LegitimateInterestsPursuedByTheControllerOrByAThirdParty.Content')}</div>
                </div>

                {/* Dauer der Speicherung */}
                <div className="privacySection">
                    {getHeadline('Privacy.DurationForWhichThePersonalDataWillBeStored.Headline')}                    
                    <div className="privacyContent inter-l-light">{t('Privacy.DurationForWhichThePersonalDataWillBeStored.Content')}</div>
                </div>

                {/* Bereitstellung personenbezogener Daten als gesetzliche oder vertragliche Voraussetzung */}
                <div className="privacySection">
                    {getHeadline('Privacy.ProvisionOfPersonalDataAsStatutoryOrContractualRequirement.Headline')}
                    <div className="privacyContent inter-l-light">{t('Privacy.ProvisionOfPersonalDataAsStatutoryOrContractualRequirement.Content')}</div>
                </div>

                {/* Automatisierte Entscheidungsfindung */}
                <div className="privacySection">
                    {getHeadline('Privacy.ExistenceOfAutomatedDecisionMaking.Headline')}
                    <div className="privacyContent inter-l-light">{t('Privacy.ExistenceOfAutomatedDecisionMaking.Content')}</div>
                </div>
            </div>
        </section>
    );
}

export default Privacy;
