"use strict";
(function(){
    
    const hamburgerMenu = document.querySelector(".hamburger__menu");
    const navigationMenu = document.querySelector(".navigation__menu");
    
    hamburgerMenu.addEventListener("click",() =>{
        hamburgerMenu.classList.toggle("active");
        navigationMenu.classList.toggle("active");
    })

    document.querySelectorAll(".navigation__link").forEach(n=>n.addEventListener("click",()=>{
        hamburgerMenu.classList.toggle("active");
        navigationMenu.classList.toggle("active");
    }))
    
})();

