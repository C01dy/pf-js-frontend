import { buildUrl } from "."

const fetchCharacterData = async (url, options = {}) => {
    const href = buildUrl('/character', url).href
    const res = await fetch(href, {
        method: 'GET',
        ...options
    })    

    const data = await res.json()
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
    const skills = await fetchCharacterData('/history')
    return skills
}

export const getFaces = async () => {
    const faceImgUrls = await fetchCharacterData('/face')
    return faceImgUrls
}

export const getClothes = async () => {
    const clothesImgUrls = await fetchCharacterData('/clothes')
    return clothesImgUrls
}