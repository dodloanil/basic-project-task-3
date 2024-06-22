document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const apiKey = 'your_api_key'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value.trim();

    if (city.length === 0) {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('There was a problem fetching the weather data:', error);
            document.getElementById('weatherInfo').innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
});
