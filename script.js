const slideshows = document.querySelectorAll('.slides');

slideshows.forEach(function (slides) {
  const images = slides.querySelectorAll('img');
  if (images.length === 0) {
    return;
  }

  let index = 0;
  images[0].classList.add('active');

  if (images.length < 2) {
    return;
  }

  setInterval(function () {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 1000);
});