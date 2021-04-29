const height = window.innerHeight;
const header = document.querySelector(".header");
const headerTop = header.offsetHeight;
const titleLogoContainer = document.querySelector(".title-and-logo-container");
const labTitle = document.querySelector(".lab-title");

document.addEventListener("scroll", (e) => {
  if(window.scrollY >= headerTop){
    header.classList.add("sticky-nav");
    titleLogoContainer.style.display = "none";
    labTitle.style.display = "none";
  }else{
    header.classList.remove("sticky-nav");
    titleLogoContainer.style.display = "block";
    labTitle.style.display = "block";
  }
});