var x = 700;
var y = 100;
var w = 80;
var h = 50;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // If the mouse is within the box
  if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h)) {
    fill(255, 0, 0); // fill dark red
  }
  else {
    fill(200, 0, 0); // fill bright red
  }

  // Draw the rect
  rect(x, y, w, h);
}
