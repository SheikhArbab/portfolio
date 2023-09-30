document.querySelector('#contact').innerHTML = `


<form action="https://formspree.io/f/xbjenndd" id="contact-form" method="post">
<h2 class=heading>Contact<span> Us</span></h2>
<input type="name" id="name" name="name" placeholder="Your Name" required minlength=3
    autocomplete=off autocapitalize=on>
<input type="email" id="email" name="email" placeholder="Your Email" required autocomplete=off>
<input id="phone" name="number" placeholder="Your Number" required minlength=8 autocomplete=off>
<textarea id="message" name="message" rows=4 placeholder="How can we help you?"
    minlength=5></textarea>
<button class="sbtn audioBtn" type=submit>
    <strong>SEND</strong>
    <div id=container-stars>
        <div id=stars></div>
    </div>
    <div id=glow>
        <div class=circle></div>
        <div class=circle></div>
    </div>
</button>
</form>


<div class="solar-wrapper">
<div class="solar-syst">
    <div class="sun"></div>
    <div class="mercury"></div>
    <div class="venus"></div>
    <div class="earth"></div>
    <div class="mars"></div>
    <div class="jupiter"></div>
    <div class="saturn"></div>
    <div class="uranus"></div>
    <div class="neptune"></div>
    <div class="pluto"></div>
    <div class="asteroids-belt"></div>
</div>
</div><!--solar-wrapper-->



`