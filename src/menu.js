const Menu = (() => {
  let multiSelect = true;

  const scanForMenu = () =>{
    const menuElements = document.querySelectorAll('.drop-box-cont');
    let selectedMenus = 0;
    for (const menu in menuElements) {
      if(typeof(menuElements[menu]) === 'number'){ break; }
      menuElements[menu].addEventListener('click', (e) => {
        if (!multiSelect && !isClicked(menuElements[menu])) {
          clearSelectedMenus();
        }
        isClicked(menuElements[menu]) ?  menuUnClicked(menuElements[menu]) : menuClicked(menuElements[menu]);
      });
    }
  };

  const isClicked = (element) => {
    let result;
    element.classList.contains('clicked') ? result = true: result = false;
    return result;
  }

  const clearSelectedMenus = () => {
    const menuElements = document.querySelectorAll('.drop-box-cont');
    for (const menu in menuElements) {
      if (typeof(menuElements[menu]) === 'number'){
        break;
      }
      if (menuElements[menu].classList.contains('clicked')) {
        menuUnClicked(menuElements[menu]);
      }
    }
  };

  const menuClicked = (element) => {
    element.classList.add('clicked');
  };

  const menuUnClicked = (element) => {
    element.classList.remove('clicked');
  };

  const allowMultiSelect = (state) => {
    multiSelect = state;
  };


  return {
    scanForMenu,
    allowMultiSelect
  }
})();

export default Menu;