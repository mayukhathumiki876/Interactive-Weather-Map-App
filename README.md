About: 
This PHP and JavaScript project uses the OpenWeatherMap API to retrieve weather information based on city names or geographic coordinates. 
The PHP script acts as a proxy to handle API requests securely, while the JavaScript code integrates Google Maps to display a map and allows users to click on locations to fetch and display real-time weather data. 
The user interface includes a form for city input, a map display, and a section presenting weather details such as temperature, description, humidity, and wind speed. 
The application enhances user experience by dynamically updating the map and weather information on input or map click events.

Description:
WeatherMap is an interactive web application that provides real-time weather information using the OpenWeatherMap API. 
Users can input city names or click on the map to dynamically fetch and display weather details, including temperature, description, humidity, and wind speed. 
The application utilizes PHP for secure API requests and integrates Google Maps for a visual representation of locations.

Features:
- Get weather information by city name or map click.
- Dynamic map updates based on user interactions.
- Clear presentation of temperature, description, humidity, and wind speed.

Usage:
Open index.html in a web browser.
Enter a city name and click "Get Weather" or click on the map.
View the real-time weather information and map marker.

Dependencies:
OpenWeatherMap API
Google Maps JavaScript API

Setup:
- Obtain an API key from OpenWeatherMap and replace the placeholder in proxy.php.
- Include your Google Maps API key in the script tag in index.html.
   "<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY"></script>"
  
Contributors:
Mayukha Thumiki
