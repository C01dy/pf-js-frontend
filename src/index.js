import WizardFormController from "./controllers/wizardForm";
import { createCharacter, getCharacter, updateCharacter } from "./services/api/character"
import { getAllStats, getClass, getSkills } from "./services/api/characteristics";
import { collectDataFromForm } from "./services/form";
import { readFromLocalStorage, setToLocalStorage } from "./services/localStorage";
import { renderCharacterStats } from "./views";

const nextBtn = document.getElementById('go-next-btn')
const prevBtn = document.getElementById('go-prev-btn')

const nameInput = document.getElementById('name-input')


const wizardFormController = new WizardFormController()
const steps = ['name', 'race', 'class', 'skills', 'history', 'clothes', 'face'];


const handleWizardFormController = (step) => {
    switch(steps[step]) {
        case 'race':
            wizardFormController.getRaces()
            return
        case 'class':
            wizardFormController.getClasses()
            return
        case 'skills':
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

let lastStepG = 0;
const isLastStep = steps.length - 1;

const firstRender = () => {
    const currentCharacter = readFromLocalStorage('currentCharacter')
    if (currentCharacter) {
        getCharacter(currentCharacter.id).then(({ lastStep }) => {
            lastStepG = lastStep
            handleWizardFormController(lastStep + 1)
        })
    }
}

firstRender()

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (readFromLocalStorage('currentCharacter')) {
        updateCharacter(readFromLocalStorage('currentCharacter').id, {
            lastStep: lastStepG + 1,
            [steps[lastStepG + 1]]: collectDataFromForm('character-form')
        }).then(character => {
            lastStepG = character.lastStep
            return character
        }).then(character => {
            if (lastStepG === isLastStep) {
                window.character = character
                getAllStats(character).then(statsArray => {
                    // TODO: render character info
                    console.log(statsArray.map(entry => entry.data))
                })
            } else {
                handleWizardFormController(lastStepG + 1)
            }
        })
    } else {
        createCharacter({
            name: nameInput.value,
            lastStep: 0,
        }).then(({ id, lastStep }) => {
            setToLocalStorage('currentCharacter', { id })
            lastStepG = lastStep
            wizardFormController.getRaces()
        })
    }

})

