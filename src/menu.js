import menuImageSrc from './images/menu.png';

export default function loadMenuPage() {

    // Get & Reset Main Div Content
    const content = document.getElementById('content');
    content.innerHTML = '';

    const main = document.createElement('main');

    const menuSection = document.createElement('section');
    menuSection.id = 'menu';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuImage = document.createElement('img');
    menuImage.src = menuImageSrc;
    menuImage.alt = 'Retro Roast Menu'
    menuImage.classList.add('menu-image');

    menuContainer.appendChild(menuImage);
    menuSection.appendChild(menuContainer);
    main.appendChild(menuSection);

    content.appendChild(main);
}