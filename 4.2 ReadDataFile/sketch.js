function preload() {
  // Load data from the csv file
  table = loadTable('medals_table.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1200,600);
    
  // Count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  // Cycle through the table, printing out each cell value
  for (let r = 0; r < table.getRowCount(); r++) {
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }  
    print("-----------")
  }
}

function draw() {
}