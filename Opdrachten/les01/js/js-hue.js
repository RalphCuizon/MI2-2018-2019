let btnhue = document.querySelector('#hue');
btnhue.addEventListener('click', function() {
    img.classList.remove('grayscale');
    img.classList.remove('sepia');
    img.classList.remove('blur');
  img.classList.add('hue');
});  