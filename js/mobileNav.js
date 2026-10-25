const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu= document.getElementById("mobileMenu");
const hamburgerIcon = document.getElementById("iconHamburger");
const closeicon = document.getElementById("iconClose");
let isOpen = false;

hamburgerBtn.addEventListener('click',() => {
    isOpen = !isOpen;
    if(isOpen) {
        mobileMenu.classList.remove("translate-x-full");
         mobileMenu.classList.add("translate-x-0");
         hamburgerIcon.classList.add("hidden");
         closeicon.classList.remove("hidden");
    }else {
       mobileMenu.classList.add("translate-x-full");
         mobileMenu.classList.remove("translate-x-0");
         
         hamburgerIcon.classList.remove("hidden");
         closeicon.classList.add("hidden");

         document.body.style.overflow ="";
    }
}) 