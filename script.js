$(document).ready(function () {

    // Parallax
    setTimeout(function () {
        $('header').parallax({ imageSrc: './assets/images/geral/background.png' });
        $('.endurance-image').parallax({ imageSrc: './assets/images/geral/endurance.png' });
        $('.gargantua-image').parallax({ imageSrc: './assets/images/geral/gargantua.png' });
    }, 250);

    // Show or hide header
    const headerBox = document.querySelector('.header-box-one');

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            headerBox.classList.remove('visible');
            headerBox.classList.add('hidden');
        } else if (currentScrollPos === 0) {
            headerBox.classList.remove('visible');
            headerBox.classList.remove('hidden');
        }
        else {
            if (prevScrollpos > currentScrollPos) {
                headerBox.classList.add('visible');
                headerBox.classList.remove('hidden');
            }
        }
        prevScrollpos = currentScrollPos;
    };

    // Scroll to sections

    var navBtn = $('.item');

    var home = $('header');
    var planets = $('#Planets');
    var characters = $('#Characters');
    var about = $('#About');

    var scrollTo = '';

    $(navBtn).click(function () {

        var btnId = $(this).attr('id');

        if (btnId == 'home') {
            scrollTo = home;
        } else if (btnId == 'planets') {
            scrollTo = planets;
        } else if (btnId == 'characters') {
            scrollTo = characters;
        } else if (btnId == 'about') {
            scrollTo = about;
        } else {
            scrollTo = home;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 100);
    });
});

// Get full year
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Loader
const loader = document.querySelector('.loader');
const body = document.querySelector('body');

window.addEventListener('load', () => {
    loader.style.display = 'none';
    body.style.overflow = 'auto';
});

window.addEventListener('progress', event => {
    const { loaded, total } = event;
    const progress = (loaded / total) * 100;
    loader.style.display = `${progress}%`;
});

// Dark and light theme

const toggleThemeButton = document.querySelector('#toggle-theme');

//Switch icon
const switchIcon = document.getElementById('switch-icon');

//Prais
const praisBox = document.querySelector('.prais-box');
const praisTitle = document.querySelector('.prais-title');

//Theories
const theories = document.querySelector('.theories');

//Planets
const planetsCards = document.querySelector('.planets-cards');
const planetsTitle = document.querySelector('.planets-tittle');
const cardsConatiner = document.querySelector('.cards-container');

//Characters
const charactersContainer = document.querySelector('.characters-container');

//About
const about = document.querySelector('.about');

//Footer
const footer = document.querySelector('footer');

function toggleTheme() {
    if (body.classList.contains('theme-light')) {
        //Switch button
        toggleThemeButton.classList.remove('theme-light');
        toggleThemeButton.classList.add('theme-dark');

        //Body
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');

        //Switch icon
        switchIcon.classList.remove('fa-moon');
        switchIcon.classList.add('fa-sun');

        //Prais
        praisBox.classList.add('theme-dark');
        praisTitle.classList.add('theme-dark');

        //Theories
        theories.classList.add('theme-dark');

        //Planets
        planetsCards.classList.add('theme-dark');
        planetsTitle.classList.add('theme-dark');
        cardsConatiner.classList.add('theme-dark');

        //Characters
        charactersContainer.classList.add('theme-dark');

        //About
        about.classList.add('theme-dark');

        //Footer
        footer.classList.add('theme-dark');

        setCookie('theme', 'dark', 365);
    } else {
        //Switch button
        toggleThemeButton.classList.remove('theme-dark');
        toggleThemeButton.classList.add('theme-light');

        //Body
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');

        //Switch icon
        switchIcon.classList.remove('fa-sun');
        switchIcon.classList.add('fa-moon');

        //Prais
        praisBox.classList.remove('theme-dark');
        praisTitle.classList.remove('theme-dark');

        //Theories
        theories.classList.remove('theme-dark');

        //Planets
        planetsCards.classList.remove('theme-dark');
        planetsTitle.classList.remove('theme-dark');
        cardsConatiner.classList.remove('theme-dark');

        //Characters
        charactersContainer.classList.remove('theme-dark');

        //About
        about.classList.remove('theme-dark');

        //Footer
        footer.classList.remove('theme-dark');

        setCookie('theme', 'light', 365);
    }
}

toggleThemeButton.addEventListener('click', toggleTheme);

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const savedTheme = getCookie('theme');

if (savedTheme) {
    if (savedTheme === 'dark') {
        switchIcon.classList.remove('fa-moon');
        switchIcon.classList.add('fa-sun');
        body.classList.add('theme-dark');
        praisBox.classList.add('theme-dark');
        praisTitle.classList.add('theme-dark');
        theories.classList.add('theme-dark');
        planetsCards.classList.add('theme-dark');
        planetsTitle.classList.add('theme-dark');
        cardsConatiner.classList.add('theme-dark');
        charactersContainer.classList.add('theme-dark');
        about.classList.add('theme-dark');
        footer.classList.add('theme-dark');

    } else {
        switchIcon.classList.remove('fa-sun');
        switchIcon.classList.add('fa-moon');
        body.classList.add('theme-light');
        praisBox.classList.remove('theme-dark');
        praisTitle.classList.remove('theme-dark');
        theories.classList.remove('theme-dark');
        planetsCards.classList.remove('theme-dark');
        planetsTitle.classList.remove('theme-dark');
        cardsConatiner.classList.remove('theme-dark');
        charactersContainer.classList.remove('theme-dark');
        about.classList.remove('theme-dark');
        footer.classList.remove('theme-dark');
    }
}