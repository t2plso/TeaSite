const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');


menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});

const joinButton = document.querySelector('.mailing-list__btn');

joinButton.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Thank you for joining our mailing list!');
});

const blogLinks = document.querySelectorAll('.main-blog__item-link');

blogLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#007BFF';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});

class Tea {
    constructor(name, description, img) {
        this.name = name;
        this.description = description;
        this.img = img;
    }
}

const teas = [
    new Tea('Black Tea', 'Rich in flavor and a great source of caffeine.', 'images/black.png'),
    new Tea('Green Tea', 'Known for its health benefits and antioxidants.', 'images/green.png'),
    new Tea('White Tea', 'Light and delicate with a subtle flavor.', 'images/white.png'),
    new Tea('Oolong Tea', 'A traditional Chinese tea that is partially oxidized.', 'images/oolong.png'),
    new Tea('Pu-erh Tea', 'A fermented tea that has a unique earthy flavor.', 'images/pu-erh.png')
];

function displayTeas(teas) {
    const assortmentList = document.querySelector('.assortment__list');
    assortmentList.innerHTML = '';

    teas.forEach(tea => {
        const teaItem = document.createElement('li');
        teaItem.classList.add('assortment__item');

        teaItem.innerHTML = `
            <img src="${tea.img}" alt="${tea.name}" class="assortment__img">
            <p class="assortment__name">${tea.name}</p>
            <p class="assortment__description">${tea.description}</p>
        `;

        assortmentList.appendChild(teaItem);
    });
}


displayTeas(teas);

async function fetchTeas() {
    try {
        const response = await fetch('./teas.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const teas = await response.json();
        displayTeas(teas); 
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchTeas(); 

setTimeout(() => {
    fetchTeas(); 
}, 60000); 
