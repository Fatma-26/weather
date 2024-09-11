const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "1d8019170a21a004b857cabc18ea2284",
};

let weather = {};
const temp = document.getElementById("current-temp");
const town = document.getElementById("town-name");

// Changed 'readystatechange' to 'DOMContentLoaded' for better timing of code execution
document.addEventListener("DOMContentLoaded", () => {
    console.log("Document ready");

    const locationInput = document.getElementById("lication_input");
    const btn = document.getElementById("btn");

    // Changed event listener from 'keypress' to 'click' for the button
    btn.addEventListener("click", () => {
        getWeatherData(locationInput.value.trim()); // Fetch data on button click
    });

    // Added 'trim()' to remove extra spaces from input value
    locationInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            getWeatherData(locationInput.value.trim()); // Fetch data on Enter key press
        }
    });
});

const getWeatherData = (city) => {
    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
            weather = { ...result };
            fill_data(weather);
            console.log(result);
        })
        // Added error handling for fetch
        .catch((error) => console.error("Error fetching weather data:", error)); 
};

const fill_data = (weather) => {
    temp.textContent = `${Math.round(weather.main.temp)}°C`;
    town.textContent = weather.name;
};
