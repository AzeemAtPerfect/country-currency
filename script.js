// QUERY SELECTORS ------------------------------
const searchInput = document.getElementById("search-input")
const searchBtn = document.querySelector(".search-btn")
const tableDate = document.querySelector(".table-data")

// VARIABLES DECLARATION -----------------------
const url = "https://laravel-world.com/api/countries?"
// EVENT LISTNERS -----------------------------

// PROCEDURES ---------------------------------

async function getCountryCurrency(){
    const response = await fetch(url)
    const data = await response.json()
    console
}