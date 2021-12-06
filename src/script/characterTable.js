import { getAllCharactersStats } from '../services/api/character'
import { getRaces } from '../services/api/characteristics'
import { renderCharactersTable } from '../views'

const $raceFilterSelect = document.getElementById('race-filter')
const $sortSelect = document.getElementById('sort-select')

let observer = new MutationObserver((mutationRecord) => console.log(123))
observer.observe($sortSelect, {
    attributeFilter: ['selectedIndex']
})

getRaces().then(({ data }) => {
    data.forEach(({ name }) => {
        const $selectOption = document.createElement('option')
        $selectOption.innerText = name
        $selectOption.value = name
        $raceFilterSelect.appendChild($selectOption)
    });
})

getAllCharactersStats().then(d => {
    renderCharactersTable(d)
})