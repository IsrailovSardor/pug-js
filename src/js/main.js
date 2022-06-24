import '../css/main.scss';
import getLocation from './components/getLocation';
import openMenu from './components/openMenu';
import openModalPage from './components/openModalPage';
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