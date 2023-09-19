document.querySelector('#header').innerHTML = `




<a href=./index.html class="logo audioBtn">
<img src=./assets/imgs/logo/arbab.png class=audioBtn alt="">
</a>

<nav class="navbar sm-hide">
<ul>
    <li class="list active">
        <a href=#home class=audioBtn>
            <span class=icon><img src=./assets/imgs/navicons/home-min.png alt=""></span>
            <span class=text>Home</span>
            <span class=circle></span>
        </a>
    </li>
    <li class=list>
        <a href=#about class=audioBtn>
            <span class=icon><img src=./assets/imgs/navicons/information-min.png alt=""></span>
            <span class=text>About</span>
            <span class=circle></span>
        </a>
    </li>
    <li class=list>
        <a href=#skills class=audioBtn>
            <span class=icon><img src=./assets/imgs/navicons/skill-min.png alt=""></span>
            <span class=text>Skills</span>
            <span class=circle></span>
        </a>
    </li>
    <li class=list>
        <a href=#project class=audioBtn>
            <span class=icon><img src=./assets/imgs/navicons/project-min.png alt=""></span>
            <span class=text>Project</span>
            <span class=circle></span>
        </a>
    </li>
    <li class=list>
        <a href=#contact class=audioBtn>
            <span class=icon><img src=./assets/imgs/navicons/contact.png alt=""></span>
            <span class=text>Contact</span>
            <span class=circle></span>
        </a>
    </li>
    <div class=indicator></div>
</ul>
</nav>
<div class=dropdown>
<button class="dropdown-toggle audioBtn" type=button id=toggleMenu data-toggle=dropdown
    aria-haspopup=true aria-expanded=false>
    <div class=menu-container>
        <div class=menu-icon>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
    </div>
</button>
<div class="dropdown-menu menuIn" aria-labelledby=dropdownMenuButton>
    <nav class="sm-navbar dropdown-item">
        <ul>
            <li class="list active">
                <a href=#home class=audioBtn>
                    <span class=icon><img src=./assets/imgs/navicons/home-min.png alt=""></span>
                    <span class=text>Home</span>
                    <span class=circle></span>
                </a>
            </li>
            <li class=list>
                <a href=#about class=audioBtn>
                    <span class=icon><img src=./assets/imgs/navicons/information-min.png alt=""></span>
                    <span class=text>About</span>
                    <span class=circle></span>
                </a>
            </li>
            <li class=list>
                <a href=#skills class=audioBtn>
                    <span class=icon><img src=./assets/imgs/navicons/skill-min.png alt=""></span>
                    <span class=text>Skills</span>
                    <span class=circle></span>
                </a>
            </li>
            <li class=list>
                <a href=#project class=audioBtn>
                    <span class=icon><img src=./assets/imgs/navicons/project-min.png alt=""></span>
                    <span class=text>Project</span>
                    <span class=circle></span>
                </a>
            </li>
            <li class=list>
                <a href=#contact class=audioBtn>
                    <span class=icon><img src=./assets/imgs/navicons/contact.png alt=""></span>
                    <span class=text>Contact</span>
                    <span class=circle></span>
                </a>
            </li>
            <div class=indicator></div>
        </ul>
    </nav>
</div>
</div>



`

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
  
  