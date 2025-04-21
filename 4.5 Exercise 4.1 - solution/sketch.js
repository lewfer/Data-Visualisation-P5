function preload() {
  // Load up the medals table data
  table = loadTable('medals_table.csv', 'csv', 'header');
}

function setup() {
  var c = createCanvas(800, 1000);
  noLoop()
  textAlign(LEFT, BASELINE);

  // Define the drawing area
  drawingLeft = 130
  drawingRight = width - 50
  drawingTop = 50
  drawingBottom = height - 50

  barHeight = 10
  barGap = 2
}

function draw() {
  background(255)
  rect(0,0,width,height)

  push()
  translate(drawingLeft, drawingTop)

  // Cycle through the table
  for (let r = 0; r < table.getRowCount(); r++) {
    let country = table.getString(r, "country")
    let golds = table.getString(r, "gold")

    let y = 40+r*10

    print(country, golds)

    fill(0)
    textAlign(RIGHT, BASELINE);
    text(country, 0, y);

    noStroke()
    fill(color(255,215,0))
    rect(10, y-barHeight+barGap, 2*golds, barHeight-barGap)
  }
  pop()

  // Draw the title
  posx = this.width / 2
  posy = 40
  noStroke();
  fill('black')
  textSize(15);
  textAlign(CENTER, BASELINE);
  text("Olympics 2016", posx, posy);  
}
