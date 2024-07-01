const cityTemp = document.querySelector("#temp");

// Connect open weather API
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a461925d79fc440221121b90fd18ec1c"
)
  .then((response) => response.json())
  .then((data) => {
    // Process the data here

    console.log(data);
  })
  .catch((error) => {
    // Handle any errors here
    console.log("Not Sucessfull");
  });


  // Another unnecessary comment
  // Another one
  

