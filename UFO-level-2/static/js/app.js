// from data.js
var tableData = data;

// Select table body
let table = d3.select("tbody");

//Create function to read in tableData
function fullTable(data){
    table.html("");

    tableData.forEach((sighting) => {
        var row = table.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}


// Select the buttons
let filterButton = d3.select("#filter-button");
let clearButton = d3.select("#clear-button");

// Select the form
let form = d3.select("#search-form");


// Create event handlers 
filterButton.on("click", runFilter);
clearButton.on("click", runClear);
form.on("submit",runFilter);



// Create Filter Function
function runFilter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the Search Values
   
    let dateValue = d3.select("#datetime-input").property("value");
    let cityValue = d3.select("#city-input").property("value");
    let stateValue = d3.select("#state-input").property("value");
    let countryValue = d3.select("#country-input").property("value");
    let shapeValue = d3.select("#shape-input").property("value");


    // Establish array of input filters to search
    let filters = [];

    if (dateValue.length>0){
        filters.push(dateValue)
    }
    if (cityValue.length>0){
        filters.push(cityValue)
    }
    if (stateValue.length>0){
        filters.push(stateValue)
    }
    if (countryValue.length>0){
        filters.push(countryValue)
    }
    if (shapeValue.length>0){
        filters.push(shapeValue)
    }
    

    //  // Clear table before input results
    table.html("");

    // Establish array a returned rows from filter after looping through input values
    let searchData = []

    filters.forEach(val => {
        test = val
        searchData = tableData.filter(row => {
            if (row.datetime === test || row.city === test ||
                row.state === test || row.country === test ||
                row.shape === test)
                return row; 
        })    
    })
            
    // Append table with only search results
    searchData.forEach((sighting) => {
        row = table.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        cell = row.append("td");
        cell.text(value);
        });
    });

    // Display results to compare
    console.log(searchData);
    console.log(filters)


}

// Clear Filter Function
function runClear(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear table before input results
    table.html("");
    

    // Restablish full table of sightings
    fullTable(tableData);

};

fullTable(tableData);
