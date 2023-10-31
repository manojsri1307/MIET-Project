
function init() {

    const hamburger = document.querySelector(".hamburger");
    const sidebarContainer = document.querySelector(".sidebar-container");
    const sidebarcloseButton = document.querySelector(".close-button");

    const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
    };

    const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar");
    };

    hamburger.addEventListener("click", openSidebar);
    sidebarcloseButton.addEventListener("click", closeSidebar);

}

init();

function navRelateCode() {
    const navbarContainer = document.querySelector(".nav-container");
    window.addEventListener("scroll", function() {
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth >= 992 ? 70 : 50;
    if (scrollNumber >= targetNumber) {
        navbarContainer.classList.add("sticky-nav")
    } else {
        navbarContainer.classList.remove("sticky-nav")
    }
 })
}

navRelateCode();
