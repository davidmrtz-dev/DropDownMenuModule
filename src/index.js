import './scss/style.scss';
import Menu from './menu';

const menu = Menu;
const btnOne = document.getElementById('icon-1');
const menuOne =  document.getElementById('menu-1')
let btnState = false;

const start = (() => {
  btnOne.addEventListener('click', (e) => {
    btnState = !btnState;
    if(btnState) {
      menuOne.classList.remove('hide');
    } else {
      menuOne.classList.add('hide');
    }
  }, false, { once: true });
})();