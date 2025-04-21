let museum;

function setup() {
  museum = {
    name: "British Museum",
    location: "London",
    founded: 1759,
    hours: {open: "09:00", close: "18:00"}
  }

}

function draw() {
  createCanvas(600, 600);
  background(200);
  text(museum.name, 50, 50)
  text(museum.location, 50, 70)
  text(museum.founded, 50, 90)
  text(museum.hours.open + " to " + museum.hours.close, 50, 110)
}
