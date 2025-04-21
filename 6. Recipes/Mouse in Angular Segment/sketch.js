// Segmented mouse interactions
//
// Problem: track mouse position in segments of a circle
// Which segment is the mouse in?
// 
// Solution: Use P5 rotate() and translate()

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES); 
}

function draw() {
  background(220);
  drawSegments(7)
}

function drawSegments(numSegments) {
  // Compute the angle of each segment
  angle = 360/numSegments

  // Keep track of total angle as we go
  totalAngle = 0 
  
  // Shift origin to centre of canvas
  translate(width/2, height/2);
  
  for (let i=0; i<numSegments; i++) {
    // Draw sement line
    stroke("grey")
    strokeWeight(1)
    line(0, 0, 300,0)
    
    // Draw the text in the centre of the segment
    // We push the state so we can rotate the text to make it horizontal
    push()                                          // save the drawing state
    noStroke()
    fill("black")
    rotate(angle/2)                                 // rotate half a segment to make text centred in the segment
    rotatedText(""+i, 305,5, -(totalAngle+angle/2)) // rotate text itself back to horizontal
    pop()                                           // revert the drawing state back to what it was
    
    // Check if we are in the segment.  Draw a circle to confirm
    if (isInSegment(angle, totalAngle)) {
      drawInSegment()
    }
    
    // Rotate the coordinates
    rotate(angle)
    totalAngle += angle
  }
}

// Draw whatever we want in the segment
function drawInSegment() {
  push()
  rotate(angle/2)
  fill("green")
  circle(200,0, 20)
  pop()
}

// Draw text at position rotated by the angle at that position
function rotatedText(txt, x, y, angle) {
  push()            // save the drawing state
  translate(x, y)   // move the origin of rotation to be the text position
  rotate(angle)     // rotate around the origin
  text(txt, 0, 0)   // draw the text
  pop()             // revert the drawing state back to what it was
}

// Rotate a point by the given angle around the given origin
function rotatePoint(pointX, pointY, originX, originY, angle) {
  // Translate the mouse to the new origin 
  let translatedX = pointX-originX
  let translatedY = pointY-originY

  // Rotate the mouse coordinates backwards by the angle
  rotatedX = translatedX * cos(-angle) - translatedY * sin(-angle)
  rotatedY = translatedY * cos(-angle) + translatedX * sin(-angle)
  
  return {x:rotatedX, y:rotatedY}
}

// Rotate the mouse coordinates by the given angle around the given origin
function rotateMouse(originX, originY, angle) {
  return rotatePoint(mouseX, mouseY, originX, originY, angle)
}

// Check if mouse is in the segment
function isInSegment(segmentAngle, totalAngle) {
  // Rotate the mouse position
  rmouse = rotateMouse(width/2, height/2, totalAngle)
  
  // Compute the angle between the horizontal and the mouse
  v1 = createVector(200, 0)
  v2 = createVector(rmouse.x, rmouse.y)
  ab = v1.angleBetween(v2) 
  
  // Check if angle is in the segment
  return ab<segmentAngle && ab>0
}
