const ROOT_URL = 'http://localhost:3000'


/**
 * 
 * @param  {...string} urls
 * @returns {string}
 */
export const buildUrl = (...urls) => {
    return new URL(urls.join(''), ROOT_URL)
}


/**
 * @async
 * @param {string} url 
 * @param {string} method 
 * @param {object} body 
 * @param {object} headers 
 * @returns {Promise}
 */
export const fetchApiRequset = async (url, method = 'GET', body, headers = {}) => {
    const res = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(body),
    })  

    const data = await res.json()
    return data
}


