let loadInformation =async(isSearch)=>{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${isSearch}&appid=13e1d3e35d715a066c58da70d0d66290&units=metric`)
    let data = await res.json()
    let results = data.main
    let name = data.name;
    let wind = data.wind.speed
    let weather = data.weather[0].main
    // console.log(weather)
    // console.log(wind)
    // console.log(name)
    // console.log(data)
    disPlayShow(results,name,wind,weather)
}
let disPlayShow = (results,name,wind,weather)=>{
    // console.log(results)
    // console.log(wind)
    // console.log(name)
    let weatherContainer = document.getElementById('weatherContainer')
    weatherContainer.textContent = '';
    let weatherDetails = document.createElement('div')
    weatherDetails.innerHTML = `
        <p>${weather}</p>
    `
    weatherContainer.appendChild(weatherDetails)


    let cityName = document.getElementById('cityName')
    let temp = document.getElementById('temp')
    let humidity = document.getElementById('humidity')
    let winds = document.getElementById('wind')
    for(let key in results){
        console.log(key, results[key])
        temp.innerText = results.temp + "°C"
        humidity.innerText = results.humidity + "%"
       cityName.innerText = name;
       winds.innerText = wind;
    }
}

// access all 

let searchField = document.getElementById('searchField')

// get search value

let searchBtn = ()=>{
    let searchText = searchField.value;
    loadInformation(searchText);
}


// loadInformation()