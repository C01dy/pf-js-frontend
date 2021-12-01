import { buildUrl, fetchApiRequset } from "."

/**
 * @async
 * @param {object} character - object with character data
 * @returns {Promise<object>} Promise object represents the character with id and lastStep
 */
export const createCharacter = async (character) => {
    const characterUrl = buildUrl('/character').href

    const data = await fetchApiRequset(characterUrl, 'POST', character)

    return data;
}

/**
 * @async
 * @param {string} id 
 * @param {object} characterData - data to add to character
 * @returns {Promise<object>} Promise object represents the character with updated data
 */
export const updateCharacter = async (id, characterData) => {
    const characterUrl = buildUrl('/character', '/', id).href

    const data = await fetchApiRequset(characterUrl, 'PUT', characterData)

    return data;
}

/**
 * @async
 * @param {string} id 
 * @returns {Promise<object>} Promise object represents the character
 */
export const getCharacter = async (id) => {
    const characterUrl = buildUrl('/character', '/', id).href

    const data = await fetchApiRequset(characterUrl, 'GET')

    return data;
}

export const getAllCharactersStats = async () => {
    const characterUrl = buildUrl('/character', '/info', '/many').href

    const data = await fetchApiRequset(characterUrl, 'GET')

    return data;
}