// This version changes the line thickness depending on the speed of the mouse
  
function setup() {
  createCanvas(800, 600);
  stroke(0);
}

function draw() {
  // Set the weight to be the distance travelled since the last frame (this indicates the mouse speed)
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);

  // Don't let the weight get more than 20 pixels
  weight = max([1, 20-weight])

  // Draw the line
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}