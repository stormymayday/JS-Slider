import people from './data.js';
import getElement from './utils/getElement.js';

const container = getElement('.slide-container');
const nextBtn = getElement('.next-btn');
const prevBtn = getElement('.prev-btn');

// Setting up the slide
container.innerHTML = people.map((person, slideIndex) => {

    // Destructuring
    const { img, name, job, text } = person;

    return `hello`;

});