document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                document.documentElement.style.setProperty('--background-color', '#1a1a1a');
                document.documentElement.style.setProperty('--text-color', '#f0f8ff');
                document.documentElement.style.setProperty('--secondary-text-color', '#ccc');
                document.documentElement.style.setProperty('--shadow-color', '#ffffff33');
                darkModeToggle.textContent = '☀️';
            } else {
                document.documentElement.style.setProperty('--background-color', '#f0f8ff');
                document.documentElement.style.setProperty('--text-color', '#333');
                document.documentElement.style.setProperty('--secondary-text-color', '#666');
                document.documentElement.style.setProperty('--shadow-color', '#00000033');
                darkModeToggle.textContent = '🌙';
            }
        });
    } else {
        console.error("Dark mode toggle button not found.");
    }
});

document.getElementById('downArrow').addEventListener('click', function() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Project data
const projects = [
    {
        image: "./assets/img/town.jpg",
        title: "Mr. Bean Goes to Town",
        description: "Mr Bean purchases a new TV, only to experience a spot of reception trouble. He then takes a stroll in the park to try out his new camera, which is promptly stolen.",
        githubLink: "https://github.com/Student408",
        demoLink: "https://www.imdb.com/title/tt0651847/"
    },
    {
        image: "./assets/img/trouble.jpg",
        title: "The Trouble with Mr. Bean",
        description: "Mr Bean, late for his dental appointment, tries to get dressed and clean his teeth whilst on the way.",
        githubLink: "https://github.com/Student408",
        demoLink: "https://www.imdb.com/title/tt0651854/"
    },
    {
        image: "./assets/img/rides.jpg",
        title: "Mr. Bean Rides Again",
        description: "At the bus stop, Mr Bean tries his best to revive a heart attack victim before using an ambulance to jump-start his own mini-car. ",
        githubLink: "https://github.com/Student408",
        demoLink: "https://www.imdb.com/title/tt0651848/"
    }
];

// Function to create a card
function createCard(project) {
    return `
        <div class="card">
            <div class="card-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="card-content">
                    <h3 class="card-title">${project.title}</h3>
                    <div class="card-text-content">
                    <p class="card-text">${project.description}</p>
                    </div>
                <div class="card-buttons">
                    <a href="${project.githubLink}" class="btn btn-github" target="_blank">GitHub</a>
                    <a href="${project.demoLink}" class="btn btn-demo" target="_blank">DEMO</a>
                </div>
            </div>
        </div>
    `;
}

// Function to render all cards
function renderCards() {
    const container = document.getElementById('project-container');
    container.innerHTML = projects.map(project => createCard(project)).join('');
}

// Render cards when the page loads
window.onload = renderCards;

// contact form
import { USER_ID, SERVICE_ID, TEMPLATE_ID } from './config.js';

emailjs.init(USER_ID);

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const templateParams = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(response => {
            alert('Thank you for your message, ' + this.name.value + '! Mr. Bean will get back to you soon.');
            this.reset();
        })
        .catch(error => {
            console.error('Failed to send email:', error);
            alert('Oops! Something went wrong. Please try again.');
        });
});

