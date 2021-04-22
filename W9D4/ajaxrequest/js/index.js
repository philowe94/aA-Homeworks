console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
    success(data) {
        console.log("We have your weather!");
        console.log(data);
    },

})

// Add another console log here, outside your AJAX request
console.log("???")

//idk when the request gets sent but the response comes back after both console logs
//the current weather in new york is 277 degrees kelvin
//the page did not refresh
//you can probably use different http methods by changing the type