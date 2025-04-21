let underground;

function preload() {
  // Load all the stations
  underground = loadJSON('london_underground_stations.json');
}

function setup() {
  // Find all the piccadilly line stations
  piccadilly = []
  for (let i=0; i<underground.stations.length; i++) {
    station = underground.stations[i];
    if (station.lines.includes("Piccadilly"))
      piccadilly.push(station.name)
  }

  // Save them to a file
  save(piccadilly, "piccadilly.json");
}

function draw() {
}