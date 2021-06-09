

function operateSubMenu() {
  // UI VARIABLES
  const menuOpeners = document.querySelectorAll('.header__nav-drop-1-link');

  // FUNCTION DEFINITIONS
  function hideItem(item, index, arr) {
    //Hide all sub-menus
    item.nextElementSibling.style.display = 'none';
  } // END hideItem

  function openSubMenu(item, index, arr) {
    item.addEventListener('click', () => {
      if (item.nextElementSibling.style.display == 'none') {
        item.nextElementSibling.style.display = 'block';
        console.log('drop fired');
      } else {
        item.nextElementSibling.style.display = 'none';
        console.log('CLOSE fired');
      } // END IF ELSE
    }) // END primary event listener

  } // END openSubMenu

  // START CODE EXECUTION
  menuOpeners.forEach(hideItem);
  menuOpeners.forEach(openSubMenu);
}

// RUN SCRIPT ON THIS FILE
operateSubMenu()

