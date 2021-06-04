var cats = document.querySelectorAll("div.sidebar__item-tier-1");
var catsLen = cats.length;
//var i = catsLen - 3;
//var cat = cats[i];

var cat0 = cats[0];
var cat1 = cats[1];
var cat2 = cats[2];

var subCats = document.querySelectorAll("div.sidebar__sub-cat-box");
//var subCat = subCats[i];

var subCat0 = subCats[0];
var subCat1 = subCats[1];
var subCat2 = subCats[2];
//console.log(subCat);

////////////////////////////////////////////////////

function loadSubCatHeight0() {
  subCat0.style.height = '0rem';
}
function expandSidebarCat0() {
  subCat0.style.height = 'max-content';
}
function contractSidebarCat0() {
  subCat0.style.height = '0rem';
}

function sidebarOperation0() {

  if (subCat0.style.height == '0rem') {
    expandSidebarCat0();
  } else {
    contractSidebarCat0();
  }

  // CODE BELOW LOGS IF THIS FUNCTION WAS FIRED
  console.log("sidebarOperation was executed");
}

loadSubCatHeight0();
cat0.addEventListener('click', sidebarOperation0);

//////////////////////////////////////////////////////////////////

function loadSubCatHeight1() {
  subCat1.style.height = '0rem';
}
function expandSidebarCat1() {
  subCat1.style.height = 'max-content';
}
function contractSidebarCat1() {
  subCat1.style.height = '0rem';
}

function sidebarOperation1() {

  if (subCat1.style.height == '0rem') {
    expandSidebarCat1();
  } else {
    contractSidebarCat1();
  }

  // CODE BELOW LOGS IF THIS FUNCTION WAS FIRED
  console.log("sidebarOperation was executed");
}

loadSubCatHeight1();
cat1.addEventListener('click', sidebarOperation1);

//////////////////////////////////////////////////////////////////

function loadSubCatHeight2() {
  subCat2.style.height = '0rem';
}
function expandSidebarCat2() {
  subCat2.style.height = 'max-content';
}
function contractSidebarCat2() {
  subCat2.style.height = '0rem';
}

function sidebarOperation2() {

  if (subCat2.style.height == '0rem') {
    expandSidebarCat2();
  } else {
    contractSidebarCat2();
  }

  // CODE BELOW LOGS IF THIS FUNCTION WAS FIRED
  console.log("sidebarOperation was executed");
}

loadSubCatHeight2();
cat2.addEventListener('click', sidebarOperation2);

//////////////////////////////////////////////////////////////////
