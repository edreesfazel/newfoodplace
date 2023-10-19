const home = (container) => {

    container.innerHTML = ''

    //welcome message
    const welcomeMessage = document.createElement('h1')
    welcomeMessage.textContent = 'welcome to chomp'

    container.appendChild(welcomeMessage)

    //secondary message
    const secondaryMessage = document.createElement('h2');
    secondaryMessage.textContent = 'this is the best restaurant in socal'

    container.appendChild(secondaryMessage)

    //pizza image
    const pizzaImage = document.createElement('img')
    pizzaImage.setAttribute('src', "pizza.jpg")

    container.appendChild(pizzaImage)

    return container
    

}

export {home}