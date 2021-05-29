var cats = document.querySelectorAll("div.sidebar__item-tier-1");
var catsLen = cats.length;
var i = catsLen - 3;
var cat = cats[i];

var subCats = document.querySelectorAll("div.sidebar__sub-cat-box");
var subCat = subCats[i];
//console.log(subCat);

function loadSubCatHeight() {
  subCat.style.height = '0rem';
}
function expandSidebarCat() {
  subCat.style.height = 'max-content';
}
function contractSidebarCat() {
  subCat.style.height = '0rem';
}

function sidebarOperation() {

  if (subCat.style.height == '0rem') {
    expandSidebarCat();
  } else {
    contractSidebarCat();
  }

  // CODE BELOW LOGS IF THIS FUNCTION WAS FIRED
  console.log("sidebarOperation was executed");
}

//////////////////////////////////////////////////////////////////

loadSubCatHeight();
cat.addEventListener('click', sidebarOperation);