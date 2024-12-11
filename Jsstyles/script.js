// All selector and pointers

const cityTemp = document.querySelector("#temperature");
const cityName = document.querySelector("#cityName");
const humidity = document.querySelector(".humidity");
const normalDate = document.querySelector("#currDate");
const userAge = document.querySelector(".userAge").innerHTML;

// Connect open weather API
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a461925d79fc440221121b90fd18ec1c"
)
.then((response) => response.json())
.then((data) => {
  cityTemp.innerHTML = data.main.temp;
  humidity.innerHTML = data.main.humidity;
  cityName.innerHTML = data.name;
})
.catch((error) => {
    console.log("Error during fetch " + error.message);
});

// Date
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayofweek = date.getDay();

function truncate(x, num){
  if(x.length <= num){
    return x;
  } else{
    return x.slice(0, num) + "...";
  }
}

