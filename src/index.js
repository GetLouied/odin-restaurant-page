import loadHomePage from './home';
import loadMenuPage from './menu';
import loadAboutPage from './about';
import loadContactPage from './contact';
import './styles/styles.css';


function init() {
    loadHomePage(); 

    const homeButton = document.querySelector('nav button:nth-child(1)');
    const menuButton = document.querySelector('nav button:nth-child(2)');
    const aboutButton = document.querySelector('nav button:nth-child(4)');
    const contactButton = document.querySelector('nav button:nth-child(5)');

    homeButton.addEventListener('click', loadHomePage);
    menuButton.addEventListener('click', loadMenuPage);
    aboutButton.addEventListener('click', loadAboutPage);
    contactButton.addEventListener('click', loadContactPage);
}

init();
