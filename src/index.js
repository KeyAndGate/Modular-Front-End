console.log('Inside index.js')

const {marker} = require('./marker.js')
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoid2hpcmxleXQiLCJhIjoiY2pkMXZ6bTdtMjFnMzJxbjJwaWl2ank5MiJ9.YVXDcHrtqGb339y9aGmteQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const fullstackMarker = marker('activity', [-74.009151, 40.705086]).addTo(map)

// const fullstackMarker= new mapboxgl.Marker(markerDomEl).setLngLat().addTo(map);

// document.getElementById('map').

// document.createElement()
