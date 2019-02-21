let btnblur = document.querySelector('#blur');
btnblur.addEventListener('click', function() {
    img.classList.remove('grayscale');
    img.classList.remove('hue');
    img.classList.remove('sepia');
  img.classList.add('blur');
});  