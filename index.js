'use strict';

// uses the number entered by the user and generates the url
function getImages(number) {

    const url = `https://dog.ceo/api/breeds/image/random/${number}`;

    console.log(url);

    // gets images from the API
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayImage(responseJson))
        .catch(err => {
            console.log(err);
        });
}

// displays the images to the DOM
function displayImage(responseJson) {

    console.log(responseJson);

    $('.results').html('');
    responseJson.message.forEach(image => {
        $('.results').append(`<img src="${image}">`);
    });
    $('.results').removeClass('hidden');
}

// watches for the number the user inputs
function userInput() {

    $('#dog-num-form').submit(event => {

        event.preventDefault();

        let number = $('#num-dog').val();

        console.log(number);
        if (number > 50) {
            alert('please enter a number less than 50')
        } else {
            getImages(number);
        }
    })


}

$(userInput);



