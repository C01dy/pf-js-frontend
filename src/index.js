import { createCharacter } from "./services/api"
import { getRaces, getClass, getClothes, getFaces, getHistory, getSkills } from "./services/api/characteristics"

const nextBtn = document.getElementById('go-next-btn')
const nameInput = document.getElementById('name')

let currentCharacterId = null;

const stepsState = new Map()

stepsState.set('race', getRaces)
stepsState.set('class', getClass)
stepsState.set('clothes', getClothes)
stepsState.set('face', getFaces)
stepsState.set('history', getHistory)
stepsState.set('skills', getSkills)

nextBtn.addEventListener('click', (e) => {
    e.preventDefault()

        createCharacter({
            name: nameInput.value
        }).then(({ id }) => currentCharacterId = id)
        
})

