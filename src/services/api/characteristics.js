import { buildUrl, fetchApiRequset } from "."


const fetchCharacterData = async (url) => {
    const characterUrl = buildUrl('/character', url).href
    const data = await fetchApiRequset(characterUrl)

    return data
}

export const getRaces = async () => {
    const races = await fetchCharacterData('/race')
    return races
}

export const getClass = async () => {
    const personClass = await fetchCharacterData('/class')
    return personClass
}

export const getSkills = async () => {
    const skills = await fetchCharacterData('/skills')
    return skills
}

export const getHistory = async () => {
    const history = await fetchCharacterData('/history')
    return history
}

export const getFaces = async () => {
    const faceImgUrls = await fetchCharacterData('/face')
    return faceImgUrls
}

export const getClothes = async () => {
    const clothesImgUrls = await fetchCharacterData('/clothes')
    return clothesImgUrls
}