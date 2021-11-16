import { getClass, getClothes, getFaces, getHistory, getRaces, getSkills } from '../services/api/characteristics'
import { renderCheckboxControlls, renderRadioControlls } from '../views';

class WizardFormController {
    async getEntity(method, renderCb) {
        const entities = await method()
        const entityNames = entities.data.map(data => data?.name || data?.text || data?.url || data?.about)
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
        // this.getEntity(getFaces, renderRadioControlls)
    }

    getClothes() {
        // this.getEntity(getClothes, renderRadioControlls)
    }

}

export default WizardFormController;