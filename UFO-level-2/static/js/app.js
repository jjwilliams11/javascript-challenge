// from data.js
var tableData = data;

// Select table body
let table = d3.select("tbody");

//Create function to read in tableData
function fullTable(data){
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

// Form Filter Function
function runFilter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the Search Values
    // let dateElement = d3.select("#datetime-input");
    // if (d3.select("#datetime-input").property("value") !== null){
    //     dateValue = d3.select("#datetime-input").property("value")
    // }
    // if (d3.select("#city-input").property("value") !== null){
    //     cityValue = d3.select("#city-input").property("value")
    // }

    
    let dateValue = d3.select("#datetime-input").property("value");
    let cityValue = d3.select("#city-input").property("value");
    let stateValue = d3.select("#state-input").property("value");
    let countryValue = d3.select("#country-input").property("value");
    let shapeValue = d3.select("#shape-input").property("value");

//    let dateSearch = tableData.filter(data => {
//        if(dateValue !== null){
//            data.datetime === dateValue
//        }
//        else{
//            data.datetime === data.datetime
//        }

//    });
//    let citySearch = dateSearch.filter(data => data.city === cityValue);
//    let stateSearch = 

    //    if(cityValue !== null){
    //        return data.city === cityValue;
    //    }
    // console.log(searchData);
    // console.log(cityValue);
    // searchData = filterData.filter(tableData.datetime === dateValue)

    // let searchData = tableData.filter(tableData => tableData.datetime === dateValue);
        
        // && tableData.city === cityValue &&
        // tableData.state === stateValue && tableData.country === countryValue && tableData.shape === shapeValue)
            
    
    
    // Filter table by Date Value
    let searchResults = tableData.filter((data) => {
        if(dateValue !== null)
            {data.datetime === dateValue}
        else{} 
        && 
        if(cityValue !== null)
            {data.city === cityValue}
    });
    // || data.state === stateValue || data.country === countryValue ||
    // data.shape === shapeValue)


    // Clear table before input results
    table.html("")

        
    searchResults.forEach((results) => {
        row = table.append("tr");
        Object.entries(results).forEach(([key,value]) => {
        cell = row.append("td").text(value);
        });
    
    });
    // tableData.filter((data) => {

    // }
    // console.log(dateValue)
    // console.log(cityValue)
    console.log(searchResults)


}


//     )

    // Show filter results in console
    // console.log(dateSearch);

    // Clear table before input results
    // table.html("")

//     // Input the filter data into table format
    // dateSearch.forEach((results) => {
    //     row = table.append("tr");
    //     Object.entries(results).forEach(([key,value]) => {
    //         row.append("td").text(results.datetime);
    //         row.append("td").text(results.city);
    //         row.append("td").text(results.state);
    //         row.append("td").text(results.country);
    //         row.append("td").text(results.shape);
    //     });
    
    // });

// }

// Clear Filter Function
function runClear(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear table before input results
    table.html("")
    

    // Input the filter data into table format
    tableData.forEach((sighting) => {
        var row = table.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    // Clear input text
    }


fullTable(tableData);

function search(data){
    //     if ("1/2/2010" === data.datetime){}
    // }
    
    // function citysearch(data){
    //     if ("benton" === data.city){}
    // }
    
    // function statesearch(data){
    //     if ("ar" === data.state){}
    // }
    
    // function countrysearch(data){
    //     if ("us" === data.country){}
    // }
    // function shapesearch(data){
    //     if ("circle" === data.shape){}
    
        if (data.shape ==="circle"){
            return data;
        }
    
    };
    
let searchresults = tableData.filter(search);
    
console.log(searchresults)