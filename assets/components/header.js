 document.querySelector('#header').innerHTML = `



<a href="./index.html" class="logo audioBtn">
<img src="./assets/imgs/logo/arbab.png" class="audioBtn" alt="">
</a>

<nav class="navbar menuIn ">
<ul>
    <li class="list active">
        <a href="#home" class="audioBtn">
            <span class="icon"><img src=./assets/imgs/navicons/home-min.png alt=""></span>
            <span class="text">Home</span>
        
        </a>
    </li>
    <li class="list">
        <a href=#about class="audioBtn">
            <span class="icon"><img src=./assets/imgs/navicons/information-min.png alt=""></span>
            <span class="text">About</span>
        
        </a>
    </li>
    <li class="list">
        <a href="#skills" class="audioBtn">
            <span class="icon"><img src=./assets/imgs/navicons/skill-min.png alt=""></span>
            <span class="text">Skills</span>
        
        </a>
    </li>
    <li class="list">
        <a href="#testimonial" class="audioBtn">
            <span class="icon"><img src=./assets/imgs/navicons/skill-min.png alt=""></span>
            <span class="text">testimonial</span>
        
        </a>
    </li>

    <li class="list">
        <a href="#project" class="audioBtn">
            <span class="icon"><img src=./assets/imgs/navicons/project-min.png alt=""></span>
            <span class="text">Project</span>
        
        </a>
    </li>
    <li class="list">
        <a href="#contact" class="audioBtn">
            <span class="icon"><img src="./assets/imgs/navicons/contact.png" alt=""></span>
            <span class="text">Contact</span>
        
        </a>
    </li>
    <div class=indicator></div>
</ul>
</nav>

<input type="checkbox" id="checkbox">
<label for="checkbox" class="toggle">
    <div class="bars" id="bar1"></div>
    <div class="bars" id="bar2"></div>
    <div class="bars" id="bar3"></div>
</label>


`

document.querySelector('.toggle').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
});
