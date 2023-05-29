// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

let mesBtn = document.getElementsByClassName("reservation");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
for(let bouton of mesBtn){
    bouton.onclick = function() {
        modal.style.display = "flex";
    }
}

// When the user clicks on <span> (x), close the modal
document.getElementById("closeReservation").onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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