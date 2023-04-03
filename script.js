// QUERY SELECTORS ------------------------------
const searchInput = document.getElementById("search-input")
const searchBtn = document.querySelector(".search-btn")
const tableDate = document.querySelector(".table-data")

// VARIABLES DECLARATION -----------------------
const url = "https://laravel-world.com/api/countries?"
const url1 = "https://laravel-world.com/api/currencies?"
// EVENT LISTNERS -----------------------------

// PROCEDURES ---------------------------------

async function getCountryCurrency(){
    const resCountry = await fetch(url)
    const dataCountry = await resCountry.json()
    const resCurrency = await fetch(url1)
    const dataCurrency = await resCurrency.json()
    console.log(dataCountry.data.length)
    tableDate.innerHTML = `
    <tr>
        <th>Country</th>
        <th>Currency</th>
    </tr>
    `
    
    for(i=0; i<dataCountry.data.length; i++){
        tableDate.innerHTML += `
        <tr>
            <td>${dataCountry.data[i].name}</td>
            <td>${dataCurrency.data[i].name}</td>
        </tr>
        `
    }
}
getCountryCurrency()