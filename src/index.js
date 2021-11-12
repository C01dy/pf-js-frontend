import { createCharacter, updateCharacter } from "./services/api/character"
import { getRaces, getClass, getClothes, getFaces, getHistory, getSkills } from "./services/api/characteristics"
import { readFromLS, setToLS } from "./services/localStorage";

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

        // createCharacter({
        //     name: nameInput.value
        // }).then(({ id }) => {
        //     setToLS({ id }, 'currentCharacter')
        // })

        updateCharacter(readFromLS('currentCharacter').id ,{ skills: ['618bb4fee6a3e4570b365ae9'] })
        
})

