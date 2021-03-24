// from data.js
var tableData = data;

// YOUR CODE HERE!

// let dates = tableData.map(date => date.datetime);

// let cities = tableData.map(city => city.city);

// let states = tableData.map(state => state.state);

// let countries = tableData.map(country => country.country);

// let shapes = tableData.map(shape => shape.shape);

// let durations = tableData.map(duration => duration.durationMinutes)

// let comments = tableData.map(comment => comment.comments);

// console.log(dates, cities, states, countries, shapes, durations, comments);
// console.log(cities);
// console.log(states);
// console.log(countries);
// console.log(shapes);
// console.log(durations);
// console.log(comments);

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
        
//     });

// });

// function search(data){
//     if ("1/2/2010" === data.datetime){
//     return data.datetime;
//     }
// }
// let searchdate = tableData.filter(search);

// console.log(searchdate)


function search(data){
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

    if ("1/1/2010" === data.datetime){
        return data;
    }

};

let searchresults = tableData.filter(search);

console.log(searchresults)