import { testimonial, projects } from "./../projectsData/db.js";
const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    window.scrollY > 180 ? totop.classList.add("active") : totop.classList.remove("active");
});
const list = document.querySelectorAll(".list");
function activeLink() {
    list.forEach((e) => e.classList.remove("active")), this.classList.add("active");
}
list.forEach((e) => e.addEventListener("click", activeLink));
var typed = new Typed(".auto-type", { strings: ["Arbab Zafar", "MERN Developer", "Graphic Designer", "Student", "Freelancer"], typeSpeed: 12, backSpeed: 8, loop: !0 });
const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
    let e = "";
    sections.forEach((t) => {
        let s = t.offsetTop,
            o = t.clientHeight;
        scrollY >= s - o / 3 && (e = t.getAttribute("id"));
    }),
        navLi.forEach((t) => {
            t.classList.remove("active"), t.querySelector("a").getAttribute("href").substring(1) === e && t.classList.add("active");
        });
});
let backgroundImage = document.getElementById("home");
window.addEventListener("scroll", function () {
    let e = -window.scrollY / 2;
    backgroundImage.style.backgroundPositionY = e + "px";
}),
    window.addEventListener("load", function () {
        let e = document.querySelector("#preloader");
        let _ = document.querySelector("body");
        e.style.height = "0";
        _.style.overflow = 'auto'
    }),
    $(document).ready(() => {
        $(".owl-carousel").owlCarousel({ loop: !0, margin: 10, autoplay: true, autoplayTimeout: 2000, nav: !0, responsive: { 0: { items: 1 }, 930: { items: 2 }, 1200: { items: 3 } } });
    });


document.querySelector(".toggle").addEventListener("click", () => {
    let _ = document.querySelector(".navbar");
    _.style.display = "block" === _.style.display ? "none" : "block";
}),
    document.querySelector("#moreBtn").addEventListener("click", () => {
        let _ = document.querySelector("#dots"),
            $ = document.querySelector("#more"),
            t = document.querySelector("#moreBtn");
        "none" === _.style.display ? ((_.style.display = "inline"), (t.innerHTML = "Read more"), ($.style.display = "none")) : ((_.style.display = "none"), (t.innerHTML = "Read less"), ($.style.display = "inline"));
    });
let progText = document.querySelectorAll(".progText"),
    progress = document.querySelectorAll(".progress"),
    progContainer = document.querySelectorAll(".pg-container"),
    bol = !1;
function animateCounter(_, $, t) {
    let i = ($ / t) * 10,
        a = 0;
    !(function o() {
        a += 10;
        let n = Math.min(i * a, $);
        (_.innerText = Math.floor(n) + "%"), a < t && setTimeout(o, 10);
    })();
}
window.addEventListener("scroll", function () {
    let _ = document.querySelector("#skills"),
        $ = _.getBoundingClientRect();
    if ($.top < window.innerHeight && !bol)
        for (let t = 0; t < progText.length; t++) {
            (progText[t].innerText = 0), (progress[t].style.bottom = "100%"), (progress[t].style.bottom = progText[t].dataset.count - 100 + "%");
            let i = parseInt(progText[t].dataset.count);
            animateCounter(progText[t], i, 9e3), (bol = !0);
        }
});



document.querySelector("#testimonial").innerHTML = `

<h2 class=heading>
My <span>Testimonial</span>
</h2>

<div class="owl-carousel owl-theme">

${testimonial
        .map(
            (_) => `        <div class="item slide">
    <div class="slider-box">
    <figure> <img src=${_.image} alt="project" loading="lazy" ></figure>
    <h1>${_.user}</h1><p>${_.description}</p>
    <i class="fa-solid fa-quote-left"></i>
    <i class="fa-solid fa-quote-right"></i>
    </div>
</div>`
        )
        .join("")}


</div>`;

function generateSlug(text) {
    return text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove non-word characters
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}


let categories = [...new Set(projects.map((_) => _.category)), "all"].sort();
(document.querySelector("#cateBtn").innerHTML = categories
    .map(
        (_) => `
        <a href="#category-${generateSlug(_)}" class="sparkle-button filter-button audioBtn ${"all" == _ ? "active" : ""}" data-filter=${_}>
        <span class=spark></span>
        <span class=backdrop></span>
        <svg class=sparkle viewBox="0 0 24 24" fill=none xmlns=http://www.w3.org/2000/svg>
            <path
                d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path>
            <path
                d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path>
            <path
                d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
                fill=black stroke=black stroke-linecap=round stroke-linejoin=round></path>
        </svg>
        <span class=text>${_}</span>
    </a>
        `
    )
    .join(""))


const projectData = () => { 
    document.querySelector(".work-list").innerHTML = projects
        .map(
            (_) => `
                        <div class="work menuIn  ${_.categoryClass}">
                            <img src="${_.image}" alt="${_.title}" loading="lazy" >
                            <div class="layer">
                                <h3>${_.title}</h3>
                                <p>${_.description}</p>
                                <a href=${_.link} target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                    `
        )
        .join("");

    let buttonGroup = document.querySelector(".button-group"),
        filterButtons = buttonGroup.querySelectorAll(".filter-button"),
        categoryItems = document.querySelectorAll(".category-item");

    filterButtons.forEach((_) => {
        _.addEventListener("click", () => {
            let $ = _.getAttribute("data-filter");
            categoryItems.forEach((_) => {
                "all" === $ || _.classList.contains($) ? (_.style.display = "block") : (_.style.display = "none");
            });
            filterButtons.forEach((_) => _.classList.remove("active"));
            _.classList.add("active");
        });
    });
}


window.addEventListener('load', projectData)

// form  
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;

        if (!validateName(name) || !validateEmail(email) || !validatePhone(phone) || !validateMessage(message)) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Real-time validation for the email field
    var emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function () {
        var email = emailInput.value;
        var emailError = document.getElementById('email-error');

        if (!validateEmail(email)) {
            emailError.textContent = 'Invalid email address';
        } else {
            emailError.textContent = '';
        }
    });

    // Other validation functions remain the same

    function validateName(name) {
        var nameError = document.getElementById('name-error');
        if (name.length < 3) {
            nameError.textContent = 'Name must be at least 3 characters';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validatePhone(phone) {
        var phoneError = document.getElementById('phone-error');
        if (phone.length < 8 || isNaN(phone)) {
            phoneError.textContent = 'Invalid phone number';
            return false;
        } else {
            phoneError.textContent = '';
            return true;
        }
    }

    function validateMessage(message) {
        var messageError = document.getElementById('message-error');
        if (message.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            return false;
        } else {
            messageError.textContent = '';
            return true;
        }
    }
});