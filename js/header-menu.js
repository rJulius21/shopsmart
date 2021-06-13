function toggleMobileMenu() {
  // UI VARIABLES
  const nav = document.getElementById('header__nav-box');
  const open = document.getElementById('header__nav-open');
  const close = document.getElementById('header__nav-close');

  //nav.style.display = 'none';

  close.addEventListener('click', () => {
    nav.style.display = 'none';
    console.log('close fired');
  })

  open.addEventListener('click', () => {
    nav.style.display = 'inherit';
    close.style.display = 'inherit';
    console.log('open fired');
  })
}

toggleMobileMenu();

function dropMenu() {
  // UI VARS
  const headerBtns = document.querySelectorAll('.header__nav-link');
  const menus = document.querySelectorAll('.header__nav-drop-1');

  //////////////////////////////////////////////////////////////////
  // FUNCTION DEFINITIONS

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

  function closeMenuOnOutClick(item, index, arr) {
    document.addEventListener('click', (event) => {
      if (item.parentElement.contains(event.target)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    })
  } // END closeMenuOnOutClick

  //////////////////////////////////////////////////////////
  // CODE RAN BY dropMenu

  menus.forEach(closeMenuOnOutClick);
  headerBtns.forEach(hideItem);
  headerBtns.forEach(toggleOpenClose);
}

///////////////////////////////////////////////////////////
// RUN SCRIPT ON THIS FILE

dropMenu();

