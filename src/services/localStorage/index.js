export const setToLS = (obj, key) => {
    const serializedObj = JSON.stringify(obj)
    const localStorageData = localStorage.getItem(key)

    if (localStorageData) {
        localStorage.setItem(key, JSON.stringify({...JSON.parse(localStorageData), ...obj}))
        return
    }
    
    localStorage.setItem(key, serializedObj)
}

export const readFromLS = (key) => {
    return JSON.parse(localStorage.getItem(key)) || {}
}

