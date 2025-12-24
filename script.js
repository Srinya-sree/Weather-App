const apiKey = "REAL_API_KEY_HERE";
let unit = "metric";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // DEBUG LINE

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°`;
    document.getElementById("desc").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `Wind: ${data.wind.speed} m/s`;
    document.getElementById("icon").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  } catch (error) {
    alert("Internet or API error");
    console.error(error);
  }
}

