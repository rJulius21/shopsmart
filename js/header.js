

function dropMenu() {
  const headerBtns = document.querySelectorAll('.header__nav-link');

  function zeroItemHeight(item, index, arr) {
    // Prevents the need for double-click on first menu drop
    item.nextElementSibling.style.height = '0px';
  }  // END zeroItemHeight DEFINITION


  function toggleOpenClose(item, index, arr) {
    // Adds event listeners to open/close header drop down menus
    item.addEventListener('click', () => {
      if (item.nextElementSibling.style.height == '0px') {
        // Menu is closed, open it
        item.nextElementSibling.style.height = 'inherit';
        console.log('drop fired');

      } else {
        // Menu is open, close it
        item.nextElementSibling.style.height = '0px';
        console.log('close fired');

      }
    });
  }  // END toggleOpenClose DEFINITION

  // CODE RAN BY dropMenu
  headerBtns.forEach(zeroItemHeight);
  headerBtns.forEach(toggleOpenClose);
}


// RUN SCRIPT ON THIS FILE
dropMenu();