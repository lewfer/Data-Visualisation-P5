var x = 0
var y = 300
var increment = 1

function setup() {
  createCanvas(800, 600);
  print(width, height)
}

function draw() {
  background(204);

  // Check if we need to bounce
  if (x > width) {
    increment = -1;  // bounce off the right hand side
  }
  else if (x < 0) {
    increment = 1;  // bounce off the left hand side
  }
  
  // Draw the circle in its new position
  circle(x, y, 20);

  // Move the circle in the required direction
  x = x + increment;
}

