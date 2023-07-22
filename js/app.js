import people from './data.js';
import getElement from './utils/getElement.js';

const container = getElement('.slide-container');
const nextBtn = getElement('.next-btn');
const prevBtn = getElement('.prev-btn');

// Setting up the slide
container.innerHTML = people.map((person, slideIndex) => {

    // Destructuring
    const { img, name, job, text } = person;

    // Setting position to next by default
    let position = 'next';

    // Checking if the slideIndex is 0
    if (slideIndex === 0) {

        position = 'active';

    }

    // Checking if the slideIndex is equal to the last index
    if (slideIndex === people.length - 1) {

        position = 'last';

    }

    return `<article class="slide ${position}">

                <img class="img" src="${img}" alt="${name}">

                <h4>${name}</h4>

                <p class="title">${job}</p>

                <p class="text">${text}</p>

                <div class="quote-icon">
                    <div class="fas fa-quote-right"></div>
                </div>

            </article>`;

}).join('');

const startSlider = (type) => {


    const active = getElement('.active');
    const last = getElement('.last');
    // Selecting next sibling of the active element
    let next = active.nextElementSibling;

    // Removing the class of '.active' from the current selection
    active.classList.remove(['active']);
    // Removing the class of '.last' from the current selection
    active.classList.remove(['last']);
    // Removing the class of '.next' from the current selection
    next.classList.remove(['next']);

    // Adding the class of '.last' to the active selection
    active.classList.add('last');
    // Adding the class of '.next' to the last selection
    last.classList.add('next');
    // Adding the class of '.active' to the next selection
    next.classList.add('active');

    console.log(type);

};

nextBtn.addEventListener('click', () => {

    startSlider('next');

});

prevBtn.addEventListener('click', () => {

    startSlider('prev');

});