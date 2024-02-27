var map;
var marker;

function initialize() {
    var mapOptions = {
        center: { lat: 32.75, lng: -97.13 },
        zoom: 8
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    map.addListener('click', function(event) {
		removeMarker();
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        getWeatherByCoordinates(latitude, longitude); 
    });
}


function getWeather() {
    var cityInput = document.getElementById('cityInput').value;
    if (cityInput.trim() !== '') {
		const url = `proxy.php?q=${cityInput}`;
		fetchWeatherData(url);
    } else {
        document.getElementById('output').innerHTML = 'Please enter a city name.';
    }
}


function fetchWeatherData(apiUrl) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displayWeather(response);
            } else {
                document.getElementById('output').innerHTML = 'Error: ' + xhr.statusText;
            }
        }
    };
    xhr.open("GET", apiUrl, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();
}



function getWeatherByCoordinates(latitude, longitude) {
	const url = `proxy.php?lat=${latitude}&lon=${longitude}`;
    fetchWeatherData(url);
}

function displayWeather(weatherData) {
    var temperatureFahrenheit = weatherData.main.temp;
    var weatherDescription = weatherData.weather[0].description;
    var cityName = weatherData.name;
    var coordinates_ = weatherData.coord;
    var latitude = coordinates_.lat;
    var longitude = coordinates_.lon;
    var humidity = weatherData.main.humidity;
    var windSpeed = weatherData.wind.speed;

    var outputText = `Weather Report:<br>
    City: ${cityName}<br>
    Latitude: ${latitude}<br>
    Longitude: ${longitude}<br>
    Temperature: ${temperatureFahrenheit}°F<br>
    Weather Description: ${weatherDescription}<br>
    Humidity: ${humidity}%<br>
    Wind Speed: ${windSpeed} mph`;

    map.setCenter({ lat: latitude, lng: longitude });
    removeMarker();
    marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: cityName,
    });

    var weatherInfoElement = document.getElementById('weatherInfo');
    weatherInfoElement.style.fontSize = '18px';
    weatherInfoElement.innerHTML = outputText;
}

function removeMarker() {
    if (marker) {
        marker.setMap(null);
    }
}
