console.log("Week 8 - JavaScript AJAX");

// This is an example of how you can use the data provided by a web server that delivers data in JSON format
// The task is to access the data on "https://dog.ceo/dog-api/documentation/" and render to user all the available breeds on demand


// by using the existing button in the html file we link the function responsible for getting the data with the "click" event on the button
document.getElementById('right').addEventListener('click', getDogBreeds);


// this function is responsible for starting the data fetching process
function getDogBreeds() {
    // fetch the is a javascript function that makes a call to a server by providing a url in a asynchronous mode
    // fetch return a "promise" thats why we can use ".then" which gives as the capability of providing another function to be called at then of "fetch" process
    // the fetch process starts with making a call to a server and ends when a response comes back from the server
    //fetch("https://dog.ceo/api/breeds/list/all")
    fetch("https://dog.ceo/api/breeds/image/random")
        // when we have the response we need to process the response data by providing a processing function
        .then(processFetchResponse)
        // when we have processed the data to a javascript object we need to provide a function for using that data
        .then(useDogData)
        // by using catch and providing error handling function you can catch the error thrown on the promise chain
        .catch(handleError);
}


// this function transforms the server response body from a string in JSON format to a javascript object in a asynchronous way
// in this function we can check for unwanted server response codes and throw errors
function processFetchResponse(response) {
    console.log(response);
    if (response.status === 404) {
        throw new Error('404 error');
    }

    return response.json();
}
// I create a variable that will let us know if any fecth done till now
var check = 0;
// this function uses the parsed server response body by iterating to its data
function useDogData(data) {
    //console.log(data.message+" THE LINK");
    //for (const key in data.message) {
        createDogBreedParagraph(data.message);
        check = 1;
    //}
}

//
window.addEventListener('load', getDogBreeds);

// this function is called for every dog breed and create a paragraph on the page so the user can see the dog breeds
function createDogBreedParagraph(dog) {
    

    console.log(dog);
    var slider = document.getElementById('slider');

    var old_imaged = document.getElementById('myImg');

    var imaged = "";
    if(old_imaged==null){
         imaged= document.createElement('img');
        imaged.setAttribute('id','myImg');
    }
        else
         imaged = document.getElementById('myImg');
    
    imaged.src = dog;
    imaged.style.height  ="350px";
    imaged.style.width  ="350px";
    slider.appendChild(imaged);
}


function handleError(error) {
    console.log('this is an error', error);
}
    //   console.log("log");