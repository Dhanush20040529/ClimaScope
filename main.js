document.addEventListener("readystatechange",()=>{
    if(event.target.readyState == "complete"){
        console.log("complete");
        initApp()
    }else {
        console.log("not complete")
    }
});

const initApp =  async ()=>{

    const searchBar = document.querySelector(".search-input");
    const searchBtn = document .querySelector(".search-btn");
    const temperature = document.querySelector(".temp-value");
    const city = document.querySelector(".city-name");
    const humidity = document.querySelector(".humidity-value");
    const windSpeed = document.querySelector(".wind-value");
    const weatherImg = document.querySelector(".image");
    

    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=theni&appid=d36b1e1e968b48008c7f3d69edfb0190&units=metric`);
        const info = await apiData.json();

        // Change temperatuer value 

        temperature.textContent= info.main.temp + "°c";

        // Change city name

        city.textContent = info.name;

        // Change humidity value 

        humidity.textContent = info.main.humidity + "%";

        // Change wind speed 

        windSpeed.textContent = info.wind.speed + "km/h";

        // change weather image 
        console.log(info.weather[0].main)

        if(info.weather[0].main == "Clear"){
            weatherImg.src = "image/sun.png"
        }
        else if (info.weather[0].main == "Clouds") {
            weatherImg.src = "image/cloud.png"
        } 
        else if (info.weather[0].main == "Rain") {
            weatherImg.src = "image/rain.png"
        } 
        else if (info.weather[0].main == "Drizzle") {
            weatherImg.src = "image/drizzle.png"
        } 
        else if (info.weather[0].main == "Mist") {
            weatherImg.src = "image/mist.png"
        }  
    

  
    console.log(weatherImg)
    searchBtn.addEventListener("click", async ()=>{

        // Get weather detail
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=d36b1e1e968b48008c7f3d69edfb0190&units=metric`);
        if(response.status == 404){
            alert("Invalid city name ");
            
        }
        else{

            const data = await response.json();

            // Change temperatuer value 
    
            temperature.textContent= data.main.temp + "°c";
    
            // Change city name
    
            city.textContent = data.name;
    
            // Change humidity value 
    
            humidity.textContent = data.main.humidity + "%";
    
            // Change wind speed 
    
            windSpeed.textContent = data.wind.speed + "km/h";
    
            // change weather image 
            console.log(data.weather[0].main)
    
            if(data.weather[0].main == "Clear"){
                weatherImg.src = "image/sun.png"
            }
            else if (data.weather[0].main == "Clouds") {
                weatherImg.src = "image/cloud.png"
            } 
            else if (data.weather[0].main == "Rain") {
                weatherImg.src = "image/rain.png"
            } 
            else if (data.weather[0].main == "Drizzle") {
                weatherImg.src = "image/drizzle.png"
            } 
            else if (data.weather[0].main == "Mist") {
                weatherImg.src = "image/mist.png"
            } 
    
            console.log(data);
            console.log(data.main.temp)
            console.log(data.name)
            console.log(data.main.humidity)
            console.log(data.wind.speed)
        }
    
           
        })
    
        
        
    
        console.log(humidity);
        console.log(windSpeed);
}

       

