const ROOT_URL = 'http://localhost:3000'

export const buildUrl = (...urls) => {
    return new URL(urls.join(''), ROOT_URL)
}

export const createCharacter = async (character) => {
    const href = buildUrl('/character').href
    const res = await fetch(href, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character),
        
    })

    const data = await res.json()
    return data;
}

