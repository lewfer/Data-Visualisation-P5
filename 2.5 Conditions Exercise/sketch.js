var x = 0
var y = 300
var incrementX = 1
var incrementY = 1

function setup() {
  createCanvas(800, 600);
  print(width, height)
}

function draw() {
  background(204);

  // Check if we need to bounce off the left or right
  if (x > width) {
    incrementX = -1;  // bounce off the right hand side
  }
  else if (x < 0) {
    incrementX = 1;  // bounce off the left hand side
  }
  
  // Check if we need to bounce off the top or bottom
  if (y > height) {
    incrementY = -1; // bounce off bottom
  }
  else if (y < 0) {
    incrementY = 1; // bounce off top
  }

  // Draw the circle in its new position
  circle(x, y, 20);

  // Move the circle in the required direction
  x = x + incrementX;
  y = y + incrementY;

}
