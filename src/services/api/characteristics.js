import { buildUrl, fetchApiRequset } from "."


const fetchCharacterData = async (url, id = '') => {
    const characterUrl = buildUrl('/character', url, id).href
    const data = await fetchApiRequset(characterUrl)

    return data
}

export const getRaces = async (id = '') => {
    const races = await fetchCharacterData('/race/' + id)
    return races
}

export const getClass = async (id = '') => {
    const personClass = await fetchCharacterData('/class/' + id)
    return personClass
}

export const getSkills = async (id = '') => {
    const skills = await fetchCharacterData('/skills/' + id)
    return skills
}

export const getHistory = async (id = '') => {
    const history = await fetchCharacterData('/history/' + id)
    return history
}

export const getFaces = async (id = '') => {
    const faceImgUrls = await fetchCharacterData('/face/' + id)
    return faceImgUrls
}

export const getClothes = async (id = '') => {
    const clothesImgUrls = await fetchCharacterData('/clothes/' + id)
    return clothesImgUrls
}

const methods = {
    'race': getRaces,
    'class': getClass,
    'skills': getSkills,
    'history': getHistory,
    'face': getFaces,
    'clothes': getClothes
}

const steps = ['race', 'class', 'skills', 'history', 'clothes', 'face']

export const getAllStats = (character) => {
    const characterEntries = Object.entries(character).filter(el => {
        return steps.includes(el[0])
    })

   const statsPromises = characterEntries.map(([entryName, id]) => {
        return (methods[entryName])(id)
    })

    return Promise.all(statsPromises)

}


export const getAllStats1 = async (id) => {
    console.time("getAllStats aggregation")
    const characterInfo = await fetchCharacterData('/info/' + id);
    console.timeEnd("getAllStats aggregation")
    return characterInfo
}