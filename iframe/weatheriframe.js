function fetchWeatherAndUpdate() {
    const apiKey = 'fa8c617b8ead450486f100526241102'; // Replace 'YOUR_API_KEY' with your actual WeatherAPI API key
    const city = 'Verden'; // Specify the city for which you want to retrieve weather data
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Handle the weather data
        console.clear();
        console.log('Current weather for:', data);
        console.log("Data Updated");
      
       // Extract the humidity, wind speed, and precipitation
       const humidity = data.current.humidity;
       const windSpeedKph = data.current.gust_kph;
       const currentTemp = data.current.temp_c;
      
       // Find the elements to update
       const humidElement = document.getElementById("w-humid");
       const windElement = document.getElementById("w-wind");
       const tempElement = document.getElementById("w-temp");
      
       // Update the content of the elements
       humidElement.textContent = "Luftfeuchtigkeit: " + humidity + "%";
       windElement.textContent = "Wind:  " + windSpeedKph + " km/h";
       tempElement.textContent = currentTemp + "°C |";
      
        // Set background color based on condition code
        setWeatherBackground(data.current.condition.code);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

  // Call fetchWeatherAndUpdate initially
  fetchWeatherAndUpdate();

  // Update weather data every 15 minutes
  setInterval(fetchWeatherAndUpdate, 15 * 60 * 1000); // 15 minutes * 60 seconds * 1000 milliseconds

    function setWeatherBackground(conditionCode) {
      const weatherTile = document.getElementById("weathertile-1");
  
      let backgroundColor;
  
      // Map condition codes to background colors
      switch (conditionCode) {
        case 1000: // Clear
          backgroundColor = "#87ceeb"; // Sky Blue
          break;
        case 1003: // Partly cloudy
        case 1006:
        case 1009:
          backgroundColor = "#FFD700"; // Gold
          break;
        case 1030: // Fog
          backgroundColor = "#808080"; // Gray
          break;
        case 1063: // Rain
        case 1066:
        case 1069:
        case 1072:
          backgroundColor = "#4682B4"; // Steel Blue
          break;
        case 1114: // Snow
        case 1117:
          backgroundColor = "#FFFFFF"; // White
          break;
        case 1087: // Thunderstorm
        case 1273:
        case 1276:
        case 1279:
        case 1282:
          backgroundColor = "#800000"; // Maroon
          break;
        default:
          backgroundColor = "#FFFFFF"; // Default White
      }
  
      // Apply the background color
      weatherTile.style.backgroundColor = backgroundColor;
    }

    // Example usage:
    // Call the function with a specific condition code to set the background color
    setWeatherBackground(1000); // Example condition code (Clear)

// Reload the page every 5 minutes
setTimeout(function() {
location.reload();
}, 5 * 60 * 1000); // 5 minutes * 60 seconds * 1000 milliseconds
