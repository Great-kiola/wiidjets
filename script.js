// All selector and pointers

const cityTemp = document.querySelector("#temperature");
const cityName = document.querySelector("#cityName");
const humidity = document.querySelector(".humidity");
const normalDate = document.querySelector("#normalDate");
const userAge = document.querySelector(".userAge");

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

console.log(
  date.toLocaleString("default", {
    month: "long",
    weekday: "short",
  })
);

// Date of birth calculation
console.log("The year is " + date.getFullYear());
// let userYear = prompt("What year were you born");

// Validate prompt
let minVal = 4;

// Checks if the value is greater than or less than 4 numbers
if (userYear.length <= minVal){
  
  // Checks if value is a number
  if (isNaN(userYear)) {
    alert("Please enter a number")
  } else {
    let userBirth = date.getFullYear() - userYear;
    userAge.innerText = userBirth;
    console.log(`You are ${userBirth} years old`);
  }

} else {
  alert("Please enter a 4 digit number");
}
