const projectsList = [
    {
        img: "dpe.png",
        name: "DPE",
        desc: "Etude de modification de l’immeuble pour réduire la consommation électrique.",
        techList: ["ETL", "PostgreSQL", "Python", "Data Mining", "Dataiku", "PowerBI"],
        linkDemo: "",
        linkGit: ""
    },
    {
        img: "pouvoirachat.png",
        name: "Pouvoir d'achat",
        desc: "Ce projet vise à analyser l'impact des revenus, des dépenses et des niveaux de vie sur le pouvoir d'achat des ménages à l'aide d'un modèle de régression linéaire.",
        techList: ["R"],
        linkDemo: "",
        linkGit: ""
    },
    {
        img: "webscrapping.png",
        name: "Database Friends",
        desc: "Ce projet vise à créer et à alimenter une base de données dédiée à la série Friends, en intégrant des données variées comme les personnages, les acteurs, les épisodes et les saisons.",
        techList: ["Python", "BeautifulSoup", "Postgres", "SQL"],
        linkDemo: "",
        linkGit: ""
    },
    // {
    //     img: "project4.png",
    //     name: "my portfolio",
    //     desc: "Created my own personal website, fully responsive for all devices.",
    //     techList: ["HTML5", "CSS3", "Bootstrap 5", "SASS", "JavaScript"],
    //     linkDemo: "https://portfolio-chi-one-26.vercel.app/",
    //     linkGit: "https://github.com/nganle2911/my-portfolio"
    // },
    {
        img: "acp.png",
        name: "shopping cart",
        desc: "Étude sensorielle sur une degustation d’eau aromatisée via l'ACP et les tests statistiques",
        techList: ["R", "Rshiny", "Test statistic"],
        linkDemo: "",
        linkGit: ""
    },
    {
        img: "sondage.png",
        name: "Méthode d'échantillonage'",
        desc: "Analyse statistique des mariages maghrébins par méthodes d'échantillonnage.",
        techList: ["R"],
        linkDemo: "",
        linkGit: ""
    },
    {
        img: "astro.png",
        name: "Étude des émetteurs",
        desc: "Étude des statistiques comparées dans le temps de chacun de ces émetteurs sur une durée fixe répétée 3 fois sur 10 ans (2008, 2012, 2016)",
        techList: ["R"],
        linkDemo: "",
        linkGit: ""
    },
    {
        img: "bi.png",
        name: "Data visualisation",
        desc: "Quelques exemples de mes Dashboard",
        techList: ["PowerBI", "Tableau", "Rshiny"],
        linkDemo: "./assets/pdf/BI.pdf",
        linkGit: "https://app.powerbi.com/view?r=eyJrIjoiNDVmNGU4MGItODFiMC00YWZlLTllMjMtODA3MWE2OTY0YWFmIiwidCI6IjE2MTUwNTk5LWViYjAtNGZjZi05NGE1LTYwMTA4MjNjN2JkNSIsImMiOjh9"
    },
    {
        img: "iot.png",
        name: "Collecte automatisée des données par un IoT",
        desc: "Création de la connexion d'un Arduino à une Base de Données via une Application Mobile",
        techList: ["MySQL", "IoT", "Arduino"],
        linkDemo: "",
        linkGit: ""
    },
];

// Theme 
// TODO: Change theme color 
const changeTheme = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        document.getElementById("myIcon").innerHTML = `<i class="bi bi-sun-fill"></i>`;
        document.getElementById("myLogo").innerHTML = `<img src="./assets/img/white-logo.png" width="45%" />`;
        document.getElementById("my-signature").innerHTML = `<img src="./assets/img/name-white.svg" alt="name-home">`;
        document.getElementById("typingEff").style.color = "#F8F7F4";
    } else {
        document.getElementById("myIcon").innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
        document.getElementById("myLogo").innerHTML = `<img src="./assets/img/brown-logo.png" width="45%" />`;
        document.getElementById("my-signature").innerHTML = `<img src="./assets/img/name.png" alt="name-home">`;
        document.getElementById("typingEff").style.color = "#704f5b";
    }
};

// Navbar 
// TODO: Add active class to the current nav-link
const navLinkItems = document.querySelectorAll(".nav-link");

navLinkItems.forEach((navLinkEle) => {
    navLinkEle.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove('active');
        navLinkEle.classList.add("active");
    })
});

// Projects 
// TODO: Render project items 
const renderProjectsList = () => {
    let contentHTML = "";

    projectsList.map((item, index) => {
        let techSkills = "";

        // to render techList 
        item.techList.forEach((tech) => {
            techSkills += `
                <a class="tech__item">${tech}</a>
            `;
        });

        contentHTML += `
            <div class="projects__item" key=${index}>
                <div class="card">
                    <img src="./assets/projectcover/${item.img}" class="card-img-top" alt="project">
                    <div class="card-body">
                        <p class="text-uppercase mb-0 fs-5 fw-semibold">${item.name}</p>
                        <p class="card-text">${item.desc}</p>
                        <div class="tech">
                            <div class="tech__content" id="techContent">
                                ${techSkills}
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a href=${item.linkDemo} target="_blank" class="btn btnBrown">demo</a>
                        <a href=${item.linkGit} target="_blank" class="btn btnBrown">github</a>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("projectsContent").innerHTML = contentHTML;
}
renderProjectsList();

// TODO: Animation when scrolling for projects 
document.addEventListener("DOMContentLoaded", () => {
    let projectsContent = document.getElementById("projectsContent");
    let projectItemsList = document.querySelectorAll(".projects__item");
    
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;

        projectItemsList.forEach((item) => {
            let itemOffsetTop = item.offsetTop; 

            if (scrollPosition >= itemOffsetTop - window.innerHeight / 2) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        })
    });
});

// Footer
// TODO: Initial tooltips for contact icons
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// TODO: Click to copy the content on html element - clipboard
const copyMyContent = (name) => {
    let getEleList = document.querySelectorAll("#myEmail, #myPhone");

    getEleList.forEach((ele) => {
        if (ele.name === name) {
            navigator.clipboard.writeText(ele.value).then(() => {
                alert(`${ele.name} copied: ${ele.value}`);
            }).catch((err) => {
                console.error("Failed to copy: " + err);
            });
        }
    });
};

// TODO: Button back to top 
let myButton = document.getElementById("myBtn");
window.onscroll = () => {scrollFunc()};

// when user scrolls down 50px => show button 
let scrollFunc = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// when user clicks on button => scroll to the top of the page 
let topFunc = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}