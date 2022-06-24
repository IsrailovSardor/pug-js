import '/src/css/main.scss';
import getLocation from '/src/js/components/getLocation';
import openMenu from '/src/js/components/openMenu';
import openModalPage from '/src/js/components/openModalPage';
openMenu()
openModalPage()
getLocation()
const links = document.querySelectorAll('.price__item-btn')
links.forEach(link => link.addEventListener('click', () => {
  document.location.href = "http://localhost:4000/training.html";
}))

// const link_page = document.querySelector('.training__button')
// link_page.addEventListener('click', () => {
//   document.location.href = "http://localhost:4000/price.html";
// })