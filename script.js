const cityTemp = document.querySelector("#temperature");
const cityName = document.querySelector("#cityName");
const humidity = document.querySelector(".humidity");

// Connect open weather API
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a461925d79fc440221121b90fd18ec1c"
)
  .then((response) => response.json())
  .then((data) => {
    // Process the data here

    console.log(data);

    cityTemp.innerHTML = data.main.temp;
    humidity.innerHTML = data.main.humidity;
    cityName.innerHTML = data.name;
  })
  .catch((error) => {
    // Handle any errors here
    console.log("Not Sucessfull");
  });


  // Another unnecessary comment
  // Another one
  

