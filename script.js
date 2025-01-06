let panorama; // Global variable for the panorama

// Predefined locations for 7 holiest sites
const locations = {
    mecca: { lat: 21.4225, lng: 39.8262 },             // Kaaba, Mecca
    medina: { lat: 24.4672, lng: 39.6111 },           // Masjid Al-Nabawi, Medina
    alAqsa: { lat: 31.7767, lng: 35.2354 },           // Al-Aqsa Mosque, Jerusalem
    karbala: { lat: 32.6160, lng: 44.0314 },          // Imam Husayn Shrine, Karbala
    najaf: { lat: 32.0296, lng: 44.3385 },            // Imam Ali Shrine, Najaf
    damascus: { lat: 33.5116, lng: 36.3064 },         // Umayyad Mosque, Damascus
    istanbul: { lat: 41.0086, lng: 28.9802 }          // Hagia Sophia, Istanbul
};

// Initialize Street View
function initialize(location) {
    const panoElement = document.getElementById("pano"); // Get the container
    panorama = new google.maps.StreetViewPanorama(panoElement, {
        position: location,   // Location coordinates
        pov: {
            heading: 34,   // Initial view angle
            pitch: 10      // Tilt angle
        },
        zoom: 1,               // Default zoom
        motionTracking: true,  // Enable gyroscope for mobile
        motionTrackingControl: true
    });
}

// Function to switch locations
function changeLocation(place) {
    const location = locations[place]; // Get coordinates for the place
    panorama.setPosition(location);   // Update the panorama view
}

// Load default view (Mecca) when the page loads
window.onload = () => initialize(locations.mecca);
