import retroLogo from './images/logo.png';
import vintageCoffee from './images/vintage-coffee.png';
import vintageVinyl from './images/vintage-vinyl.png';
import vintageCommunity from './images/vintage-community.png';

export default function loadAboutPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const main = document.createElement('main');

    // Section: About
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';

    const createAboutContainer = (title, text, imgSrc, imgAlt) => {
        const container = document.createElement('div');
        container.classList.add('about-container');

        const textCard = document.createElement('div');
        textCard.classList.add('about-card');
        const heading = document.createElement('h2');
        heading.textContent = title;
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        textCard.append(heading, paragraph);

        const imageCard = document.createElement('div');
        imageCard.classList.add('about-card', 'image-card');
        const image = document.createElement('img');
        image.src = imgSrc;
        image.alt = imgAlt;
        imageCard.appendChild(image);

        container.append(textCard, imageCard);
        return container;
    };

    // Add each about container
    aboutSection.appendChild(createAboutContainer(
        'The Retro Roast Journey',
        'Retro Roast began with a simple idea: to create a place where the charm of the past meets the flavors of today. We wanted to build a space that feels like a nostalgic time capsule, where every cup of coffee and every bite of pastry brings back memories of yesteryear. Inspired by the cozy coffee shops of the Seventies and Eighties, vinyl records, arcade games, and cassette tapes, Retro Roast is more than just a coffee shop—it’s a trip down memory lane.',
        retroLogo,
        'Retro Roast Journey'
    ));

    aboutSection.appendChild(createAboutContainer(
        'Our Passion for Coffee',
        'At Retro Roast, coffee is more than a drink; it’s a craft. We source the finest beans from around the world and take pride in every cup we brew. From our signature Cassette Cappuccino to the Polaroid Pour-Over, each of our drinks is carefully crafted to bring out the best in every flavor. Our baristas are passionate about coffee and dedicated to making your experience as rich and satisfying as possible.',
        vintageCoffee,
        'Our Passion for Coffee'
    ));

    aboutSection.appendChild(createAboutContainer(
        'The Retro Vibe',
        'Step into Retro Roast, and you’ll instantly feel the throwback vibe. Our walls are lined with vinyl records, and our seating area is filled with cozy, vintage furniture. Whether you\'re here to enjoy a cup of coffee, play a round of Pac-Man, or simply soak in the nostalgic atmosphere, we’ve created a space that’s both familiar and new, a blend of retro charm and modern comfort.',
        vintageVinyl,
        'The Retro Vibe'
    ));

    aboutSection.appendChild(createAboutContainer(
        'Community and Connection',
        'Retro Roast is more than just a coffee shop; it’s a community hub. We believe in the power of connection—whether it’s through a shared love of coffee, music, or memories. We host events that bring people together, from vinyl record swaps to retro gaming nights. We’re proud to be a place where people can relax, unwind, and enjoy the company of friends old and new.',
        vintageCommunity,
        'Community & Connection'
    ));

    const closingDiv = document.createElement('div');
    closingDiv.classList.add('about-closing');
    const closingParagraph = document.createElement('p');
    closingParagraph.textContent = 'Thank you for being part of the Retro Roast family. Whether you’re a first-time visitor or a regular, we’re here to make every visit special. So come on in, grab a cup of your favorite brew, and let’s make some new memories together.';
    closingDiv.appendChild(closingParagraph);

    aboutSection.appendChild(closingDiv);

    main.appendChild(aboutSection);

    content.appendChild(main);
}
