function setup() {
  createCanvas(800, 600);
  strokeWeight(4);
}

function draw() {
  // Only draw if the mouse is pressed
  if (mouseIsPressed) {
    // If the right mouse button is pressed draw in white, otherwise draw in black
    if (mouseButton == RIGHT) {
      stroke(255)
    }
    else {
      stroke(0)
    }
    
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
