// from data.js
var tableData = data;


// Select table body
let table = d3.select("tbody");

//Read in tableData
tableData.forEach((sighting) => {
    var row = table.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

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
            cell = row.append("td");
            cell.text(value);
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
    tableData.forEach((sighting) => {
        var row = table.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    // Clear input text
    
}



// let dates = tableData.map(date => date.datetime);

// let cities = tableData.map(city => city.city);

// let states = tableData.map(state => state.state);

// let countries = tableData.map(country => country.country);

// let shapes = tableData.map(shape => shape.shape);

// let durations = tableData.map(duration => duration.durationMinutes)

// let comments = tableData.map(comment => comment.comments);
// console.log(dates);

// console.log(dates, cities, states, countries, shapes, durations, comments);
// console.log(cities);
// console.log(states);
// console.log(countries);
// console.log(shapes);
// console.log(durations);
// console.log(comments);

// dates = tableData.forEach(function(item){
//     console.log(item["datetime"]);
// });

// let table = d3.select("#tbody");

// dates.forEach((rec => {
//     table.append("tr").append("td")
// }))

// tableData.forEach((data)=>{
//     Object.entries(data).forEach(([key,value])=>{
//         if (key==='datetime'){
//             date = value;
//             console.log(date);
//         }
//         else if (key==='city'){
//             city = value;
//             console.log(city);
//         }
//         else if (key==='state'){
//             state = value;
//             console.log(state);
//         }
//         else if (key==='country'){
//             country = value;
//             console.log(country);
//         }
//         else if (key==='shape'){
//             shape = value;
//             console.log(shape);
//         }
//         else if (key==='durationMinutes'){
//             durationMinutes = value;
//             console.log(durationMinutes);
//         }
//         else {
//             comments = value;
//             console.log(comments);
//         }
        
//     })
// });



// dates.forEach((rec => {
//     table.append("tr").append("td")
// }));



// });

// function search(data){
//     if ("1/2/2010" === data.datetime){
//     return data.datetime;
//     }
// }
// let searchdate = tableData.filter(search);

// console.log(searchdate)


// function search(data){
//     if ("1/2/2010" === data.datetime){}
//     let date = true
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

//     if ("1/1/2010" === data.datetime){
//         return data;
//     }

// };

// let searchresults = tableData.filter(search);

// console.log(searchresults)