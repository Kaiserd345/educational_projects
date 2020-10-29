//Sticky Header
window.onscroll = function () {stickyHeader()};
let headerTop = document.querySelector(".header-sticky-top");
let sticky = headerTop.offsetTop;

function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        headerTop.classList.add("sticky");
    } else {
        headerTop.classList.remove("sticky")
    }
}

//Burger Button //Show Navigation
const menuBtn = document.querySelector('.menu-btn');
const navPanel = document.querySelector('.header-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navPanel.classList.add('nav-show')
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navPanel.classList.remove('nav-show')
    }
});


