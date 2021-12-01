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

// TODO: fix
export const renderCharacterStats = (stats) => {
    const $dom = document.createElement('code')

    // stats.forEach(stat => {
    //     const entryValue = Object.entries(stat)[1][1]
    //     const entryKey = Object.entries(stat)[1][0]
    //     if (entryValue.includes('images')) {
    //         const $img = document.createElement('img')
    //         $img.setAttribute('src', 'http://localhost:3000/' + entryValue)
    //         $dom.append($img)
    //     } else {
    //         const $entryNode = document.createElement('div')
    //         $entryNode.innerText = entryKey + ': ' + entryValue 
    //         $dom.append($entryNode)
    //     }
    // })

    

    $insertFormRoot.innerHTML = ''
    $dom.innerHTML = JSON.stringify(stats)
    $insertFormRoot.append($dom)
}

// export const renderNameControll = () => {
//     let $dom = document.createElement('div')

//     const $input = document.createElement('input')
//     $dom.append($input)

//     $insertFormRoot.innerHTML = ''
//     $insertFormRoot.append($dom)
// }

export const renderCharactersTable = (characters) => {

    const $table = document.createElement('table')
    
    characters.forEach(character => {
        const $row = document.createElement('row')

        Object.entries(character).forEach(([ propName, value ]) => {
            if (propName === 'name') {
                const $td = document.createElement('td')
                $td.innerText = value
                $row.append($td)
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                const propKey = Object.keys(value)
                const $td = document.createElement('td')
                $td.innerText = value[propKey[1]]
                $row.append($td)
            } 
            
        })

        $table.append($row)
    })

    document.getElementById('insert-table-node').append($table)

}

