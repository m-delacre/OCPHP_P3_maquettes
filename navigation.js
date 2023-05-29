//nav mobile
const navIconBurger = document.querySelector(".nav-left i")
const navIconClose = document.querySelector(".nav-left span")
const menuNavigation = document.querySelector(".nav-right")

navIconBurger.addEventListener("click", (e)=>{openMobileNavigation()});
navIconClose.addEventListener("click", (e)=>{closeMobileNavigation()});

function openMobileNavigation(){
  navIconBurger.style.display = 'none';
  navIconClose.style.display = 'flex';
  menuNavigation.style.display= 'flex';
}

function closeMobileNavigation(){
  navIconBurger.style.display = 'flex';
  navIconClose.style.display = 'none';
  menuNavigation.style.display= 'none';
}