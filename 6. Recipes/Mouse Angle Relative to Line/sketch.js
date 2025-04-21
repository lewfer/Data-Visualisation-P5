// Vector angles
//
// Problem: Compute the angular position of the mouse relative to a line
//
// Solution: Create vectors from the origin to the mouse and for the line.
// Then use the P5 angleBetween() function

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(240);
  
  // Create a horizontal vector
  let v1 = createVector(200, 0);
  stroke("black")
  line(0,0,200,0)

  // Create a vector to the mouse position
  let v2 = createVector(mouseX, mouseY);
  stroke("blue")
  line(0,0,mouseX, mouseY)

  // Compute the angle between the vectors
  let angleBetween = v1.angleBetween(v2);
  
  // Display the angle
  noStroke();
  text(""+angleBetween, 200,200)
}