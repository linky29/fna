export const settings = {

    cookiebotId: import.meta.env.VITE_COOKIEBOT_ID,
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,

    apiUrl: import.meta.env.VITE_BETAOS_BASE_API_URL,
    linkedInUrl: 'https://www.linkedin.com/company/12950627/',
    scalamentoUrl: 'https://www.scalamento.de',
    haufeUrl: 'https://www.haufe.de/personal/hr-management/agilitaet-agile-werte-und-agile-unternehmenskultur_80_386204.html',
    
    // Meta-Informationen
    geometry: {
        // Breakpoints
        breakpoints: {
            xs:    320, // Extra kleine Geräte (Handys, bis zu 320px)
            tiny:  480, // Zwischengröße für kleine bis mittlere Handys
            sm:    576, // Kleine Geräte (Handys, 576px und darüber)
            minMd: 640, // Kleinere mittlere Geräte (niedrigere Tablet- oder Handy-Landschaft)
            md:    768, // Mittlere Geräte (Tablets, 768px und darüber)
            lg:    992, // Große Geräte (Desktops, 992px und darüber)
            maxLg: 1024, // Größere Tablets und kleine Desktops
            xl:    1200, // Extra große Geräte (große Desktops, 1200px und darüber)
            xxl:   1400, // XXL-Geräte (noch größere Desktops, 1400px und darüber)
            xxxl:  1600  // XXXL-Geräte (ultra große Desktops, 1600px und darüber)
        }
    },

    agb: {
        basePath: '/agb',
        prefix: 'scalamento_gmbh_',
        generalTermsFileName: {
            en: 'terms-and-conditions.pdf',
            de: 'agb.pdf',
            fr: 'conditions-generales-de-vente.pdf',
        },
        salesTermsFileName: {
            en: 'terms-and-conditions.pdf',
            de: 'agb_verkauf.pdf',
            fr: 'conditions-generales-de-vente.pdf',
        },
    },

    OrderForm: {
        fromAddress: 'info@uoc.de',
        fromName: 'Universe of Culture Website',
        mailTo: 'stefan.link@scalamento.de'
    }
};