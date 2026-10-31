const TRACKING_API = "https://brandbnalo.com/api/tracking/create";

// Set your default supplier ID here
const DEFAULT_SUPPLIER_TOKEN = process.env.NEXT_PUBLIC_SUPPLIER_TOKEN || "6a9fb2bdd936bdc2bb1d6df7";

/**
 * @typedef {{supplierToken?: string}} TrackingObject
 * @typedef {string | TrackingObject | null} TrackingValue
 */

/**
 * @param {{
 *   eventType: string;
 *   obj?: TrackingValue;
 *   source?: string;
 *   supplierToken?: string;
 * }} params
 */
export const trackEvent = ({ eventType, obj = null, source = "Website", supplierToken, }) => {
    const payload = {
        productId: obj || "N/A",
        supplierToken: supplierToken || obj?.supplierToken || DEFAULT_SUPPLIER_TOKEN,
        eventType,
        source,
    };

    if (!payload.supplierToken) {
        console.warn("Tracking: supplierToken missing");
        return;
    }

    // Fire and forget - no blocking navigation
    fetch(TRACKING_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
    }).catch((error) => {
        console.error("Tracking Error:", error);
    });
};

// Call tracking
/** @param {{obj?: TrackingValue, source?: string, supplierToken?: string}} params */
export const handleCallClick = ({ obj = null, source = "Website", supplierToken, }) => {
    trackEvent({
        eventType: "call_click",
        obj,
        source,
        supplierToken,
    });
};

// WhatsApp tracking
/** @param {{obj?: TrackingValue, source?: string, supplierToken?: string}} params */
export const handleWhatsappClick = ({ obj = null, source = "Website", supplierToken, }) => {
    trackEvent({
        eventType: "whatsapp_click",
        obj,
        source,
        supplierToken,
    });
};