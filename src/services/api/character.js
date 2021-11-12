import { buildUrl, fetchApiRequset } from "."

export const createCharacter = async (character) => {
    const characterUrl = buildUrl('/character').href

    const res = await fetchApiRequset(characterUrl, 'POST', character)

    const data = await res.json()
    return data;
}

export const updateCharacter = async (id, characterData) => {
    const characterUrl = buildUrl('/character', '/', id).href

    const res = await fetchApiRequset(characterUrl, 'PUT', characterData)

    const data = await res.json()
    return data;
}