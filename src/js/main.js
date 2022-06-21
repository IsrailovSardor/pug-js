import '../css/main.scss';
import openMenu from './components/openMenu'
import openModalPage from "./components/openModalPage"
import getLocation from './components/getLocation';
import modulePage from './components/modulePage'
openMenu();
openModalPage();
modulePage(); 
getLocation();

function getLinks() {
    const links = document.querySelectorAll('.price-block__title-btn')
    links.forEach(link => link.addEventListener('click', () => {
      document.location.href = "http://localhost:4000/training.html";
    }))
  }
  export default getLinks;