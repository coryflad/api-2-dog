"use strict";
// uses the number value to get the apprproiate # of images
function getImage(numInput) {
    if (numInput < 0) {
        fetch("https://dog.ceo/api/breeds/image/random/")
            .then(response => response.json())
            .then(responseJson => displayDogs(responseJson))
            .catch(error => alert("Something went wrong. Try again later."));
    } else if (numInput > 50) {
        return alert("Please choose a number equal or less than 50");
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
            .then(response => response.json())
            .then(responseJson => displayDogs(responseJson))
            .catch(error => alert("Something went wrong. Try again later."));
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

// passes the number value from user from to getImage
function userInput() {
    $("#dog-num-form").submit(e => {
        e.preventDefault();
        let userNum = $("#num-dog").val();
        getImage(userNum);
    });
}


$(function () {
    console.log("App loaded! Waiting for submit!")
    userInput();
});



