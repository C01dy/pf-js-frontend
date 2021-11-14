import WizardFormController from "./controllers/wizardForm";
import { createCharacter, getCharacter, updateCharacter } from "./services/api/character"
import { getRaces, getClass, getClothes, getFaces, getHistory, getSkills } from "./services/api/characteristics"
import { readFromLS, setToLS } from "./services/localStorage";
import { renderNameControll, renderRadioControlls } from "./services/render";

const nextBtn = document.getElementById('go-next-btn')
const prevBtn = document.getElementById('go-prev-btn')




const wizardFormController = new WizardFormController()

// getCharacter(readFromLS('currentCharacter').id).then(d => console.log(d))
console.log(wizardFormController.getSkills())













































// const stepsHandler = {
//     race: () => {
//         getRaces().then(races => {
//             const raceNames = races.data.map(({ name }) => name)
//             renderRadioControlls(raceNames)
//         })
//     },
//     class: () => {
//         getClass().then(characterClass => {
//             const characterClassNames = characterClass.data.map(({ name }) => name)
//             renderRadioControlls(characterClassNames)
//         })
//     },
//     clothes: getClothes,
//     face: getFaces,
//     history: getHistory,
//     skills: getSkills
// }

// const state = new Proxy({
//     currentStep: 0,
//     steps: ['name', 'race', 'class']
// }, {
//     set: function(obj, prop, value) {
//         if (prop === 'currentStep') {
//             // console.log(stepsHandler[obj.steps[value]])
//            stepsHandler[obj.steps[value + 1]]()
//             // stepsHandler[obj.steps[value]]() 
//         }
//     }
// })

// window.state = state

// document.addEventListener('DOMContentLoaded', () => {
//     const character = readFromLS('currentCharacter');
//     if (character) {
//         getCharacter(character.id).then(({ lastStep }) => {
//             const currentStepIdx = state.steps.findIndex(value => value === lastStep) + 1;
//             stepsHandler[state.steps[currentStepIdx]]()
//         })
//     } else {
//         renderNameControll()
//     }
// })

// nextBtn.addEventListener('click', (e) => {
//     e.preventDefault()

//         // createCharacter({
//         //     name: nameInput.value
//         // }).then(({ id }) => {
//         //     setToLS({ id }, 'currentCharacter')
//         // })


//         switch (state.steps[currentStep]) {
//             case 'race':
//                 updateCharacter(readFromLS('currentCharacter').id, {
                    
//                 })
//         }

//         state.currentStep += 1
        
// })

// prevBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     state.currentStep -= 1
// })