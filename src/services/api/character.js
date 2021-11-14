import { buildUrl, fetchApiRequset } from "."

export const createCharacter = async (character) => {
    const characterUrl = buildUrl('/character').href

    const data = await fetchApiRequset(characterUrl, 'POST', character)

    return data;
}

export const updateCharacter = async (id, characterData) => {
    const characterUrl = buildUrl('/character', '/', id).href

    const data = await fetchApiRequset(characterUrl, 'PUT', characterData)

    return data;
}

export const getCharacter = async (id) => {
    const characterUrl = buildUrl('/character', '/', id).href

    const data = await fetchApiRequset(characterUrl, 'GET')

    return data;
}