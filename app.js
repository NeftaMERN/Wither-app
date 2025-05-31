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

        try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );


        if (!response.ok) {

            throw new Error("City not found");

        }

        const data = await response.json();

        displayInfo(data);


    } catch (error) {

        displayError(error.message);
        
    }
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