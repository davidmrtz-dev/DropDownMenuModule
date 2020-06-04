import './scss/style.scss';
import Menu from './index';
const menuObj = Menu;

const start = (() => {
  menuObj.scanForMenu();
  menuObj.allowMultiSelect(false);
})();