let loadInformation =async(isSearch='berlin')=>{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${isSearch}&appid=13e1d3e35d715a066c58da70d0d66290&units=metric`)
    let data = await res.json()
    let results = data.main
    let name = data.name
    console.log(name)
    disPlayShow(results)
}
let disPlayShow = (results)=>{
    console.log(results)
    let temp = document.getElementById('temp')
    let humidity = document.getElementById('humidity')
    let wind = document.getElementById('wind')
    for(let key in results){
        console.log(key, results[key])
        temp.innerText = results.temp
        humidity.innerText = results.humidity
       
    }
}

// access all 

let searchField = document.getElementById('searchField')

// get search value

let searchBtn = ()=>{
    let searchText = searchField.value;
    loadInformation(searchText);
}


loadInformation()