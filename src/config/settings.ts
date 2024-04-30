export const settings = {
    // Google Analytics ID
    googleAnalyticsId: import.meta.env.VITE_UOC_GOOGLE_ANALYTICS_ID,
    
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
    }
};