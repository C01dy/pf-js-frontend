export const updateSearchParams = (prop, value) => {
    const url = new URL(window.location.href)
    if (!value) {
        url.searchParams.delete(prop)
    } else {
        url.searchParams.set(prop, value)
    }
    history.pushState("", "", url)
}