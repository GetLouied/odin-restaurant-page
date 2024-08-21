import cassetteCappucino from './images/cassette-cappucino.png';
import specialCombo from './images/special-combo.png';
import pacmanPies from './images/pacman-pies.png';

export default function loadHomePage() {

    // Get & Reset Main Div Content
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Hero Section
    const hero = document.createElement('div');
    hero.id = 'hero';

    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Welcome to Retro Roast';

    const heroParagraph = document.createElement('p');
    heroParagraph.textContent = 'Sip back in time with our handcrafted brews and nostalgic treats.';

    const ctaButtons = document.createElement('div');
    ctaButtons.classList.add('cta-buttons');

    const menuButton = document.createElement('a');
    menuButton.href = '#menu';
    menuButton.classList.add('btn');
    menuButton.textContent = 'See Our Menu';

    const contactButton = document.createElement('a');
    contactButton.href = '#contact';
    contactButton.classList.add('btn');
    contactButton.textContent = 'Visit Us';

    ctaButtons.appendChild(menuButton);
    ctaButtons.appendChild(contactButton);

    heroText.appendChild(heroTitle);
    heroText.appendChild(heroParagraph);
    heroText.appendChild(ctaButtons);

    hero.appendChild(heroText);
    content.appendChild(hero);

    // Featured Items Section
    const featuredItems = document.createElement('section');
    featuredItems.id = 'featured-items';

    const featuredTitle = document.createElement('h2');
    featuredTitle.textContent = 'Featured Items';
    featuredItems.appendChild(featuredTitle);

    const popularPicks = document.createElement('div');
    popularPicks.classList.add('popular-picks');

    const items = [
        {
            imgSrc: cassetteCappucino,
            altText: 'Cassette Cappuccino',
            title: 'Cassette Cappuccino',
            description: 'A classic cappuccino with a touch of vintage flair.'
        },
        {
            imgSrc: specialCombo,
            altText: 'Special Combo',
            title: 'Special Combo of the Day',
            description: 'Polaroid Perfect Pair: A delightful combo of our most popular brews and treats.'
        },
        {
            imgSrc: pacmanPies,
            altText: 'Pac-Man Pies',
            title: 'Pac-Man Pies',
            description: 'Delicious pies inspired by the arcade games of yesteryear.'
        }
    ];

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const itemImg = document.createElement('img');
        itemImg.src = item.imgSrc;
        itemImg.alt = item.altText;

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemTitle);
        itemDiv.appendChild(itemDescription);

        popularPicks.appendChild(itemDiv);
    });

    featuredItems.appendChild(popularPicks);
    content.appendChild(featuredItems);


    // About Section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';

    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Retro Roast';
    aboutSection.appendChild(aboutTitle);

    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = 'At Retro Roast, we blend the charm of the past with the finest coffee of today. ';
    
    const aboutLink = document.createElement('a');
    aboutLink.href = '#about-details';
    aboutLink.classList.add('btn');
    aboutLink.textContent = 'Discover more about our journey';
    aboutParagraph.appendChild(aboutLink);

    aboutSection.appendChild(aboutParagraph);
    content.appendChild(aboutSection);
}