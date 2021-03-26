// from data.js
var tableData = data;

// YOUR CODE HERE!

tableData


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
    
        if ("1/1/2010" === data.datetime && "benton" === data.city &&
        "ar" === data.state && "us" === data.country && "circle" === data.shape){
            return data;
        }
    
    };
    
    let searchresults = tableData.filter(search);
    
    console.log(searchresults)