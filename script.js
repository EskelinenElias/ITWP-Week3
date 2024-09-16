
async function getData() {
  const address = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
  try {
    const response = await fetch(address);
    if (!response.ok) {
      throw new Error("Something went wrong while attempting to fetch data.")
    }
    const data = await response.json();
    return data;
    
  } catch(error) {
    console.log("Something else went wrong while attempting to fetch data: ", error)
  }
}

function addRow(label, value) {
  // create a new row
  const tableData = document.getElementById('table-data'); 
  const row = document.createElement('tr');
  const labelCell = document.createElement('td');
  const valueCell = document.createElement('td');
  // populate row with data
  labelCell.innerText = label; 
  valueCell.innerText = value; 
  // add the row to the table
  row.appendChild(labelCell); 
  row.appendChild(valueCell); 
  tableData.appendChild(row); 
}

async function updateTable() {
  console.log("Updating table...")
  // fetch data
  const data = await getData();
  // update table
  
  if (data) {
    const labels = data.dataset.dimension.Alue.category.label; 
    const indices = data.dataset.dimension.Alue.category.index; 
    const values = data.dataset.value; 
    for (let key in labels) {
      let label = labels[key]; 
      let index = indices[key]; 
      let value = values[index]; 
      console.log(`Value ${value}`)
      addRow(label, value); 
    }
  }
  console.log(data)
  console.log("Table updated.");
  
}


updateTable();

//console.log(data.dataset.dimension.Alue.category.label); 
//data.dataset.dimension.Alue.category.label.forEach(label => {
//  console.log(`Municipality: ${label}`)
//});