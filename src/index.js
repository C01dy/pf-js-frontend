import WizardFormController from "./controllers/wizardForm";
import { createCharacter, getCharacter, updateCharacter } from "./services/api/character"
import { getAllStats } from "./services/api/characteristics";
import { collectDataFromForm } from "./services/form";
import { readFromLocalStorage, setToLocalStorage } from "./services/localStorage";
import { renderCharacterStats } from "./views";

const nextBtn = document.getElementById('go-next-btn')
const prevBtn = document.getElementById('go-prev-btn')

const nameInput = document.getElementById('name-input')


const wizardFormController = new WizardFormController()
const steps = ['race', 'class', 'skills', 'history', 'clothes', 'face'];


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

let lastStepFromServer = 0;
const finalStep = steps.length - 1;

const firstRender = () => {
    const currentCharacter = readFromLocalStorage('currentCharacter')
    if (currentCharacter) {
        getCharacter(currentCharacter._id).then(character => {
            lastStepFromServer = character.lastStep
            if (lastStepFromServer === finalStep) {
                getAllStats(character).then(data => {
                    console.timeEnd("getAllStats ---")
                    renderCharacterStats(data)
                })
            } else {
                handleWizardFormController(character.lastStep + 1)
            }
        })
    }
}

firstRender()

prevBtn.addEventListener('click', (e) => {
    e.preventDefault()

    updateCharacter(readFromLocalStorage('currentCharacter')._id, {
        lastStep: lastStepFromServer - 1,        
    }).then(character => {
        lastStepFromServer = character.lastStep
    }).then(() => {
        handleWizardFormController(lastStepFromServer + 1)
    })
})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (readFromLocalStorage('currentCharacter')) {
        updateCharacter(readFromLocalStorage('currentCharacter')._id, {
            lastStep: lastStepFromServer === finalStep ? lastStepFromServer : lastStepFromServer + 1,
            [steps[lastStepFromServer + 1]]: collectDataFromForm('character-form')
        }).then(character => {
            lastStepFromServer = character.lastStep
            return character
        }).then(() => {
            if (lastStepFromServer === finalStep) {
                getAllStats(readFromLocalStorage('currentCharacter')._id).then(data => {
                    renderCharacterStats(data)
                })
            } else {
                handleWizardFormController(lastStepFromServer + 1)
            }
        })
    } else {
        createCharacter({
            name: nameInput.value,
            lastStep: 0,
        }).then(({ _id, lastStep }) => {
            setToLocalStorage('currentCharacter', { _id })
            lastStepFromServer = lastStep
            wizardFormController.getRaces()
        })
    }

})




