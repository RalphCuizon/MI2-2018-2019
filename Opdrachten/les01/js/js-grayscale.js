let btngrayscale = document.querySelector('#grayscale');
btngrayscale.addEventListener('click', function() {
    img.classList.remove('sepia');
    img.classList.remove('hue');
    img.classList.remove('blur');
    img.classList.add('grayscale');
});