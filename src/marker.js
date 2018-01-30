const mapboxgl = require("mapbox-gl");

function marker(type, coords){
    let icon = null
    switch(type) {
    case 'hotel':
        icon = 'http://i.imgur.com/D9574Cu.png';
        break;
    case 'restaurant':
        icon = 'http://i.imgur.com/cqR6pUI.png'
        break;
    default:
        icon = 'http://i.imgur.com/WbMOfMl.png'
    }
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${icon})`;
    console.log('MARKER MADE')
    return new mapboxgl.Marker(markerDomEl).setLngLat(coords)
}

module.exports = { marker }
