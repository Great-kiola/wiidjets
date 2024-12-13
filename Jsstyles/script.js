require('dotenv').config();
import { config } from 'dotenv';
config();

// All selector and pointers
const cityTemp = document.querySelector("#temperature");
const cityName = document.querySelector("#cityName");
const humidity = document.querySelector(".humidity");
// const normalDate = document.querySelector("#currDate");
// const userAge = document.querySelector(".userAge").innerHTML;
const btcPrice = document.querySelector(".btc-price");

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
// const dayofweek = date.getDay();

// Used to get the price of the crypto
fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
  headers: {
      "X-CoinAPI-Key": process.env.API_KEY // Replace with your API key
      }
  })
  .then(response => response.json())
  .then((data) => {
    let price = data.rate
    let convertedPrice = price.toFixed(2)
    btcPrice.innerHTML = convertedPrice

  })
  .catch(error => console.error('Error:', error));


// Used for the details of the crypto
fetch("https://api.coinpaprika.com/v1/coins")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      console.log(data[i].name);
    }
  })
  .catch((eRR) => {
    console.log(eRR);
  });


