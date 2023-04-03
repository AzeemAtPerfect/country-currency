// QUERY SELECTORS ------------------------------

const searchInput = document.getElementById("search-input")
const tableDate = document.querySelector(".table-data")
const searhOutput = document.querySelector(".search-output")

// VARIABLES DECLARATION -----------------------

const url = "https://laravel-world.com/api/countries?"
const url1 = "https://laravel-world.com/api/currencies?"

// EVENT LISTNERS -----------------------------

searchInput.addEventListener("input",searchCurrency)


// PROCEDURES ---------------------------------

async function getCountryCurrency() {
    const resCountry = await fetch(url)
    const dataCountry = await resCountry.json()
    const resCurrency = await fetch(url1)
    const dataCurrency = await resCurrency.json()
    
    tableDate.innerHTML = `
    <tr>
        <th>Country</th>
        <th>Currency</th>
    </tr>
    `

    for (i = 0; i < dataCountry.data.length; i++) {
        tableDate.innerHTML += `
        <tr>
            <td>${dataCountry.data[i].name}</td>
            <td>${dataCurrency.data[i].name}</td>
        </tr>
        `
    }
}

function searchCurrency() {
    const searchCountry = searchInput.value
    const tableCol = document.querySelectorAll("td")
    for (i = 0; i < tableCol.length; i++) {
        if (tableCol[i].innerText.toLocaleLowerCase() === searchCountry.toLocaleLowerCase()) {
            searhOutput.innerText = `
                Country Name : ${tableCol[i].innerText}
                Country Currency : ${tableCol[i+1].innerText}
                `
            return


        } else {
            searhOutput.innerText = `
            ${searchCountry} not found
            `
        }
    }
    console.log(searchInput.value)
}

// CALL FUNCTIONS------------------------------
getCountryCurrency()