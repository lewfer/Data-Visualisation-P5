// Sample to illustrate rotation of mouse coordinates
//
// The problem:  When you use rotate() the drawing coordinates are rotated
// but the mouse coordinates, mouseX and mouseY are not
//
// The solution: Apply a rotate transformation to the mouseX and mouseY
//
// See here for the maths: https://academo.org/demos/rotation-about-point/

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  
  angle = 45

  push()
  
    // Move origin to centre of canvas
    translate(200,200)
  
    // Rotate coordinates by the desired angle and draw the new axes
    rotate(angle)
    line(-200, 0, 200, 0)
    line(0, -200, 0, 200)
    text("0,0", 3, -3)

    // Draw a circle at the reported mouse position
    // This is not following the actual mouse!
    fill("red")
    circle(mouseX, mouseY, 10)

    // Translate the mouse to the new origin and draw a blue circle
    let translatedMouseX = mouseX-200
    let translatedMouseY = mouseY-200
    fill("blue")
    circle(translatedMouseX, translatedMouseY, 10)

    // Rotate the mouse coordinates backwards by the angle and draw a green circle
    rotatedMouseX = translatedMouseX * cos(-angle) - translatedMouseY * sin(-angle)
    rotatedMouseY = translatedMouseY * cos(-angle) + translatedMouseX * sin(-angle)
    fill("green")
    circle(rotatedMouseX, rotatedMouseY, 10)
  
  pop()
  
  // Report the mouse positions on screen
  fill("red")
  text("Mouse: "+mouseX+","+mouseY, 0, 20)
  fill("blue")
  text("Translated:"+round(translatedMouseX)+","+round(translatedMouseY), 0,40)
  fill("green")
  text("Rotated:"+round(rotatedMouseX)+","+round(rotatedMouseY), 0,60)

  
}

