
/**
 * @description sets data to localStorage with specific key 
 * @param {object} obj - object to set to localStorage
 * @param {string} key - key of object
 */
export const setToLocalStorage = (key, obj) => {
    const serializedObj = JSON.stringify(obj)
    const localStorageData = localStorage.getItem(key)

    if (localStorageData) {
        localStorage.setItem(key, JSON.stringify({...JSON.parse(localStorageData), ...obj}))
        return
    }
    
    localStorage.setItem(key, serializedObj)
}

/**
 * @description reads data from localStorage for a specific key
 * @param {string} key 
 * @returns {any}
 */
export const readFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

