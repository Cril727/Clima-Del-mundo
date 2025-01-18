let BuscarCity = document.getElementById("Consultar");
let temp = document.getElementById("temp");
let temperaturaMax = document.getElementById("tempMax");
let temperaturaMix = document.getElementById("tempMin");
let msgError = document.getElementById("error");
let imgClima = document.getElementById("imgClima");
const APiKEY = "64265d50410e201a7da784318707a550";

BuscarCity.addEventListener("click", (event) => {

    event.preventDefault();

    let city = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APiKEY}`)
        .then((response) => response.json())
        .then((data) => {
        

            // Obtener el icono del clima
            let iconCode = data.weather[0].icon; 
            let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

       
            imgClima.src = iconUrl;

            // Convertir la temperatura de Kelvin a Celsius
            let tempActual = data.main.temp - 273.15;
            let tempMax = data.main.temp_max - 273.15;
            let tempMin = data.main.temp_min - 273.15;


            temp.textContent = `Temperatura actual: ${tempActual.toFixed(1)} °C`;
            temperaturaMax.textContent = `Temperatura Maxima: ${tempMax.toFixed(1)} °C`;
            temperaturaMix.textContent = `Temperatura Minima: ${tempMin.toFixed(1)} °C`;


            msgError.textContent = "";
        })
        .catch((error) => {
            console.log(error);
            temp.textContent = ""
            temperaturaMax.textContent = ""
            temperaturaMix.textContent = ""
            msgError.textContent = "Ciudad no encontrada ❌";
        });
});
