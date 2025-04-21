let museums;

function setup() {
  museums = [
    {
      name: "British Museum",
      location: "London",
      founded: 1759,
      hours: {open: "09:00", close: "18:00"}
    },
    {
      name: "Musée d'Orsay",
      location: "Paris",
      founded: 1986,
      hours: {open: "09:30", close: "18:00"}
    },
    {
      name: "Gallerie degli Uffizi",
      location: "Florence",
      founded: 1581,
      hours: {open: "08:15", close: "18:50"}
    },
  ]
}

function draw() {
  createCanvas(600, 600);
  background(200);
  for (let i=0; i<museums.length; i++) {
    text(museums[i].name, 50, 50 + i*40)
    text(museums[i].hours.open, 50, 50 + i*40 + 15)
  }
}
