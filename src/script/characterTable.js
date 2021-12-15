import { getAllCharactersStats } from '../services/api/character'
import { getRaces } from '../services/api/characteristics'
import { renderCharactersTable, renderRacesOptions } from '../views'
import { updateSearchParams } from '../services/url'
import debounce from 'lodash.debounce';

const $sortSelect = document.getElementById('sort-select')
const $filterNameInput = document.getElementById('search-name-input')
const $raceFilterSelect = document.getElementById('race-filter')
const pageNav = document.getElementById("page-nav")
const url = new URL(window.location.href)


const updateCharactersTableDOM = async (queryParamsPropKey, queryParamsPropValue) => {
    updateSearchParams(queryParamsPropKey, queryParamsPropValue)
    const characters = await getAllCharactersStats(window.location.search)
    renderCharactersTable(characters.data)
}

const renderPaginationBtnGroup = (count) => {
    const $btnGroup = document.createElement("ul")
    $btnGroup.classList.add("pagination", "pagination-sm")

    for (let i = 0; i < count; i++) {
        const $outherPageBtn = document.createElement('li')
        $outherPageBtn.classList.add("page-item")
        $outherPageBtn.style.cursor = "pointer"
    
        const $innerPageBtn = document.createElement('a')
        $innerPageBtn.classList.add("page-link")
        $innerPageBtn.innerText = i + 1
        $outherPageBtn.append($innerPageBtn)

        if (i + 1 === +url.searchParams.get('page')) {
            $outherPageBtn.classList.add('active')
        }

        $btnGroup.append($outherPageBtn)
    }

    $btnGroup.childNodes.forEach(btn => {
        btn.addEventListener('click', (e) => {
            $btnGroup.childNodes.forEach(el => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            })
            updateCharactersTableDOM('page', btn.innerText).then(() => {
                e.target.parentNode.classList.add('active')
            })
        })
    })

    pageNav.innerHTML = ''
    pageNav.appendChild($btnGroup)

}

document.addEventListener('DOMContentLoaded', () => {
    const name = url.searchParams.get('name')
    $filterNameInput.value = name

    const currentOptionIdx = [...$sortSelect.querySelectorAll('option')].findIndex(option => {
        const sortBy = url.searchParams.get('sortBy')
        return option.value === sortBy
    })

    $sortSelect.options[currentOptionIdx].selected = true
})

$filterNameInput.addEventListener('input', debounce((e) => {
    updateCharactersTableDOM('name', e.target.value)
}, 300))

$sortSelect.addEventListener('change', async (e) => {
    updateCharactersTableDOM('sortBy', e.target.value)
})

$raceFilterSelect.addEventListener('change', async (e) => {
    updateCharactersTableDOM('race', e.target.value)
})

getRaces().then(({ data }) => {
    renderRacesOptions(data)
})

getAllCharactersStats(window.location.search).then(({ data, metadata }) => {
    const pagesCount = Math.ceil(metadata[0].total / metadata[0].limit)
    renderPaginationBtnGroup(pagesCount)
    renderCharactersTable(data)

    const currentOptionIdx = [...$raceFilterSelect.querySelectorAll('option')].findIndex(option => {
        const race = url.searchParams.get('race')
        return option.value === race
    })

    $raceFilterSelect.options[currentOptionIdx].selected = true
})
