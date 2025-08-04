// Create the map
var map = L.map('map').setView([1.3521, 103.8198], 12); // Singapore

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Cluster group
var markers = L.markerClusterGroup();

// Example hotspots
var crimeData = [
  { lat: 1.3642, lng: 103.8904, name: "22 Hougang Ave 3", description: "House Breaking" },
  { lat: 1.3540, lng: 103.8900, name: "105 Hougang Ave 1", description: "Burglaries reported" },
  { lat: 1.350, lng: 103.872, name: "Nex Shopping Centre", description: "Shop Theft" },
  { lat: 1.293, lng: 103.856, name: "Bugis", description: "Robbery-prone zone" },
  { lat: 1.280, lng: 103.850, name: "Marina Bay", description: "Car break-ins" },
  { lat: 1.3642, lng: 103.8904, name: "22 Hougang Ave 3", description: "House Breaking 2" },
];

// Custom icon
var crimeIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/535/535234.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Add markers
crimeData.forEach(spot => {
  var marker = L.marker([spot.lat, spot.lng], { icon: crimeIcon })
    .bindPopup(`<b>${spot.name}</b><br>${spot.description}`);
  markers.addLayer(marker);
});

map.addLayer(markers);

// Optional heatmap
var heatPoints = crimeData.map(d => [d.lat, d.lng, 0.8]);
var heatLayer = L.heatLayer(heatPoints, {
  radius: 25,
  blur: 15,
  maxZoom: 17
}).addTo(map);
