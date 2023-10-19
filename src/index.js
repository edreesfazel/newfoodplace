import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const contentDiv = document.getElementById('content');
const tabContentDiv = document.createElement('div')
contentDiv.appendChild(tabContentDiv)


const setupHeader = () => {
    const header = document.createElement('header');
    const ul = document.createElement('ul');

    ['home', 'menu', 'contact'].forEach(text => {
        const button = document.createElement('button')
        button.textContent = text
        ul.appendChild(button)
        header.appendChild(ul)
        button.addEventListener('click', loadTab)
    })

    contentDiv.insertBefore(header, tabContentDiv);
}

const loadTab = (event) => {

    const clickedButton = event.target;
    tabContentDiv.innerHTML = ''

    if(clickedButton.textContent === 'home') {
        home(tabContentDiv)
    } else if (clickedButton.textContent === 'menu') {
        menu(tabContentDiv)
    } else if (clickedButton.textContent === 'contact') {
        contact(tabContentDiv)
    }

}
setupHeader();
home(tabContentDiv);




