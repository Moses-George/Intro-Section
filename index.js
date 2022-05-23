
//  Home Screen drop down 
const dropDown1 = document.querySelector(".drop-down-1");
const dropDown2 = document.querySelector(".drop-down-2");
const upMenu1 = document.querySelector(".up1");
const upMenu2 = document.querySelector(".up2");
const featuresMenu = document.querySelector(".features-menu");
const companyMenu = document.querySelector(".company-menu");

dropDown1.addEventListener('click', ()=> {
    dropDown1.style.display = "none";
    upMenu1.style.display = "block";
    featuresMenu.style.display = "grid";
});

dropDown2.addEventListener('click', ()=> {
    dropDown2.style.display = "none";
    upMenu2.style.display = "block";
    companyMenu.style.display = "block";
});

upMenu1.addEventListener('click', ()=> {
    upMenu1.style.display = "none";
    dropDown1.style.display = "block";
    featuresMenu.style.display = "none";
});

upMenu2.addEventListener('click', ()=> {
    upMenu2.style.display = "none";
    dropDown2.style.display = "block";
    companyMenu.style.display = "none";
});

// Side bar drop down
const upMenu3 = document.querySelector(".up3");
const dropDown3 = document.querySelector(".drop-down-3");
const slideFeaturesMenu = document.querySelector(".slide-feature-menu");
const upMenu4 = document.querySelector(".up4");
const dropDown4 = document.querySelector(".drop-down-4");
const slideCompanyMenu = document.querySelector(".slide-company-menu");

dropDown3.addEventListener('click', ()=> {
    dropDown3.style.display = "none";
    upMenu3.style.display = "inline";
    slideFeaturesMenu.style.display = "grid";
});

upMenu3.addEventListener('click', ()=> {
    upMenu3.style.display = "none";
    dropDown3.style.display = "inline";
    slideFeaturesMenu.style.display = "none";
});

dropDown4.addEventListener('click', ()=> {
    dropDown4.style.display = "none";
    upMenu4.style.display = "inline";
    slideCompanyMenu.style.display = "grid";
});

upMenu4.addEventListener('click', ()=> {
    upMenu4.style.display = "none";
    dropDown4.style.display = "inline";
    slideCompanyMenu.style.display = "none";
});

// Side Bar
const openSideBar = document.querySelector(".open-menu");
const sideBar = document.querySelector(".slide-bar");
const slideLinks = document.querySelectorAll(".slide-link");
const close = document.querySelector("#close-menu");

// open side bar
openSideBar.addEventListener('click', ()=> {
    sideBar.classList.add("slide-bar-open");
    slideLinks.forEach((link)=> link.classList.add("open-navlinks"));
    deem.classList.add("deem_page");
});

// Close Side bar
close.addEventListener('click', ()=> {
    sideBar.classList.remove("slide-bar-open");
    deem.classList.remove("deem_page");
});