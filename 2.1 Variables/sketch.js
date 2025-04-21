var y = 70
var d = 100

function setup() {
  createCanvas(800, 600);
  print(width, height)
}

function draw() {
  background(204);
  
  // Draw 5 circles
  var x = 60;
  circle(x, y, d);
  x = x + 110;
  circle(x, y, d);
  x = x + 110;
  circle(x, y, d);
  x = x + 110;
  circle(x, y, d);
  x = x + 110;
  circle(x, y, d);
  x = x + 110;
}
