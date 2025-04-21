function preload() {
  // Load up the small medals table data
  table = loadTable('medals_table_small.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 1000)
  dumpData()
}

function draw() {
  background(255)
}

function dumpData() {

  rows = table.getRowCount()
  cols = table.getColumnCount()

  print(rows + ' total rows in table');
  print(cols + ' total columns in table');

  print("table.columns:---------->")
  print(table.columns)

  print("table.rows:---------->")
  print(table.rows)

  print("table.getColumn('gold'):---------->")
  print(table.getColumn("gold"))

  print("table.getRow(7):---------->")
  print(table.getRow(7))

  print("table.get(3, 'silver'):---------->")
  print(table.get(3, "silver"))
}