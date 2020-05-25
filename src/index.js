import './scss/style.scss';
import Menu from './menu';
const menuObj = Menu;

const start = (() => {
  menuObj.scanForMenu();
  menuObj.allowMultiSelect(false);
})();