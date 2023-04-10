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