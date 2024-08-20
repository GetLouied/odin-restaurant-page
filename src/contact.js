export default function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const main = document.createElement('main');

    // Section: Contact Info
    const contactInfoSection = document.createElement('section');
    contactInfoSection.id = 'contact-info';

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact Us';

    const contactDetailsDiv = document.createElement('div');
    contactDetailsDiv.classList.add('contact-details');

    const addressCard = document.createElement('div');
    addressCard.classList.add('contact-card');
    addressCard.innerHTML = `<h2>Our Address</h2><p>123 Retro Lane, Coffee Town, CA 90210</p>`;

    const phoneCard = document.createElement('div');
    phoneCard.classList.add('contact-card');
    phoneCard.innerHTML = `<h2>Phone</h2><p>(123) 456-7890</p>`;

    const emailCard = document.createElement('div');
    emailCard.classList.add('contact-card');
    emailCard.innerHTML = `<h2>Email</h2><p><a href="mailto:contact@retro-roast.com">contact@retro-roast.com</a></p>`;

    contactDetailsDiv.append(addressCard, phoneCard, emailCard);
    contactInfoSection.append(contactHeading, contactDetailsDiv);

    // Section: Contact Form
    const contactFormSection = document.createElement('section');
    contactFormSection.id = 'contact-form';

    const formHeading = document.createElement('h1');
    formHeading.textContent = 'Send Us a Message';

    const contactForm = document.createElement('form');
    contactForm.action = 'mailto:contact@retro-roast.com';
    contactForm.method = 'post';
    contactForm.enctype = 'text/plain';

    contactForm.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" class="btn">Send Message</button>
    `;

    contactFormSection.append(formHeading, contactForm);

    // Section: Map
    const mapSection = document.createElement('section');
    mapSection.id = 'map';

    const mapHeading = document.createElement('h1');
    mapHeading.textContent = 'Find Us Here';

    const mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');

    const mapIframe = document.createElement('iframe');
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28741.633445793093!2d-80.16253086523436!3d25.780332799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b5291fa0a931%3A0x1b19a92279bcda82!2sCaffe%20Umbria!5e0!3m2!1sen!2sus!4v1723946818634!5m2!1sen!2sus";
    mapIframe.width = "600";
    mapIframe.height = "450";
    mapIframe.style.border = "0";
    mapIframe.allowFullscreen = true;
    mapIframe.loading = "lazy";
    mapIframe.referrerPolicy = "no-referrer-when-downgrade";

    mapContainer.appendChild(mapIframe);
    mapSection.append(mapHeading, mapContainer);

    main.append(contactInfoSection, contactFormSection, mapSection);

    content.appendChild(main);
}
