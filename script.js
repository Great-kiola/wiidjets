// Connect open weather API
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY"
)
  .then((response) => response.json())
  .then((data) => {
    // Process the data here
  })
  .catch((error) => {
    // Handle any errors here
  });


  // Add open-weather Api
  // Get response { This is the API get response code }