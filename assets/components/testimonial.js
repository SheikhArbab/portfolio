import testimonial from './../projectsData/testimonial.js';



document.querySelector('#testimonial').innerHTML = `

<h2 class=heading>
My <span>Testimonial</span>
</h2>

<div class="owl-carousel owl-theme">

${
    testimonial.map(t=>(

`        <div class="item slide">
    <div class="slider-box">
        <figure> <img src=${t.image} alt=""></figure>
        <h1>${t.user}</h1><p>${t.description}</p>
    </div>
</div>`

    )).join('')
}


</div>


`