import WizardFormController from "./controllers/wizardForm";
import { createCharacter, getCharacter, updateCharacter } from "./services/api/character"
import { readFromLocalStorage, setToLocalStorage } from "./services/localStorage";

const nextBtn = document.getElementById('go-next-btn')
const prevBtn = document.getElementById('go-prev-btn')

const nameInput = document.getElementById('name-input')


const wizardFormController = new WizardFormController()
const steps = ['name', 'race', 'class', 'skills', 'history'];

let currentStep = 0;

const currentCharacter = readFromLocalStorage('currentCharacter')

const handleWizardFormController = (step) => {
    switch(steps[step]) {
        case 'race':
            wizardFormController.getRaces()
            return
        case 'class':
            wizardFormController.getClasses()
            return
        case 'skill':
            wizardFormController.getSkills()
            return
        case 'history':
            wizardFormController.getHistory()
            return
        case 'face':
            wizardFormController.getFaces()
            return
        case 'clothes':
            wizardFormController.getClothes()
            return
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (currentCharacter) {
        getCharacter(currentCharacter.id).then(({ lastStep }) => {
            currentStep = lastStep + 1
            handleWizardFormController(currentStep)
        })
    } 
})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // if (readFromLocalStorage('currentCharacter')) {
    //     updateCharacter(readFromLocalStorage('currentCharacter').id, {
    //         lastStep: currentStep + 1,
    //         ...data
    //     }).then(({ lastStep }) => {
    //         currentStep = lastStep + 1
    //     }).finally(() => handleWizardFormController(currentStep))
    // } else {
    //     createCharacter({
    //         name: nameInput.value,
    //         lastStep: 0,
    //     }).then(({ id }) => {
    //         setToLocalStorage('currentCharacter', { id })
    //         wizardFormController.getRaces()
    //     })
    // }

    // const $characterForm = document.getElementById('character-form')
    const characterFormData = new FormData(document.getElementById("character-form"))

    console.log('___ ', characterFormData)
})
