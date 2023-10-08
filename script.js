function toggleMenu () {
    const menu = document.querySelector(".menu__link");
    const icon = document.querySelector(".hamburger__icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

const swith = document.querySelector(".switch");

    swith.addEventListener("click" , e => {
        swith.classList.toggle("active");
        document.body.classList.toggle("active");
        
    })

    