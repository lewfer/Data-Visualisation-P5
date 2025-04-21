var y = 70
var d = 100

function setup() {
  createCanvas(800, 600);
  print(width, height)
}

function draw() {
  background(204);
  
  // Draw 5 circles
  for (var x = 60; x <= 500; x += 110) {
    for (var y = 70; y <= 400; y += 100) {
      circle(x, y, d);
    }
  }
}
