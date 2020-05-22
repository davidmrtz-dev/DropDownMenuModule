import './scss/style.scss';
import Menu from './menu';

const menu = Menu;
const dropCont = document.getElementById('drop-cont');
let dropStatus = false;

const start = (() => {
  dropCont.addEventListener('click', (e) => {
    e.stopPropagation();
    dropStatus = !dropStatus;
    if(dropStatus) {
      dropCont.classList.add('clicked');
    } else {
      dropCont.classList.remove('clicked');
    }
  });
})();