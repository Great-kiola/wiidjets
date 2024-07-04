// All selector and pointers

const cityTemp = document.querySelector("#temperature");
const cityName = document.querySelector("#cityName");
const humidity = document.querySelector(".humidity");
const normalDate = document.querySelector("#normalDate");

// Connect open weather API

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a461925d79fc440221121b90fd18ec1c"
)
.then((response) => response.json())
.then((data) => {  
  

  console.log(data);

  cityTemp.innerHTML = data.main.temp;
  humidity.innerHTML = data.main.humidity;
  cityName.innerHTML = data.name;
})
.catch((error) => {
    console.log("Not Sucessfull");
});
  

 // Date

const date = new Date();

normalDate.innerText = date;
console.log(date);