$(document).ready(function () {

    // Parallax
    setTimeout(function () {
        $('header').parallax({ imageSrc: './assets/images/background.png' });
        $('.endurance-image').parallax({ imageSrc: './assets/images/endurance.png' });
        $('.gargantua-image').parallax({ imageSrc: './assets/images/gargantua.png' });
    }, 250);
});

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