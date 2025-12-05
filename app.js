const apiKey = "69d6af9d95774a9c42e2373fa511ebe6";

document.addEventListener("DOMContentLoaded", function() {
    console.log("Weather app started");
    
    document.getElementById("searchBtn").addEventListener("click", getWeatherByCity);
    document.getElementById("locationBtn").addEventListener("click", getWeatherByLocation);
    
    document.getElementById("cityInput").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            getWeatherByCity();
        }
    });
});

function getWeatherByCity() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }
    console.log("Searching for:", city);
    fetchWeather(city);
}

function getWeatherByLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation not supported");
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log("Location:", lat, lon);
            fetchWeather(null, lat, lon);
        },
        function(error) {
            alert("Location access denied or failed");
        }
    );
}

async function fetchWeather(city, lat, lon) {
    showLoading(true);
    
    try {
        let url;
        if (city) {
            url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
        } else {
            url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric";
        }
        
        console.log("Fetching:", url);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Weather data not found");
        }
        
        const data = await response.json();
        console.log("Weather data:", data);
        showWeather(data);
        
        await fetchForecast(city, lat, lon);
        
    } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
    } finally {
        showLoading(false);
    }
}

async function fetchForecast(city, lat, lon) {
    try {
        let url;
        if (city) {
            url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=metric";
        } else {
            url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric";
        }
        
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            showForecast(data);
        }
    } catch (error) {
        console.log("Forecast not available");
    }
}

function showWeather(data) {
    document.getElementById("weatherResult").classList.remove("hidden");
    
    document.getElementById("cityName").textContent = data.name + ", " + data.sys.country;
    document.getElementById("temp").textContent = Math.round(data.main.temp) + "°C";
    document.getElementById("condition").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = data.main.humidity + "%";
    document.getElementById("wind").textContent = data.wind.speed + " m/s";
    
    const iconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    document.getElementById("icon").src = iconUrl;
}

function showForecast(data) {
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";
    
    for (let i = 0; i < data.list.length; i += 8) {
        const day = data.list[i];
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(day.main.temp);
        const iconUrl = "https://openweathermap.org/img/wn/" + day.weather[0].icon + ".png";
        
        const dayDiv = document.createElement("div");
        dayDiv.className = "text-center bg-white/20 p-2 rounded";
        dayDiv.innerHTML = `
            <p class="font-bold">${dayName}</p>
            <img src="${iconUrl}" class="w-10 h-10 mx-auto">
            <p>${temp}°C</p>
        `;
        
        forecastDiv.appendChild(dayDiv);
    }
}

function showLoading(show) {
    const loading = document.getElementById("loading");
    if (show) {
        loading.classList.remove("hidden");
    } else {
        loading.classList.add("hidden");
    }
}