function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(204);

  // stroke weight
  strokeWeight(0);
  circle(60, 70, 100);
  strokeWeight(1);
  circle(170, 70, 100);
  strokeWeight(10);
  circle(290, 70, 100);
  strokeWeight(15);
  circle(420, 70, 100);

  // stroke join
  strokeWeight(20);
  strokeJoin(MITER);
  square(30, 180, 60);
  strokeJoin(BEVEL);
  square(130, 180, 60);
  strokeJoin(ROUND);
  square(230, 180, 60);

  // stroke cap
  strokeWeight(20);
  strokeCap(ROUND);
  line(50, 300, 50, 350);
  strokeCap(SQUARE);
  line(150, 300, 150, 350);
  strokeCap(PROJECT);
  line(250, 300, 250, 350);

  // reset attributes
  strokeWeight(1);

  // fill colour
  fill(150);
  circle(60, 450, 100);
  fill(255, 0, 0);
  circle(170, 450, 100);
  fill(0, 255, 0);
  circle(280, 450, 100);
  fill(0, 0, 255);
  circle(390, 450, 100);

  // reset attributes
  fill(255);

  // stroke colour
  strokeWeight(8);
  stroke(150);
  circle(60, 600, 100);
  stroke(255, 0, 0);
  circle(170, 600, 100);
  stroke(0, 255, 0);
  circle(280, 600, 100);
  stroke(0, 0, 255);
  circle(390, 600, 100);
  stroke(0, 0, 255);
  noStroke();
  circle(500, 600, 100);

  // transparency
  noStroke();
  fill(204, 80, 0, 90);
  circle(460, 300, 100);
  fill(60, 100, 100, 90);
  circle(500, 280, 100);
  fill(204, 230, 0, 90);
  circle(480, 340, 100);

  // reset attributes
  strokeWeight(1);
  fill(255);  
  stroke(0);

  // custom shape
  beginShape();
  vertex(505, 110);
  vertex(640, 45);
  vertex(630, 12);
  vertex(666, 5);
  vertex(671, 54);
  vertex(738, 23);
  vertex(750, 65);
  vertex(680, 78);
  vertex(663, 161);
  vertex(619, 154);
  vertex(649, 78);
  vertex(522, 144);
  endShape(CLOSE);

}
