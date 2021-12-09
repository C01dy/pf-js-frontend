import { getAllCharactersStats } from '../services/api/character'
import { getRaces } from '../services/api/characteristics'
import { renderCharactersTable, renderRacesOptions } from '../views'
import { updateSearchParams } from '../services/url'
import debounce from 'lodash.debounce';

const $sortSelect = document.getElementById('sort-select')
const $filterNameInput = document.getElementById('search-name-input')
const $raceFilterSelect = document.getElementById('race-filter')
const url = new URL(window.location.href)

document.addEventListener('DOMContentLoaded', () => {
    const name = url.searchParams.get('name')
    $filterNameInput.value = name

    const currentOptionIdx = [...$sortSelect.querySelectorAll('option')].findIndex(option => {
        const sortBy = url.searchParams.get('sortBy')
        return option.value === sortBy
    })

    $sortSelect.options[currentOptionIdx].selected = true
})

$filterNameInput.addEventListener('input', debounce(async (e) => {
    updateSearchParams('name', e.target.value)
    const characters = await getAllCharactersStats(window.location.search)
    renderCharactersTable(characters)
}, 300))

$sortSelect.addEventListener('change', async (e) => {
    updateSearchParams('sortBy', e.target.value)
    const characters = await getAllCharactersStats(window.location.search)
    renderCharactersTable(characters)
})

$raceFilterSelect.addEventListener('change', async (e) => {
    updateSearchParams('race', e.target.value)
    const characters = await getAllCharactersStats(window.location.search)
    renderCharactersTable(characters)
})

getRaces().then(({ data }) => {
    renderRacesOptions(data)
})

getAllCharactersStats(window.location.search).then(data => {
    renderCharactersTable(data)
    const currentOptionIdx = [...$raceFilterSelect.querySelectorAll('option')].findIndex(option => {
        const race = url.searchParams.get('race')
        return option.value === race
    })

    $raceFilterSelect.options[currentOptionIdx].selected = true
})