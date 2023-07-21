import people from './data.js';
import getElement from './utils/getElement.js';

const container = getElement('.slide-container');
const nextBtn = getElement('.next-btn');
const prevBtn = getElement('.prev-btn');

// Setting up the slide
container.innerHTML = people.map((person, slideIndex) => {

    // Destructuring
    const { img, name, job, text } = person;

    return `<article class="slide">

                <img class="img" src="${img}" alt="${name}">

                <h4>${name}</h4>

                <p class="title">${job}</p>

                <p class="text">${text}</p>

                <div class="quote-icon">
                    <div class="fas fa-quote-right"></div>
                </div>

            </article>`;

}).join('');