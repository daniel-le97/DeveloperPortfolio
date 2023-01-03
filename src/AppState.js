import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  percent: 0,
  portfolioImages: [
    "../../assets/img/portfolio/InspireSS.png",
    "../../assets/img/portfolio/DimensionMiner.png",
    "../../assets/img/portfolio/ImGame.png",
    "../../assets/img/portfolio/KeeprSS.png",
    "../../assets/img/portfolio/Network.png",
    "../../assets/img/portfolio/TowerSS.png",
  ],

  skillsIcons: [
    {
      title: "HTML5",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    },
    {
      title: "CSS3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
    },
    {
      title: "JavaScript ES6",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      title: "C-Sharp",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
    },
    {
      title: "Node Js",
      src: "https://i0.wp.com/www.netgains.org/wp-content/uploads/2014/01/node_js.png?resize=249%2C287&ssl=1",
    },
    {
      title: "Vue.js 3",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    {
      title: "DotNet Core",
      src: "https://wpguru.co.uk/wp-content/uploads/2020/04/dotnet-logo.png",
    },
    {
      title: "BootStrap ",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
    },
    {
      title: "TailWind CSS",
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg",
    },

    {
      title: "MySQL",
      src: "https://findicons.com/files/icons/977/rrze/720/database_mysql.png",
    },
    {
      title: "Scrum",
      src: "https://i.pinimg.com/originals/71/26/cd/7126cdceaae0b3225e4af95d593a7236.png",
    },
    {
      title: "MongoDb",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    },
    {
      title: "Github",
      src: "https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png",
    },
    {
      title: "Postman",
      src: "https://blog.scottlogic.com/smangan/assets/postman.png",
    },
    {
      title: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      title: "FireBase",
      src: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
    },
    {
      title: "Trello",
      src: "https://pluspng.com/img-png/trello-png-trello-png-1600.png",
    },
  ],

  devProjects: [
    {
      title: `SamadhiYogaIdaho`,
      description: "Check out Below",
      tech: [],
      githubLink: "",
      externalLink: "",
    },
    {
      title: `RCMF`,
      description: "Randy Carpenter Memorial Foundation website.",
      tech: ["Vue", "BootStrap"],
      githubLink: "",
      externalLink: "",
    },
    {
      title: ` SoftBall Website`,
      description: "Website for Centennial HighSchool's Softball team ",
      tech: ["Vue", "BootStrap"],
      githubLink: "",
      externalLink: "",
    },
  ],

  archivedProjects: [
    {
      title: `I'm Game`,
      description:
        "Single page application to search and browse board games using Board Game Atlas's API ",
      tech: ["Node Js", "Vue", "BootStrap", "MongoDb"],
      githubLink: "",
      externalLink: "",
    },
    {
      title: `Tower`,
      description:
        "SPA app designed to help people get together with other users for events. Whether they are concerts, expos, or sporting events. VueJs with Vue-Router for the client. Express with Node.js and MongoDB with Mongoose to manage database and handling relationships of both one to many, and many to many objects. Identity management with Auth0. ",
      tech: ["Node Js", "Vue", "BootStrap", "Auth0"],
      githubLink: "",
      externalLink: "https://thetower-f4he.onrender.com",
    },
    {
      title: `Inspire`,
      description:
        "Inspiration is a gift, The Inspire application allows users to keep track of daily tasks and the weather with the help of a randomly generated quote and beautiful background image scenery",
      tech: ["Node Js", "Vue", "BootStrap"],
      githubLink: "",
      externalLink: "",
    },
    {
      title: `Net Work`,
      description:
        "SPA app,  an client interface that utilizes a social networking API. Demonstrating knowledge of the VueJS framework, creating an  utilizing Vue and Vue-Router, creating searches to the API utilizing query parameters, and working with Auth0 for identity management",
      tech: ["Node Js", "Vue", "BootStrap"],
      githubLink: "",
      externalLink: "",
    },
    {
      title: `Task Master`,
      description:
        "creating a task manager, where users can create multiple lists each with multiple items to complete on that list.They will demonstrate their understanding of the MVC Design pattern by completing this process utilizing services, controllers and models. In addition students will be able to persist data into local storage that will be retrieved on page refresh.",
      tech: ["Node Js", "Vue", "BootStrap"],
      githubLink: "",
      externalLink: "https://tungle0319.github.io/TaskMaster/",
    },
    {
      title: `Dimension Miner`,
      description:
        "A Cookie Clicker Clone that  demonstrates  understanding of working with the DOM and dynamically rendering data to the page. styling the page utilizing Bootstrap best practices to design the page.",
      tech: ["HTML", "JavaScript", "BootStrap"],
      githubLink: "",
      externalLink: "https://tungle0319.github.io/DimensionMiner/",
    },
  ],
});
