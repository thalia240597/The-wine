function onPageLoad() {
    const Button = document.querySelector(".nav-button");
    const Menu = document.querySelector(".navigation");

    Button.addEventListener("click", function() {
        if( Menu.classList.contains("open") ) {
            Menu.classList.remove("open");
        }
        else {
            Menu.classList.add("open");
        }
    } )
}

window.addEventListener("load", onPageLoad )