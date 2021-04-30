const nav = document.querySelector('.navbar');
const search = document.querySelector('.search');

window.onscroll = function (event) {
  console.log(window.scrollY);
  if (window.scrollY > 15) {
    nav.classList.add('navbar-background');
  } else {
    nav.classList.remove('navbar-background');
  }
};

document.querySelector('.search-link').onclick = function () {
  search.classList.remove('scale-out-ver-top');
  search.classList.add('scale-in-ver-top');
  search.style.display = 'block';
};

document.querySelector('.search-close').onclick = function () {
    search.classList.add('scale-out-ver-top');
    search.onanimetedend = function() {
      search.style.display = 'none';
    }
};