document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const postcode = document.getElementById("postcode").value;
  const countryCode = "de";
  const apiKey = "992a04c803eff7ae34ab713685ea94e7";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${postcode},${countryCode}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;

      document.getElementById("weatherInfo").innerHTML = `
            <p>Weather: ${weatherDescription}</p>
            <p>Temperature: ${temperature}°C</p>
        `;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      document.getElementById("weatherInfo").innerHTML =
        "<p>Failed to fetch weather data. Please try again.</p>";
    });
}
