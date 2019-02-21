let btnsepia = document.querySelector('#sepia');
btnsepia.addEventListener('click', function() {
    img.classList.remove('grayscale');
    img.classList.remove('hue');
    img.classList.remove('blur');
  img.classList.add('sepia');
});