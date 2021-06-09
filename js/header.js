

function dropMenu() {
  const headerBtns = document.querySelectorAll('.header__nav-link');

  function hideItem(item, index, arr) {
    // Prevents the need for double-click on first menu drop
    item.nextElementSibling.style.display = 'none';
  }  // END zeroItemHeight DEFINITION


  function toggleOpenClose(item, index, arr) {
    // Adds event listeners to open/close header drop down menus
    item.addEventListener('click', () => {
      if (item.nextElementSibling.style.display == 'none') {
        // Menu is closed, open it
        item.nextElementSibling.style.display = 'block';

      } else {
        // Menu is open, close it
        item.nextElementSibling.style.display = 'none';

      }
    });
  }  // END toggleOpenClose DEFINITION

  // CODE RAN BY dropMenu
  headerBtns.forEach(hideItem);
  headerBtns.forEach(toggleOpenClose);
}


// RUN SCRIPT ON THIS FILE
dropMenu();