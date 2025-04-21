function preload() {
  // Load up the medals table data
  table = loadTable('medals_table.csv', 'csv', 'header');
}

function setup() {
  var c = createCanvas(800, 1000);
  noLoop()
  textAlign(LEFT, BASELINE);
}

function draw() {
  background(255)
  rect(0,0,width,height)

  // Cycle through the table
  for (let r = 0; r < table.getRowCount(); r++) {
    let country = table.getString(r, "country")
    let golds = table.getString(r, "gold")
    
    // Draw something here!
    
  }
}
