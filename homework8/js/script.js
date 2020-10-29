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