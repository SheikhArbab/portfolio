const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 180) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
});

const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) =>
  item.addEventListener('click', activeLink));

var typed = new Typed(".auto-type", {
  strings: ["Arbab Zafar", "Frontend Developer", "Graphic Designer", "Student", "Freelancer"],
  typeSpeed: 12,
  backSpeed: 8,
  loop: true
});

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.querySelector("a").getAttribute("href").substring(1) === current) {
        li.classList.add("active");
      }
    });
  });

let backgroundImage = document.getElementById('home');

window.addEventListener('scroll', function () {
  let yPos = -window.pageYOffset / 2;
  backgroundImage.style.backgroundPositionY = yPos + 'px';
});

window.addEventListener('load', function () {
  const preloader = document.querySelector('#preloader');
  setTimeout(function () {
    preloader.style.height = '0';
  }, 100);
});



var audioButtons = Array.from(document.getElementsByClassName("audioBtn"));
audioButtons.forEach(function (button) {
  button.addEventListener("click", playClickSound);
});

function playClickSound() {
  var clickSound = document.getElementById("clickSound");
  clickSound.currentTime = 0;
  clickSound.play();
}




        $(document).ready(() =>{
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:2
                    }
                }
            });
        });







