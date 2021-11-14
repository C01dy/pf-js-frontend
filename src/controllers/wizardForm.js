let currentStep = 0;
import { getClass, getFaces, getHistory, getRaces, getSkills } from '../services/api/characteristics'
import { renderCheckboxControlls, renderRadioControlls } from '../views';

class WizardFormController {
    constructor(currentStep) {
        this.currentStep = currentStep
    }

    async getEntity(method, renderCb) {
        const entities = await method()
        const entityNames = entities.data.map(({ name }) => name)
        renderCb(entityNames)
    }

    getRaces() {
        this.getEntity(getRaces, renderRadioControlls)
    }

    getClasses() {
        this.getEntity(getClass, renderRadioControlls)
    }

    getSkills() {
        this.getEntity(getSkills, renderCheckboxControlls)
    }

    getHistory() {
        this.getEntity(getHistory, renderRadioControlls)
    }

    getFaces() {
        this.getEntity(getFaces, renderRadioControlls)
    }

}

export default WizardFormController;