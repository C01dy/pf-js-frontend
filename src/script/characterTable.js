import { getAllCharactersStats } from '../services/api/character'
import { renderCharactersTable } from '../views'

getAllCharactersStats().then(d => {
    renderCharactersTable(d)
})