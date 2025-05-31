const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey = "904e30c385e3bd964b8b0072df049344";

weatherForm.addEventListener("submit", event => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        displayError("Please enter the city");
        return;
    }

    getWeatherData(city);
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
    errorDisplay.style.color = "red";

    card.textContent = ""; 
    card.appendChild(errorDisplay);
    card.style.display = "flex";
}