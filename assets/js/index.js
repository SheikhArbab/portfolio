const totop=document.querySelector(".to-top");window.addEventListener("scroll",()=>{window.scrollY>180?totop.classList.add("active"):totop.classList.remove("active")});const list=document.querySelectorAll(".list");function activeLink(){list.forEach(e=>e.classList.remove("active")),this.classList.add("active")}list.forEach(e=>e.addEventListener("click",activeLink));var typed=new Typed(".auto-type",{strings:["Arbab Zafar","Frontend Developer","Graphic Designer","Student","Freelancer"],typeSpeed:12,backSpeed:8,loop:!0});const sections=document.querySelectorAll("section"),navLi=document.querySelectorAll("nav ul li");window.addEventListener("scroll",()=>{let e="";sections.forEach(t=>{let s=t.offsetTop,o=t.clientHeight;scrollY>=s-o/3&&(e=t.getAttribute("id"))}),navLi.forEach(t=>{t.classList.remove("active"),t.querySelector("a").getAttribute("href").substring(1)===e&&t.classList.add("active")})});let backgroundImage=document.getElementById("home");window.addEventListener("scroll",function(){let e=-window.scrollY/2;backgroundImage.style.backgroundPositionY=e+"px"}),window.addEventListener("load",function(){let e=document.querySelector("#preloader");setTimeout(function(){e.style.height="0"},100)}),$(document).ready(()=>{$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,responsive:{0:{items:1},930:{items:2},1200:{items:3}}})});
