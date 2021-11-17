import WizardFormController from "./controllers/wizardForm";
import { createCharacter, getCharacter, updateCharacter } from "./services/api/character"
import { collectDataFromForm } from "./services/form";
import { readFromLocalStorage, setToLocalStorage } from "./services/localStorage";

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
            // TODO: collect form data and pass here
        }).then(({ lastStep }) => {
            lastStepG = lastStep
        }).finally(() => handleWizardFormController(lastStepG + 1))
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

window.collectDataFromForm = collectDataFromForm
