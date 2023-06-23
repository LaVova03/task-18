fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(response => response.json())
    .then(weather => {
        console.log(weather);


        const town = weather.name;
        const temp = weather.main.temp;
        const pressure = weather.main.pressure;
        const description = weather.weather[0].description;
        const humidity = weather.main.humidity;
        const speed = weather.wind.speed;
        const deg = weather.wind.deg;
        const icon = weather.weather[0].icon;

        document.querySelector('#town').append('Місто: ', town);
        document.querySelector('#temp').append('Температура: ', temp);
        document.querySelector('#pressure').append('Тиск: ', pressure);
        document.querySelector('#description').append('Опис: ', description);
        document.querySelector('#humidity').append('Вологість: ', humidity);
        document.querySelector('#speed').append('Швидкість вітру: ', speed);
        document.querySelector('#deg').append('Напрям у градусах: ', deg);
        document.querySelector('#icon').setAttribute('src', `http://openweathermap.org/img/w/${icon}.png`);
    });
