// from data.js
var tableData = data;


// Select table body
let table = d3.select("tbody");

//Create function to read in tableData
function fullTable(data){
    tableData.forEach((sighting) => {
        let row = table.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        let cell = row.append("td").text(value);
        });
    });
}

// Select the buttons
let filterButton = d3.select("#filter-button");
let clearButton = d3.select("#clear-button")

// Select the form
let form = d3.select("#search-form");


// Create event handlers 
filterButton.on("click", runFilter);
clearButton.on("click", runClear)
form.on("submit",runFilter);

// Form Filter Function
function runFilter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the Date Element
    let dateElement = d3.select("#datetime-input");

    console.log(dateElement.property("value"))

    // Select the Date Value Entered
    let dateValue = dateElement.property("value");

    // Filter table by Date Value
    let dateSearch = tableData.filter(tableData => tableData.datetime === dateValue);

    // Show filter results in console
    console.log(dateSearch);

    // Clear table before input results
    table.html("")

    // Input the filter data into table format
    dateSearch.forEach((results) => {
        row = table.append("tr");
        Object.entries(results).forEach(([key,value]) => {
        cell = row.append("td").text(value);
        });
    
    });

}

// Clear Filter Function
function runClear(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear table before input results
    table.html("")
    

    // Input the filter data into table format
    fullTable(tableData)

}

fullTable(tableData);

