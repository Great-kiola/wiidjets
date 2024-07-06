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
  console.log("Error during fetch " + error.message);

});
  
// Date 
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayofweek = date.getDay();

normalDate.innerText = date.toDateString();

console.log(date.toLocaleString('default' , {
  month: 'long',
  weekday: 'short'
}));


// Date of birth calculation


// 1 
const date3 = new Date();

// 2
const byMonth = date3.getMonth();f

// 3
const hour = date3.getHours();
const min = date3.getMinutes();
console.log(hour + ":" + min);

// 4
console.log(date3.toLocaleString("default" , {
  weekday: "long"
}));

