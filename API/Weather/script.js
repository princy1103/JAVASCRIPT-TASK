//https://api.openweathermap.org/data/2.5/weather?q=surat&appid=8d9f7c9674d1ea67b496323e419a1fd3&units=metric
const uimaker = (data) => {
    let temp = `
        <p class="location"><i class="fa-solid fa-location-crosshairs"></i> ${data.name}</p>
        <p class="temperature"><i class="fa-solid fa-cloud-sun-rain"></i> ${data.main.temp}°C</p>
        <div class="info">
            <div>
                <h3><i class="fa-solid fa-wind"></i> Wind</h3>
                <p>${data.wind.speed}</p>
            </div>
            <div>
                <h3><i class="fa-solid fa-water"></i> Humidity</h3>
                <p>${data.main.humidity}%</p>
            </div>
        </div>
        <div class="info">
            <div>
                <h3><i class="fa-solid fa-cloud-meatball"></i> Clouds</h3>
                <p>${data.clouds.all}</p>
            </div>
            <div>
                <h3><i class="fa-solid fa-snowflake"></i> Weather</h3>
                <p>${data.weather[0].description}</p>
            </div>
        </div>
        <div class="description">
            This scene captures the calm serenity of a cool, overcast day with a gentle breeze, perfect for a peaceful outdoor escape.
        </div>
        `
    document.getElementById("output").innerHTML = temp;
};
const getWeather = async (location) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8d9f7c9674d1ea67b496323e419a1fd3&units=metric`);
    let res = await req.json();
    console.log(res);
    uimaker(res);
};
document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let location = e.target.value;
        console.log(location);
        getWeather(location);
    }
});