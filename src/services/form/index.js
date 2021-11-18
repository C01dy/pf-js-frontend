export const collectDataFromForm = (formId) => {
    const $controllsCollection = document.getElementById(formId).querySelectorAll('input');

    const result = [...$controllsCollection].map(controll => {
        if ((controll.type === 'radio' || controll.type === 'checkbox')) {
            return controll.checked && controll.getAttribute('data-id')
        }

    }).filter(el => el)

    return result.length === 1 ? result[0] : result
}

