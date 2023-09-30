document.querySelector('#skills').innerHTML = `

<h2 class=heading>
My <span>Skills</span>
</h2>
<div class=pg-container>
<div class=progress-card>
    <div class=progress-circle>
        <div class=progress-content>
            <h5 class=progText data-count=90>0</h5>
        </div>
        <div class=progress>
        </div>
    </div>
    <h5>HTML/CSS</h5>
</div>
<div class=progress-card>
    <div class=progress-circle>
        <div class=progress-content>
            <h5 class=progText data-count=30>0</h5>
        </div>
        <div class=progress>
        </div>
    </div>
    <h5>JAVA SCRIPT</h5>
</div>
<div class=progress-card>
    <div class=progress-circle>
        <div class=progress-content>
            <h5 class=progText data-count=85>0</h5>
        </div>
        <div class=progress>
        </div>
    </div>
    <h5>BOOTSTRAP</h5>
</div>
<div class=progress-card>
    <div class=progress-circle>
        <div class=progress-content>
            <h5 class=progText data-count=70>0</h5>
        </div>
        <div class=progress>
        </div>
    </div>
    <h5>TAILWINDCSS</h5>
</div>
</div>`




const progText = document.querySelectorAll(".progText");
const progress = document.querySelectorAll(".progress");
const progContainer = document.querySelectorAll(".pg-container");
let bol = false;

function animateCounter(element, target, duration) {
  const start = 0;
  const increment = (target / duration) * 10;
  let currentTime = 0;

  function updateCount() {
    currentTime += 10;
    const progress = Math.min(increment * currentTime, target);
    element.innerText = Math.floor(progress) + "%";

    if (currentTime < duration) {
      setTimeout(updateCount, 10); // Delay of 10 milliseconds
    }
  }

  updateCount();
}

// Updated event listener to check if #skills section is in view
window.addEventListener("scroll", function () {
  const skillsSection = document.querySelector("#skills");
  const skillsSectionRect = skillsSection.getBoundingClientRect();

  if (skillsSectionRect.top < window.innerHeight && !bol) {
    for (let j = 0; j < progText.length; j++) {
      progText[j].innerText = 0;
      progress[j].style.bottom = "100%";
      progress[j].style.bottom = progText[j].dataset.count - 100 + "%";

      const target = parseInt(progText[j].dataset.count);
      animateCounter(progText[j], target, 9000); // 3000 milliseconds (3 seconds) duration

      bol = true;
    }
  }
});





