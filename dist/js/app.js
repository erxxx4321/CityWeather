/* 

  there are two functions in the area before search-box which is used for showing current weather.

  First, loading default weather data - location setting in Taipei. 

  Second, updating weather data depending on user's choice.

  // weather data from openweathermap

*/

const button = document.querySelector('.input-btn');
const input = document.querySelector('.input');
const weather = document.getElementById('weather');


// API setting
const api = {
  key: "3d716a0e2a794f526b62dcd5f05c9440",
  base: "https://api.openweathermap.org/data/2.5/"
}

// default weather location - taipei 
window.addEventListener('load', () => {
  fetch(`${api.base}weather?q=taipei&units=metric&appid=${api.key}`)
  .then(response => response.json())
  .then(data => {
    const weatherDefault = `
      <i class="icon wi wi-night-sleet wi-owm-${data.weather[0].id}"></i>
      <h1 class="city">${data.name}</h1>
      <p class="temp">${Math.round(data.main.temp)}<sup>°C</sup></p> 
    `
    weather.innerHTML = weatherDefault;

    console.log(data,data.name,data.weather[0].id, Math.round(data.main.temp));
  })
});

// update weather location
button.addEventListener('click', () => {
  fetch(`${api.base}weather?q=${input.value}&units=metric&appid=${api.key}`)
    .then(response => response.json())
    .then(data => {
      const weatherUpdate = `
        <i class="icon wi wi-night-sleet wi-owm-${data.weather[0].id}"></i>
        <h1 class="city">${data.name}</h1>
        <p class="temp">${Math.round(data.main.temp)}<sup>°C</sup></p> 
      `;

      weather.innerHTML = weatherUpdate;

      // console.log(data.name,data.weather[0].id, Math.round(data.main.temp));
    })
    .catch(err => {
      const error = `
                    <p class="err">Wrong City Name!</p>
                    <p class="err">Please try again.</p> 
                    `;

      weather.innerHTML = error;
    })
})


/* 

  The area after search-box is used to show current time based on user's location.

  // current time info from moment.js
  
*/

const date = document.querySelector(".date");
const time = document.querySelector(".time");

let monYear = moment().format("LL");
let day = moment().format("ddd");
let hourMin = moment().format("LT");

date.innerText = `${day}, ${monYear}`;
time.innerText = `${hourMin}`;