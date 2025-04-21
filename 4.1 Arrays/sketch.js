// Define an array of x positions
var x = [100, 200, 300, 400]

function setup() {
  createCanvas(1200,600)
}

function draw() {
  // Draw one circle at each x position
  for (i=0; i<x.length; i++) {
    circle(x[i], 200, 40)
  }
}
