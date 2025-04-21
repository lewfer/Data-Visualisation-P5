let underground;

function preload() {
  // Load all the stations
  underground = loadJSON('london_underground_stations.json');
}

function setup() {
  // Find all the stations that are intersections
  intersections = []
  for (let i=0; i<underground.stations.length; i++) {
    station = underground.stations[i];
    if (station.lines.length>1)
    intersections.push(station.name)
  }

  // Save them to a file
  save(intersections, "intersections.json");
}

function draw() {
}