const menu = (container) => {

    const contentDiv = document.getElementById('content')
    container.innerHTML = ''

    const menuDiv = document.createElement('div')

    const menuItemOne = document.createElement('p')
    menuItemOne.textContent = 'oven baked cheese pizza ($17)'

    const menuItemTwo = document.createElement('p')
    menuItemTwo.textContent = 'deep fried oreos ($8)'

    const menuItemThree = document.createElement('p')
    menuItemThree.textContent = 'fiji water ($3)'

    menuDiv.appendChild(menuItemOne)
    menuDiv.appendChild(menuItemTwo)
    menuDiv.appendChild(menuItemThree)

    container.appendChild(menuDiv)
  

    return container

}

export {menu}