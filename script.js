// Adding functionality to the toggle phon menu buttons

const toggleBtns = document.querySelectorAll(".menu-toggle");
const menu = document.getElementById("menuPhone");
const menuContainer = document.getElementById("menuPhoneContainer");

toggleBtns.forEach(
  b => b.addEventListener("click", () => {
    menu.classList.toggle("active")
  }));


// Closing the menu if the user clicks outside of the menu
document.addEventListener( "click", (e) =>{
    const menuActive = menu.classList.contains("active");

    if(menuActive &&
      !menuContainer.contains(e.target) &&
      !Array.from(toggleBtns).some(btn => btn.contains(e.target))){
        menu.classList.remove("active");
    }
});

// Sticky header if the user scrolls past the height of the header
const nav = document.querySelector("header");
const navHeight = nav.clientHeight;

window.addEventListener("scroll", () => {
  if(window.scrollY > navHeight + 50){
    nav.classList.add("fixed-header");
  }
  else{
    nav.classList.remove("fixed-header");
  }
});

// Footer padding so the footer can appear from behind the content of the website
document.addEventListener("DOMContentLoaded", () => {
  const paddedBottom = document.querySelector(".padded-bottom");
  const footer = document.querySelector('footer');
  const footerHeight = footer.clientHeight;

  paddedBottom.style.paddingBottom = footerHeight + "px";
});
