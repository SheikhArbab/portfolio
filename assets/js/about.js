document.querySelector('#about').innerHTML = `

<h2 class=heading>About <span>Me</span></h2>
<div class=about-img>
    <img src="./assets/imgs/arbab-profile.png" alt="">
    <span class=circle-spin></span>
</div>
<div class=about-content>
    <h3>Arbab Zafar</h3>
    <p> Arbab Zafar, a talented and passionate front-end web developer and graphics designer with a
        flair for creating captivating online experiences. With a keen eye for aesthetics and an
        unwavering commitment to excellence, Arbab excels in crafting visually stunning websites that
        leave a lasting impression. <span id=dots>...</span><span id=more> Arbab's expertise lies in
            seamlessly blending design elements with the latest front-end technologies, including HTML,
            CSS, and JavaScript, to create websites that not only look stunning but also provide an
            exceptional user experience. With a deep understanding of user interface design principles,
            Arbab ensures that every website is intuitive, user-friendly, and optimized for maximum
            engagement. But Arbab's talents extend beyond web development. As a skilled graphics
            designer, Arbab brings life to ideas through captivating visual elements. From creating
            stunning logos to designing eye-catching banners and illustrations, Arbab's creativity knows
            no bounds. Beyond technical skills, Arbab possesses excellent communication and
            collaboration abilities, enabling seamless interactions with clients and team members. With
            a strong commitment to understanding client needs and translating them into visually
            striking designs, Arbab consistently exceeds expectations and delivers results that inspire
            and impress. Arbab's educational background in intermediate studies provides a solid
            foundation for continued growth and learning in the dynamic field of web development. With a
            hunger for knowledge and a dedication to staying updated with the latest industry trends,
            Arbab ensures that every project benefits from cutting-edge techniques and innovative
            solutions. Whether it's crafting a responsive website, creating captivating graphics, or
            seamlessly merging design with functionality, Arbab Zafar is the creative force that
            transforms ideas into digital masterpieces. With a passion for delivering excellence and a
            talent for captivating audiences, Arbab is the go-to professional for all your front-end web
            development and graphic design needs.</span></p>
    <div class="btn-box btns">
        <button  class="btn audioBtn" id="moreBtn">Read more</button>
    </div>
</div>


`


document.querySelector('#moreBtn').addEventListener('click', ()=> {
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
  
  
  )
  