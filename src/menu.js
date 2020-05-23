const Menu = (() => {
  let multiSelect = true;

  const scanForMenu = () =>{
    const menuElements = document.querySelectorAll('.drop-box-cont');
    let selectedMenus = 0;
    for (const menu in menuElements) {
      let dropStatus = false;
      if(typeof(menuElements[menu]) === 'number'){ break; }
      menuElements[menu].addEventListener('click', (e) => {
        dropStatus = !dropStatus;
        dropStatus ? menuClicked(menuElements[menu]) : menuUnClicked(menuElements[menu]);
        console.log(dropStatus);
      });
    }
  };

  const clearSelectedMenus = () => {
    const menuElements = document.querySelectorAll('.drop-box-cont');
    for (const menu in menuElements) {
      if(typeof(menuElements[menu]) === 'number'){
        break;
      }
      if(menuElements[menu].classList.contains('clicked')) {
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