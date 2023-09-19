const projects = [
    {
    id: 1,
    title: "Portfolio",
    description: "Photography that I made using HTML5 css3 and js.",
    category: "html",
    image: "./assets/imgs/projects/project 11.png",
    link : "https://sheikharbab.github.io/photography/"
    },
    
    {
    id: 2,
    title: "Portfolio",
    description: "Portfolio that I made myself using HTML5 css3 and js.",
    category: "html",
    image: "./assets/imgs/projects/arbab-project10.png",
    link : "https://sheikharbab.github.io/red-portfolio/"
    },
    
    {
    id: 3,
    title: "NFT's ",
    description: "I converted the img file into a functional website using HTML CSS and JS",
    category: "html",
    image: "./assets/imgs/projects/arbab project7.jpg",
    link : "https://sheikharbab.github.io/project-nft"
    },
    
    {
    id: 4,
    title: "portfolio",
    description: "This is my portfolio that I made myself using HTML5 css3 and js.",
    category: "html",
    image: "./assets/imgs/projects/arbab project4.jpg",
    link : "https://sheikharbab.github.io/portfolio/"
    },
    
    {
    id: 5,
    title: ">Real Estate",
    description: "I converted the img file into a functional website using HTML and CSS.",
    category: "html",
    image: "./assets/imgs/projects/arbab project1.jpg",
    link : "https://sheikharbab.github.io/project-realestate"
    },
    
    {
    id: 6,
    title: "Portfolio",
    description: "I converted the Figma file into a functional website using HTML and CSS",
    category: "html",
    image: "./assets/imgs/projects/arbab project2.jpg",
    link : "https://sheikharbab.github.io/project-portfolio"
    },
    
    {
    id: 7,
    title: "Microsoft home page clone ",
    description: "I cloned this website using html css js and bootstrape.",
    category: "bootstrap",
    image: "./assets/imgs/projects/arbab project3.jpg",
    link : "https://sheikharbab.github.io/project-microsoft"
    },
    
    {
    id: 8,
    title: "Kindori ",
    description: "I cloned this website using html css js and bootstrape.",
    category: "bootstrap",
    image: "./assets/imgs/projects/arbab project5.jpg",
    link : "https://sheikharbab.github.io/project-kindori"
    },
    
    {
    id: 9,
    title: "TransitFlow",
    description: "I converted the Figma file into a functional website using HTML CSS JS and Bootstrap.",
    category: "bootstrap",
    image: "./assets/imgs/projects/arbab project6.jpg",
    link : "https://sheikharbab.github.io/project-transitflow"
    },
    
    {
    id: 10,
    title: "Banking ",
    description: "I converted the Figma file into a functional website using HTML CSS JS and Tailwindcss..",
    category: "tailwind",
    image: "./assets/imgs/projects/arbab-project-9.jpg",
    link : "https://sheikharbab.github.io/project-banking"
    },
    
    {
    id: 11,
    title: "ARBAB game ",
    description: "I converted the img file into a functional website using TAILWINDCSS HTML CSS and JS",
    category: "tailwind",
    image: "./assets/imgs/projects/arbab-project-8.jpg",
    link : "https://sheikharbab.github.io/project-tailgame"
    },
    
  
    ]




    document.querySelector('.work-list').innerHTML = projects.map((project) => {
        return( `
            <div class="work" key=${project.id}>
                <img src="${project.image}" alt="${project.title}">
                <div class="layer">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href=${project.link} target="_blank"></a>
                </div>
            </div>
        `)
    }).join('');
    