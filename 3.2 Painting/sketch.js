function setup() {
  createCanvas(800, 600);
  strokeWeight(4);
  stroke(0);
}

function draw() {
  // Draw a line from the previous mousr position to the current mouse position
  line(mouseX, mouseY, pmouseX, pmouseY);
}
