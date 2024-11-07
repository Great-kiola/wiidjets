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

let userYear = 2000;

// Validate prompt
let minVal = 4;

// Checks if the value is greater than or less than 4 numbers
if (userYear.length <= minVal){
  
  // Checks if value is a number
  if (isNaN(userYear)) {
    console.log("Hello");
    // alert("Please enter a number");
  } else {
    let userBirth = date.getFullYear() - userYear;
    userAge.innerText = userBirth;
    console.log(`You are ${userBirth} years old`);
  }

} else {
  // alert("Please enter a 4 digit number");
  console.log("Hello");
}


// CoinmarketCap

// /* Example in Node.js */
// const axios = require('axios');


// let response = null;
// new Promise(async (resolve, reject) => {
//   try {
//     response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//       headers: {
//         'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
//       },
//     });
//   } catch(ex) {
//     response = null;
//     // error
//     console.log(ex);
//     reject(ex);
//   }
//   if (response) {
//     // success
//     // const json = response.data;
//     // console.log(json);
//     // resolve(json);
//     alert(response.data);
//   }
// });


// Fear and greed index 
// Connect open weather API
const url = 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0c84b4802amsh669d15d5e5d8739p13d073jsnd008c486b220',
		'x-rapidapi-host': 'fear-and-greed-index.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a461925d79fc440221121b90fd18ec1c"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     cityTemp.innerHTML = data.main.temp;
//     humidity.innerHTML = data.main.humidity;
//     cityName.innerHTML = data.name;
//   })
//   .catch((error) => {
//     console.log("Error during fetch " + error.message);
//   });
