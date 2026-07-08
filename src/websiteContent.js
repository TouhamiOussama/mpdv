let navLinks = [
    { linkName: "Home", linkPath: "#home" },
    { linkName: "About Me", linkPath: "#aboutMe" },
    { linkName: "More", linkPath: "#moreAboutMe" },
    { linkName: "Skills", linkPath: "#skillsSection" },
    { linkName: "Projects", linkPath: "#projects" },
    { linkName: "Contact", linkPath: "#contact" },
]

export let defaultButtonStyle = "p-4 py-2 rounded-md font-[600] cursor-pointer hover:opacity-80 text-center";
export let sectionGlobalStyles = {
    titleStyle: "text-[var(--lightMode-text-color)] text-[2rem] text-center "
}

export let SKILLS_INFO = [
    { id: 1, skillName: "HTML", imgPath: "/icons/html.png", category: "front" },
    { id: 2, skillName: "CSS", imgPath: "/icons/css.png", category: "front" },
    { id: 3, skillName: "Tailwind CSS", imgPath: "/icons/tailwind.png", category: "front" },
    { id: 4, skillName: "Bootstrap", imgPath: "/icons/bootstrap.png", category: "front" },
    { id: 5, skillName: "JavaScript", imgPath: "/icons/js.png", category: "front" },
    { id: 6, skillName: "React JS", imgPath: "/icons/react.png", category: "front" },
    { id: 7, skillName: "Redux", imgPath: "/icons/redux.png", category: "front" },
    { id: 8, skillName: "PHP", imgPath: "/icons/php.png", category: "back" },
    { id: 9, skillName: "MySql", imgPath: "/icons/mysql.png", category: "back" },
    { id: 10, skillName: "Git", imgPath: "/icons/git.png", category: "tools" },
    { id: 11, skillName: "GitHub", imgPath: "/icons/github.png", category: "tools" },
    { id: 12, skillName: "Office", imgPath: "/icons/office.png", category: "tools" },
    { id: 12, skillName: "NodeJs", imgPath: "/icons/nodejs.png", category: "back" },
];

/* export let socialMedia = [
    {
        id: 1,
        socialName: "Instagram",
        socialLink: "",
        socialIcon: "//icons/instagram.png"
    },
    {
        id: 2,
        socialName: "Whatsapp",
        socialLink: "",
        socialIcon: '//icons/whatsapp.png'
    },
    {
        id: 3,
        socialName: "github",
        socialLink: "",
        socialIcon: '//icons/gitIcon.png'
    },
    {
        id: 4,
        socialName: "linkedin",
        socialLink: "",
        socialIcon: '//icons/linkedIn.png'
    },

]
 */

export let SKILLS = [
    {
        skillGroupId: 0,
        groupName: "Front End",
        skills: [
            { id: 1, name: "html", bgColor: "#f16223" },
            { id: 2, name: "css", bgColor: "#2965f1" },
            { id: 3, name: "js", bgColor: "#F0DB4F " },
            { id: 4, name: "bootstrap", bgColor: "#080135" },
            { id: 5, name: "tailwind", bgColor: "#06b6d4" },
            { id: 6, name: "react js", bgColor: "#61DBFB" },
            { id: 7, name: "redux", bgColor: "#764abc" },
            { id: 8, name: "python", bgColor: "#24c700" },
        ]
    },
    {
        skillGroupId: 1,
        groupName: "Back End",
        skills: [
            { id: 1, name: "php", bgColor: "#787CB5" },
            { id: 2, name: "my sql", bgColor: "#78AA99" },
            { id: 3, name: "js", bgColor: "#F0DB4F " },
        ]
    },
]

