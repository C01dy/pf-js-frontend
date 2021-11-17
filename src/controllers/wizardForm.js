import { getClass, getClothes, getFaces, getHistory, getRaces, getSkills } from '../services/api/characteristics'
import { renderCheckboxControlls, renderRadioControlls, renderRadioControllsWithImages } from '../views';

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
        this.getEntity(getFaces, renderRadioControllsWithImages)
    }

    getClothes() {
        this.getEntity(getClothes, renderRadioControllsWithImages)
    }

}

export default WizardFormController;