const contact = (container) => {

    const contentDiv = document.getElementById('content')
    container.innerHTML = ''

    const contactDiv = document.createElement('div')

    const contactNumber = document.createElement('p')
    contactNumber.textContent = 'please call 818 777 8787 for reservations'

    contactDiv.appendChild(contactNumber)
    container.appendChild(contactDiv)

    return container
}

export {contact}