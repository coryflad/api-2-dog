"use strict";
// uses the number value to get the apprproiate # of images

function getImage(numInput) {
    if (numInput < 0) {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => response.json())
            .then(responseJson => displayDogs(responseJson))
    } else if (numInput > 50) {
        return alert('Hey fuckface, choose a number equal of less then 50');
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
            .then(response => response.json())
            .then(responseJson => console.log(responseJson));
    }
}

// adds the dog images to the DOM
function displayDogs(responseJson) {
    console.log(responseJson);
    $(".results").html("");
    responseJson.message.forEach(renderedImg => {
        $(".results").append(`<img src="${renderedImg}" class="results">`);
    });
    //display the results section
    $(".results").removeClass("hidden");
}

// passes the number value from the user to getImage
function userInput() {
    $('#dog-num-form').submit(e => {
        e.preventDefault();
        let userNum = $('#num-dog').val();
        getImage(userNum);
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!')
    userInput();
});



