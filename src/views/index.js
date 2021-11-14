const $insertFormRoot = document.getElementById('insert-root') 


const renderMultiplyControlls = (type, items) => {
    let $dom = document.createElement('div')

    items.forEach(item => {
        let $pickerItem = document.createElement('div');
        let $inputControll = document.createElement('input')
        $inputControll.setAttribute('type', type)
        let $label = document.createElement('label')
        $label.innerText = item

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

export const renderCheckboxControlls = (items) => {
    renderMultiplyControlls('checkbox', items)
}

export const renderNameControll = () => {
    let $dom = document.createElement('div')

    const $input = document.createElement('input')
    $dom.append($input)

    $insertFormRoot.innerHTML = ''
    $insertFormRoot.append($dom)
}


