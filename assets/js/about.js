document.querySelector("#about").innerHTML = `



<h2 class=heading>About <span>Me</span></h2>
<div class=about-img>
    <img src="./assets/imgs/arbab-profile.png" alt="">
    <span class=circle-spin></span>
</div>
<div class=about-content>
    <h3>Arbab Zafar</h3>
    <p>🌟 Arbab Zafar: A Multifaceted Creative in the World of Design and Development

    Meet Arbab Zafar, a talented graphic designer and frontend web developer who has mastered a diverse array of tools and technologies to craft stunning digital experiences. With expertise in HTML, CSS, JavaScript, React.js, Formik, Yup, Redux, animation, Tailwind CSS, and Bootstrap, Arbab is a true virtuoso of the digital realm. <span id=dots>...</span><span id=more> 
    
    🎨 Designing Visual Wonders

    As a graphic designer, Arbab has an innate ability to transform ideas into captivating visual designs. His creative prowess shines through in his ability to create eye-catching logos, illustrations, and user interfaces that leave a lasting impression. Arbab's designs are not just visually appealing; they also prioritize user experience, ensuring that every click and interaction feels intuitive and delightful.
    
   <span class="about-heading"> 💻 Frontend Web Development Guru</span>
    
    Arbab's frontend web development skills are equally impressive. He is a master of HTML, CSS, and JavaScript, crafting responsive and pixel-perfect websites that work flawlessly on all devices. With React.js, he takes user interfaces to the next level, building dynamic and interactive web applications that engage users and keep them coming back for more.
    
     <span class="about-heading">📋 Formik and Yup Wizard</span>
    
    Arbab is also well-versed in Formik and Yup, two essential tools for form management and validation in React applications. His proficiency in these libraries ensures that user data is handled with precision, making for a seamless and error-free experience.
    
     <span class="about-heading">🔄 Redux Maestro</span>
    
    In the world of state management, Arbab relies on Redux to maintain application data with elegance and efficiency. His Redux implementations guarantee that data flows smoothly, enhancing the overall user experience.
    
     <span class="about-heading">✨ Bringing Websites to Life with Animation</span>
    
    Arbab's websites are not just static pages; they come alive with animation. Whether it's subtle micro-interactions or captivating page transitions, Arbab's animations breathe life into digital experiences, making them engaging and unforgettable.
    
     <span class="about-heading">🎨 Master of CSS Frameworks</span>
    
    With expertise in Tailwind CSS and Bootstrap, Arbab is well-equipped to streamline development processes and create visually consistent designs. These CSS frameworks enable him to expedite frontend development while maintaining a polished and professional appearance.
    
     <span class="about-heading">🌐 Embracing the MERN Stack</span>
    
    But Arbab's journey doesn't stop at frontend development. He's currently on the path to becoming a full-stack developer, diving into the MERN stack. This ambitious pursuit demonstrates his commitment to mastering all aspects of web development, from server-side scripting with Node.js and Express to database management with MongoDB.
    
    <span class="about-heading"> 📝 A Wordsmith and Optimization Enthusiast</span>
    
    Arbab Zafar isn't just a design and development virtuoso; he's also a wordsmith who knows the importance of crafting beautiful and optimized content. His keen eye for detail ensures that written content is not only informative but also engaging, making it an integral part of the overall user experience.
    
    🔥 In conclusion, Arbab Zafar is a creative powerhouse who seamlessly blends design and development to craft visually stunning, user-friendly, and technically robust digital experiences. His journey into full-stack development and commitment to optimizing every aspect of his work makes him a force to be reckoned with in the world of web development. Keep an eye on this rising star as he continues to push the boundaries of what's possible in the digital realm.
    
    
    
    
    
    
            
            
            
            
            </span></p>

    <div class="btn-box btns">
        <button  class="btn audioBtn" id="moreBtn">Read more</button>
    </div>
</div>





`;

document.querySelector("#moreBtn").addEventListener("click", () => {
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
});
