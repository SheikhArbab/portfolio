const projects = [
    {
        id: 1,
        title: "Portfolio",
        description: "Photography that I made using HTML5 css3 and js.",
        category: "html",
        image: "./assets/imgs/projects/project 11.png",
        link: "https://sheikharbab.github.io/photography/",
        categoryClass: "category-item all html"
    },

    {
        id: 2,
        title: "Portfolio",
        description: "Portfolio that I made myself using HTML5 css3 and js.",
        category: "html",
        image: "./assets/imgs/projects/arbab-project10.png",
        link: "https://sheikharbab.github.io/red-portfolio/",
        categoryClass: "category-item all html"
    },

    {
        id: 3,
        title: "NFT's ",
        description: "I converted the img file into a functional website using HTML CSS and JS",
        category: "html",
        image: "./assets/imgs/projects/arbab project7.jpg",
        link: "https://sheikharbab.github.io/project-nft",
        categoryClass: "category-item all html"
    },

    {
        id: 4,
        title: "portfolio",
        description: "This is my portfolio that I made myself using HTML5 css3 and js.",
        category: "html",
        image: "./assets/imgs/projects/arbab project4.jpg",
        link: "https://sheikharbab.github.io/portfolio/",
        categoryClass: "category-item all html"
    },

    {
        id: 5,
        title: ">Real Estate",
        description: "I converted the img file into a functional website using HTML and CSS.",
        category: "html",
        image: "./assets/imgs/projects/arbab project1.jpg",
        link: "https://sheikharbab.github.io/project-realestate",
        categoryClass: "category-item all html"
    },

    {
        id: 6,
        title: "Portfolio",
        description: "I converted the Figma file into a functional website using HTML and CSS",
        category: "html",
        image: "./assets/imgs/projects/arbab project2.jpg",
        link: "https://sheikharbab.github.io/project-portfolio",
        categoryClass: "category-item all html"
    },

    {
        id: 7,
        title: "Microsoft home page clone ",
        description: "I cloned this website using html css js and bootstrape.",
        category: "bootstrap",
        image: "./assets/imgs/projects/arbab project3.jpg",
        link: "https://sheikharbab.github.io/project-microsoft",
        categoryClass: "category-item all bootstrap"
    },

    {
        id: 8,
        title: "Kindori ",
        description: "I cloned this website using html css js and bootstrape.",
        category: "bootstrap",
        image: "./assets/imgs/projects/arbab project5.jpg",
        link: "https://sheikharbab.github.io/project-kindori",
        categoryClass: "category-item all bootstrap"
    },

    {
        id: 9,
        title: "TransitFlow",
        description: "I converted the Figma file into a functional website using HTML CSS JS and Bootstrap.",
        category: "bootstrap",
        image: "./assets/imgs/projects/arbab project6.jpg",
        link: "https://sheikharbab.github.io/project-transitflow",
        categoryClass: "category-item all bootstrap"
    },

    {
        id: 10,
        title: "Banking ",
        description: "I converted the Figma file into a functional website using HTML CSS JS and Tailwindcss..",
        category: "tailwind",
        image: "./assets/imgs/projects/arbab-project-9.jpg",
        link: "https://sheikharbab.github.io/project-banking",
        categoryClass: "category-item all tailwind"
    },

    {
        id: 11,
        title: "ARBAB game ",
        description: "I converted the img file into a functional website using TAILWINDCSS HTML CSS and JS",
        category: "tailwind",
        image: "./assets/imgs/projects/arbab-project-8.jpg",
        link: "https://sheikharbab.github.io/project-tailgame",
        categoryClass: "category-item all tailwind"
    },


]









const categories = [...new Set(projects.map((project) => project.category)), "all"].sort();

document.querySelector('#cateBtn').innerHTML = categories.map((category) => (
    `
        <button class="sparkle-button filter-button audioBtn ${category == 'all' ? 'active' : ''}" data-filter=${category}>
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
        <span class=text>${category}</span>
    </button>
        `
)).join('');

document.querySelector('.work-list').innerHTML = projects.map((project) => {
    return (`
            <div class="work ${project.categoryClass}" key=${project.id}>
                <img src="${project.image}" alt="${project.title}">
                <div class="layer">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href=${project.link} target="_blank"></a>
                </div>
            </div>
        `)
}).join('');




const buttonGroup = document.querySelector('.button-group');
const filterButtons = buttonGroup.querySelectorAll('.filter-button');
const categoryItems = document.querySelectorAll('.category-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        let btn = document.querySelector('.sparkle-button');
        const filterValue = button.getAttribute('data-filter');


        categoryItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

