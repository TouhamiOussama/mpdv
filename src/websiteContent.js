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
    { id: 1, skillName: "HTML", imgPath: "/mpdv/icons/html.png", category: "front" },
    { id: 2, skillName: "CSS", imgPath: "/mpdv/icons/css.png", category: "front" },
    { id: 3, skillName: "Tailwind CSS", imgPath: "/mpdv/icons/tailwind.png", category: "front" },
    { id: 4, skillName: "Bootstrap", imgPath: "/mpdv/icons/bootstrap.png", category: "front" },
    { id: 5, skillName: "JavaScript", imgPath: "/mpdv/icons/js.png", category: "front" },
    { id: 6, skillName: "React JS", imgPath: "/mpdv/icons/react.png", category: "front" },
    { id: 7, skillName: "Redux", imgPath: "/mpdv/icons/redux.png", category: "front" },
    { id: 8, skillName: "PHP", imgPath: "/mpdv/icons/php.png", category: "back" },
    { id: 9, skillName: "MySql", imgPath: "/mpdv/icons/mysql.png", category: "back" },
    { id: 10, skillName: "Git", imgPath: "/mpdv/icons/git.png", category: "tools" },
    { id: 11, skillName: "GitHub", imgPath: "/mpdv/icons/github.png", category: "tools" },
    { id: 12, skillName: "Office", imgPath: "/mpdv/icons/office.png", category: "tools" },
    { id: 12, skillName: "NodeJs", imgPath: "/mpdv/icons/nodejs.png", category: "back" },
];

/* export let socialMedia = [
    {
        id: 1,
        socialName: "Instagram",
        socialLink: "",
        socialIcon: "/mpdv/icons/instagram.png"
    },
    {
        id: 2,
        socialName: "Whatsapp",
        socialLink: "",
        socialIcon: '/mpdv/icons/whatsapp.png'
    },
    {
        id: 3,
        socialName: "github",
        socialLink: "",
        socialIcon: '/mpdv/icons/gitIcon.png'
    },
    {
        id: 4,
        socialName: "linkedin",
        socialLink: "",
        socialIcon: '/mpdv/icons/linkedIn.png'
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
        id: 1,
        name: "Notes App",
        description: " MyNottie is a basic CRUD fullstack app for notes, built with help of React Js and Supabase for the backend, with a simple aesthetic design, fully responsive.", url: "https://oussamath.github.io/notesApp/",
        date: "Octobre 15, 2025",
        thumbnail: "/mpdv/images/notesAppImg.png",
        projectTechs: [
            {
                id: 1,
                img: "/mpdv/icons/react.png"
            },
            {
                id: 2,
                img: "/mpdv/icons/tailwind.png"
            },
        ]
    },
    {
        id: 2,
        name: "Tasks App",
        description: "This Tasks app is built with React Js, with a modern design, and it's easy to use with an impressive user experience. ", url: "https://oussamath.github.io/tasksApp/",
        date: "Octobre 15, 2025",
        thumbnail: "/mpdv/images/tasksAppImg.png",
        projectTechs: [
            {
                id: 1,
                img: "/mpdv/icons/react.png"
            },
            {
                id: 2,
                img: "/mpdv/icons/tailwind.png"
            },
        ]
    },
    {
        id: 3,
        name: "Perfum Website",
        description: "This is a static website with a fully responsive and a modern design, built with React Js and Tailwind CSS", url: "https://oussamath.github.io/perfum/",
        date: "Octobre 15, 2025",
        thumbnail: "/mpdv/images/perfumWebsiteImg.png",
        projectTechs: [
            {
                id: 1,
                img: "/mpdv/icons/react.png"
            },
            {
                id: 2,
                img: "/mpdv/icons/tailwind.png"
            },
        ]
    },
    {
        id: 4,
        name: "Money Tracker App",
        description: "It's an app that allows you to track your incomes and expenses in the same time, It was built with React JS, Tailwind and Redux.", url: "https://oussamath.github.io/moneyTrackDashboard/ ",
        date: "Octobre 15, 2025",
        thumbnail: "/mpdv/images/moneyTrackerAppImg.png",
        projectTechs: [
            {
                id: 1,
                img: "/mpdv/icons/react.png"
            },
            {
                id: 2,
                img: "/mpdv/icons/tailwind.png"
            },
            {
                id: 3,
                img: "/mpdv/icons/redux.png"
            },
        ]
    },
    {
        id: 5,
        name: "Food Menu Website",
        description: "It's an app that allows you to track your incomes and expenses in the same time, It was built with React JS, Tailwind and Redux.", url: "https://oussamath.github.io/palermos/",
        date: "Nov 25, 2024",
        thumbnail: "/mpdv/images/palermosImg.png",
        projectTechs: [
            {
                id: 1,
                img: "/mpdv/icons/html.png"
            },
            {
                id: 2,
                img: "/mpdv/icons/css.png"
            },
            {
                id: 3,
                img: "/mpdv/icons/js.png"
            },
        ]
    },
]

export let socialMedia = [
    { id: 1, data: { followers: 31, following: 69, posts: 0, accountName: "ussa.m4", link: "https://www.instagram.com/ussa.m4?igsh=Z3cwZzBxa2hla2cx" } },
    {
        id: 2, data: {
            accountName: "Oussama", link: "https://github.com/OussamaTh", dummyRepos: [
                { id: 1, repoName: "Project-1" },
                { id: 2, repoName: "Project-2" },
                { id: 3, repoName: "Project-3" },

            ]
        }
    },
    { id: 3, data: { acountName: "Oussama Touhami", link: "" } }
]
export let socialTabs = [
    { id: 1, name: "emailBox", icon: "/mpdv/icons/message.png" },
    { id: 2, name: "Github", icon: "/mpdv/icons/gitIcon.png" },
    { id: 3, name: "Instagram", icon: "/mpdv/icons/instagram.png" },
]


export { navLinks };