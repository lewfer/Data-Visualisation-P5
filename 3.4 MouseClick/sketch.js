function setup() {
  createCanvas(800, 600);
  strokeWeight(4);
  stroke(0);
}

function draw() {
  // Only draw if the mouse is pressed
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
