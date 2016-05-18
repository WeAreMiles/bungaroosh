var filmList = document.getElementsByClassName('film-list__film-link');
var mainNav = document.getElementsByClassName('main-nav__link');
var subNavSections = document.getElementsByClassName('sub-nav__content');
var mainContentItems = document.getElementsByClassName('main-content__item');
var openCloseButton = document.getElementById('open-close-button');
var subNav = document.getElementById('sub-nav');
var mainNavList = document.getElementById('main-nav__list');
var openIcon = document.getElementById('open-icon');
var closeIcon = document.getElementById('shut-icon');
var filmID;
var filmIWantToSee;
var selectedFilmLink;
var selectedFilm;
var filmItem;
var elementToShow;

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function hideAllFilms(){
    [].map.call(mainContentItems, function(el){
        el.style.opacity = 0;
    });
}

function getElementToShow(navElement){
    navElementID = navElement.id;
    return navElementID;
}

function showFilm(elementToShow){
    filmIWantToSee = document.getElementById(elementToShow);
    filmIWantToSee.style.opacity = 1;
}

function showSelectedFilm(){
    selectedFilmLink = document.getElementsByClassName('film-list__film-link selected');
    selectedFilm = document.getElementById(getElementToShow(selectedFilmLink[0]).slice(5));
    selectedFilm.style.opacity = 1;
}

function previewFilm(){
    filmItem = this;
    elementToShow = getElementToShow(filmItem);
    elementToShow = elementToShow.slice(5);
    hideAllFilms();
    showFilm(elementToShow);
}

function resetFilmPreviews(){
    hideAllFilms();
    showSelectedFilm();
}

function removeSelected(item){
    item.classList.remove('selected');
}

function addSelected(item){
    item.classList.add('selected');
}

function handleFilmItemClasses(){
    filmItem = this;
    for(var iterator2 = 0; iterator2 < filmList.length; iterator2++){
        removeSelected(filmList[iterator2]);
    }
    addSelected(filmItem);
}

function handleMainNavClasses(mainNavItem){
    for(var iterator4 = 0; iterator4 < mainNav.length; iterator4++){
        removeSelected(mainNav[iterator4]);
    }
    addSelected(mainNavItem);
}

function showHideSubNavSections(mainNavItem){
    for(var iterator5 = 0; iterator5 < subNavSections.length; iterator5++){
        removeSelected(subNavSections[iterator5]);
    }
    elementToShow = getElementToShow(mainNavItem);
    elementToShow = document.getElementById('sub-nav__content-' + elementToShow);
    addSelected(elementToShow);
}

function handleMainNav(){
    mainNavItem = this;
    handleMainNavClasses(mainNavItem);
    showHideSubNavSections(mainNavItem);
}

function handleNavOpenClose(){
    openCloseButton.classList.toggle('open');
    subNav.classList.toggle('open');
    mainNavList.classList.toggle('open');
    if(hasClass(openCloseButton, 'open')){
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else{
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

for(var iterator = 0; iterator < filmList.length; iterator++){
    filmList[iterator].addEventListener('mouseover', previewFilm);
    filmList[iterator].addEventListener('mouseout', resetFilmPreviews);
    filmList[iterator].addEventListener('click', handleFilmItemClasses);
}

for(var iterator3 = 0; iterator3 < mainNav.length; iterator3++){
    mainNav[iterator3].addEventListener('click', handleMainNav);
}

openCloseButton.addEventListener('click', handleNavOpenClose);
