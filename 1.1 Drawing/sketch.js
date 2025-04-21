function setup() {
  createCanvas(800, 600);
  print(width, height)
}

function draw() {
  background(204);
  
  // draw a square
  square(30, 20, 60,20);
  
  // draw some other shapes
  point(30, 75);
  line(150, 20, 90, 75);
  circle(300, 500, 20);
  triangle(400, 300, 450, 350, 500, 550);
  rect(700, 20, 20, 520);
  quad(200, 31, 220, 20, 240, 60, 230, 76);

}
