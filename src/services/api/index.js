const ROOT_URL = 'http://localhost:3000'

export const buildUrl = (...urls) => {
    return new URL(urls.join(''), ROOT_URL)
}

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