export let projectCards = [
    {
        id: 6,
        name: "Ecommerce website for optician",
        description: "I built a full-stack e-commerce platform for an optician, developed entirely with Laravel (PHP), MySQL, JavaScript, CSS, and Tailwind CSS. The application features a dedicated admin dashboard for managing products, orders, product variants, order tracking, customers, and app analytics. On the customer side, it offers a clean black-and-white UI designed for comfortable product browsing, along with account creation, order tracking, personal information management, and other features found in modern e-commerce applications. The platform is fully responsive and optimized for all device types. ", url: "https://optix-store.vercel.app/",
        date: "Nov 25, 2024",
        thumbnails: [
            "/images/optix1.png",
            "/images/optix2.png",
            "/images/optix3.png",
            "/images/optix4.png",
            "/images/optix5.png",
            "/images/optix6.png",
            "/images/optix7.png",
            "/images/optix8.png",
        ],
        projectTechs: [
            {
                id: 1,
                img: "/icons/html.png"
            },
            {
                id: 2,
                img: "/icons/css.png"
            },
            {
                id: 3,
                img: "/icons/js.png"
            },
            {
                id: 4,
                img: "/icons/tailwind.png"
            },
            {
                id: 5,
                img: "/icons/laravel.png"
            },
            {
                id: 6,
                img: "/icons/mysql.png"
            },
        ]
    },
    {
        id: 1,
        name: "E-Commerce website",
        description: "A full-stack furniture e-commerce website built with React, Tailwind css, Node.js, Express.js, and MySQL, featuring dynamic product management and a responsive user interface.", url: "",
        date: "Octobre 15, 2025",
        thumbnails: [
            "/images/fur1.png",
            "/images/fur2.png",
            "/images/fur3.png",
            "/images/fur4.png",
            "/images/fur5.png",
        ],
        projectTechs: [
            {
                id: 1,
                img: "/icons/react.png"
            },
            {
                id: 2,
                img: "/icons/tailwind.png"
            },
            {
                id: 3,
                img: "/icons/nodejs.png"
            },
            {
                id: 4,
                img: "/icons/mysql.png"
            },
        ]
    },
    {
        id: 1,
        name: "Notes App",
        description: " MyNottie is a basic CRUD fullstack app for notes, built with help of React Js and Supabase for the backend, with a simple aesthetic design, fully responsive.", url: "https://oussamath.github.io/notesApp/",
        date: "Octobre 15, 2025",
        thumbnails: [
            "/images/notesApp1.png",
            "/images/notesApp2.png",
            "/images/notesApp3.png",
            "/images/notesApp4.png",
        ],
        projectTechs: [
            {
                id: 1,
                img: "/icons/react.png"
            },
            {
                id: 2,
                img: "/icons/tailwind.png"
            },
        ]
    },
    {
        id: 2,
        name: "Tasks App",
        description: "This Tasks app is built with React Js, with a modern design, and it's easy to use with an impressive user experience. ", url: "https://oussamath.github.io/tasksApp/",
        date: "Octobre 15, 2025",
        thumbnails: ["/images/tasksAppImg.png"],
        projectTechs: [
            {
                id: 1,
                img: "/icons/react.png"
            },
            {
                id: 2,
                img: "/icons/tailwind.png"
            },
        ]
    },
    {
        id: 3,
        name: "Perfum Website",
        description: "This is a static website with a fully responsive and a modern design, built with React Js and Tailwind CSS", url: "https://oussamath.github.io/perfum/",
        date: "Octobre 15, 2025",
        thumbnails: [
            "/images/perfum1.png",
            "/images/perfum2.png",
            "/images/perfum3.png",
            "/images/perfum4.png",
            "/images/perfum5.png",
        ],
        projectTechs: [
            {
                id: 1,
                img: "/icons/react.png"
            },
            {
                id: 2,
                img: "/icons/tailwind.png"
            },
        ]
    },
    {
        id: 4,
        name: "Money Tracker App",
        description: "It's an app that allows you to track your incomes and expenses in the same time, It was built with React JS, Tailwind and Redux.", url: "https://oussamath.github.io/moneyTrackDashboard/ ",
        date: "Octobre 15, 2025",
        thumbnails: [
            "/images/moneyTrackerAppImg.png"
        ],
        projectTechs: [
            {
                id: 1,
                img: "/icons/react.png"
            },
            {
                id: 2,
                img: "/icons/tailwind.png"
            },
            {
                id: 3,
                img: "/icons/redux.png"
            },
        ]
    },
    {
        id: 5,
        name: "Food Menu Website",
        description: "It's a static website that shows the menu of a restaurant, it was build with HTML,CSS and Js", url: "https://oussamath.github.io/palermos/",
        date: "Nov 25, 2024",
        thumbnails: [
            "/images/palermos1.png",
            "/images/palermos2.png",
            "/images/palermos3.png",
            "/images/palermos4.png",
            "/images/palermos5.png",
            "/images/palermos6.png",
            "/images/palermos7.png",
        ],
        projectTechs: [
            {
                id: 1,
                img: "/icons/html.png"
            },
            {
                id: 2,
                img: "/icons/css.png"
            },
            {
                id: 3,
                img: "/icons/js.png"
            },
        ]
    },

]

export let socialMedia = [
    { id: 1, data: { followers: 31, following: 69, posts: 0, accountName: "ussa.m4", link: "https://www.instagram.com/ussa.m4?igsh=Z3cwZzBxa2hla2cx" } },
    {
        id: 2, data: {
            accountName: "OussamaTh", link: "https://github.com/OussamaTh", dummyRepos: [
                { id: 1, repoName: "Project-1" },
                { id: 2, repoName: "Project-2" },
                { id: 3, repoName: "Project-3" },

            ]
        }
    },
    { id: 3, data: { acountName: "Oussama Touhami", link: "" } }
]
export let socialTabs = [
    { id: 1, name: "emailBox", icon: "/icons/message.png" },
    { id: 2, name: "Github", icon: "/icons/gitIcon.png" },
    { id: 3, name: "Instagram", icon: "/icons/instagram.png" },
]


export { navLinks };