const $insertFormRoot = document.getElementById('insert-root') 

/**
 * 
 * @param {string} type - type of dom element
 * @param {Array<string>} items - Array includes item name for controlls
 */
const renderMultiplyControlls = (type, items, hasImage = false) => {
    let $dom = document.createElement('div')

    items.forEach(([name, id]) => {
        let $pickerItem = document.createElement('div');
        let $inputControll = document.createElement('input')
        $inputControll.setAttribute('type', type)
        $inputControll.setAttribute('data-id', id)
        if (type === 'radio') $inputControll.setAttribute('name', 'radiobutton')
        let $label = document.createElement('label')

        if (hasImage) {
            const $img = document.createElement('img')
            $img.style.maxWidth = '150px'
            $img.style.maxHeight = '150px'
            $img.setAttribute('src', 'http://localhost:3000/' + name)
            $label.append($img)
        } else {
            $label.innerText = name
        }

        $pickerItem.append($inputControll)
        $pickerItem.append($label)

        $dom.append($pickerItem)
    })

    $insertFormRoot.innerHTML = ''
    $insertFormRoot.append($dom)
}

export const renderRadioControlls = (items) => {
    renderMultiplyControlls('radio', items)
}

export const renderRadioControllsWithImages = (items) => {
    renderMultiplyControlls('radio', items, true)
}

export const renderCheckboxControlls = (items) => {
    renderMultiplyControlls('checkbox', items)
}

// TODO: !!!
export const renderCharacterStats = (stats) => {
    $insertFormRoot.innerHTML = ''
    $insertFormRoot.innerHTML = JSON.stringify(stats)
    window.stats = Object.entries(stats)
}

export const renderNameControll = () => {
    let $dom = document.createElement('div')

    const $input = document.createElement('input')
    $dom.append($input)

    $insertFormRoot.innerHTML = ''
    $insertFormRoot.append($dom)
}


