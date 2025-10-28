const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // start AutoPlay
  autoplay: {
    delay: 5000,
  },

});

// current year in footer
const theTime = new Date();
document.querySelector('#year').textContent = theTime.getFullYear();