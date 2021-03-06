const API_KEY = "d1fe3418dfc59eb30f55c27f2a885061";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json()) //promise는 당장 일어나지 않고 시간이 걸린다. ==> 해결 then 
        .then((data) => {
            const weather = document.querySelector(".weather span:last-child")
            const city = document.querySelector(".weather span:first-child")
            city.innerText = data.name
            weather.innerText = ` ${data.main.temp} ℃`
            // ${data.weather[0].main} /
        })
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// getCurrentPosition(성공, 에러)
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)