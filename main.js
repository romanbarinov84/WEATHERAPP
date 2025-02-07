import { createMain } from "./createElementMain.js";



// Create Header //
const $headerHead = document.createElement("div");
$headerHead.classList.add("header-head");

const $headerLeft = document.createElement("div");
$headerLeft.classList.add("header-left");
const $searchInput = document.createElement("input");
$searchInput.classList.add("search-input");
$searchInput.type = "text";
$searchInput.placeholder = "Add city name";
$searchInput.setAttribute("required", "true");
const $searchBtn = document.createElement("button");
$searchBtn.classList.add("search-btn");
$searchBtn.textContent = "search";

const $headerCenter = document.createElement("div");
$headerCenter.classList.add("header-center");
const $title = document.createElement("h1");
$title.classList.add("title-text-header");
$title.textContent = "Weather-APP";

const $headerRight = document.createElement("div");
$headerRight.classList.add("header-right");
const $getTime = document.createElement("div");
$getTime.classList.add("header-time");

const $getDay = document.createElement("div");
$getDay.classList.add("header-day");

const $getData = document.createElement("div");
$getData.classList.add("header-data");
$getData.textContent = "00.00.00";

// Structuring the elements
$headerLeft.append($searchInput, $searchBtn);
$headerCenter.append($title);
$headerRight.append($getTime, $getDay, $getData);

$headerHead.append($headerLeft, $headerCenter, $headerRight);

// Adding everything to the header
document.body.append($headerHead);

function getTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const searchTime = `${hours} : ${minutes}`;
  $getTime.textContent = searchTime;
}
setInterval(getTime, 30000);
getTime();

function getDay() {
  const now = new Date();
  const weekDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const weekDay = weekDays[now.getDay()];
  $getDay.textContent = `${weekDay}`;
}
getDay();

function getFullDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const mounth = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear().toString();
  const fullDate = `${day}:${mounth}:${year}`;
  $getData.textContent = fullDate;
}
getFullDate();

// create main elements//

createMain();

// create weather on today //
$searchBtn.addEventListener("click", async function getWeather(event) {
  event.preventDefault();
  const apiKey = "629d573a3cff943e93ae8d0b58e35b72";
  const cityName = $searchInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
    
      let $mainTitle = document.querySelector(".main-title");
      let $mainTemp = document.querySelector(".main-temp");
      let $mainWindy = document.querySelector(".main-windy");
      let $humidity = document.querySelector(".humidity");
      let $weatherIcon = document.querySelector(".weather-icon");

      $mainTitle.innerHTML = `${data.name}<sup>${data.sys.country}</sup>`;
      $mainTemp.innerHTML = `Temp:${data.main.temp}<span><sup>o</sup>C</span> 🌡`;
      $mainWindy.innerHTML = `💨 Ветер: ${data.wind.speed} м/с`;
      $humidity.innerHTML = `💧 Влажность: ${data.main.humidity} <sup>% </sup>`;

      let iconCode = data.weather[0].icon;
      let iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      $weatherIcon.src = iconUrl;
      $weatherIcon.alt = data.weather[0].description;
      console.log(data.weather[0].icon);
    } else {
    }
  } catch (error) {}

  // create weather on five days//
  const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&appid=${apiKey}&units=metric`;
   
  const response2 = await fetch(url2)
  const data2  = await response2.json()
  console.log(data2);

  


});
