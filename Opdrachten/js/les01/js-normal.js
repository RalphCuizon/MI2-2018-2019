let img = document.querySelector('#img-van');
let btnnormal = document.querySelector('#normal');
btnnormal.addEventListener('click', function() {
    img.classList.remove('sepia');
    img.classList.remove('hue');
    img.classList.remove('blur');
    img.classList.remove('grayscale');
});