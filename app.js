const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey = "904e30c385e3bd964b8b0072df049344";

weatherForm.addEventListener("submit" , event => {

    event.preventDefault();

    const city = cityInput.Value;

    if(city) {

        displayError = "pleass enter the city";

    }
    else{

        displayError = "pleass enter the city";

    }

});

async function getWeatherData(city) {
    
};

function displayInfo(data) {


};

function getWeatherEmoji(weatherId) {



};

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;

    city.displayError.Value
    
    card.textContent = "";
    card.style.display = "flex"


}