export const collectDataFromForm = (formId) => {
    const $controllsCollection = document.getElementById(formId).querySelectorAll('input');

    return [...$controllsCollection].map(controll => {
        if ((controll.type === 'radio' || controll.type === 'checkbox')) {
            return controll.checked && (controll.parentNode.querySelector('label').innerText ||
                controll.parentNode.querySelector('img').src)
        }

    }).filter(el => el)
}

