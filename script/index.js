let loadInformation =async()=>{
    let res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=germany&appid=13e1d3e35d715a066c58da70d0d66290&units=metric')
    let data = await res.json()
    console.log(data);
}

// access all 

let searchField = document.getElementById('searchField')

// get search value

let searchBtn = ()=>{
    let searchText = searchField.value;
    console.log(searchText)
}



loadInformation();