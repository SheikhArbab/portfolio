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
  strings: ["Arbab Zafar", "Web Developer", "Graphic Designer", "Intermediate Student", "Freelancer"],
  typeSpeed: 40,
  backSpeed: 4,
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
    preloader.style.display = 'none';
  }, 200);
});

function showDropdown() {
  let dropdownContent = document.querySelector("#dropdown-content");
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

document.querySelector('.menu-container').addEventListener('click', function () {
  this.classList.toggle('clicked');
});
dropdownToggle.addEventListener('click', function () {
  dropdownMenu.classList.toggle('show');
});





window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".header");
  if (window.pageYOffset > 4) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
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

const progText = document.querySelectorAll(".progText");
const progress = document.querySelectorAll(".progress");
const progContainer = document.querySelectorAll(".pg-container");
let bol = false;

window.addEventListener("scroll", function () {
  for (let i = 0; i < progContainer.length; i++) {
    if (window.pageYOffset > progContainer[i].offsetTop - 600 && bol === false) {
      for (let j = 0; j < progText.length; j++) {
        progText[j].innerText = 0;
        let count = 0;
        progress[j].style.bottom = "100%";
        progress[j].style.bottom = progText[j].dataset.count - 100 + "%";

        function updateCount() {
          const target = parseInt(progText[j].dataset.count);
          if (count < target) {
            count++;
            progText[j].innerText = count + "%";
            setTimeout(updateCount, 1); // Decrease the delay to speed up the animation

          } else {
            progText[j].innerText = target + "%";
          }
        }

        updateCount();

        bol = true;
      }
    }
  }
});



const buttonGroup = document.querySelector('.button-group');
const filterButtons = buttonGroup.querySelectorAll('.filter-button');
const categoryItems = document.querySelectorAll('.category-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    let btn = document.querySelector('.sparkle-button');
    const filterValue = button.getAttribute('data-filter');

    // Show/hide items based on selected filter
    categoryItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Toggle active class for selected filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});






AOS.init({
  once: true,

});












/**
 * Custom cursor
 */
const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  if (!isMobileDevice()) {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
  }
};

const isMobileDevice = function () {
  return /Mobi|Android/i.test(navigator.userAgent);
};

window.addEventListener("mousemove", cursorMove);

const addEventOnElements = function (elements, event, callback) {
  elements.forEach(function (element) {
    element.addEventListener(event, callback);
  });
};

addEventOnElements(hoverElements, "mouseover", function () {
  if (!isMobileDevice()) {
    cursor.classList.add("hovered");
  }
});

addEventOnElements(hoverElements, "mouseout", function () {
  if (!isMobileDevice()) {
    cursor.classList.remove("hovered");
  }
});


function myFunction() {
  let dots = document.querySelector("#dots");
  let moreText = document.querySelector("#more");
  let btnText = document.querySelector("#moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

