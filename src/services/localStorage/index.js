// const 

// export const localStorageService = (obj) => {

// }

const setToLS = (obj, key) => {
    const serializedObj = JSON.stringify(obj)
    localStorage.setItem(key, serializedObj)
}

const readFromLS = (key) => {
    return JSON.parse(localStorage.getItem(key)) || {}
}