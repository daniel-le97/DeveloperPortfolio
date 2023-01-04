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
      src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      // src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    },
    {
      title: "CSS3",
      src: "https://armortechs.com/upload/image/blog/css-variables-css-3-logo.png",
    },
    {
      title: "JavaScript ES6",
      src: "https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2-1024x1024.png",
    },
    {
      title: "C-Sharp",
      src: "https://1.bp.blogspot.com/-U8C6UaajxeA/XV1J6Yo6x2I/AAAAAAAABQo/3v2OEgTGn9ggUqArXtGZpl_6zqbo09nmACLcBGAs/s1600/csharp_logo.png",
    },
    {
      title: "Node Js",
      src: "https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png",
    },
    {
      title: "Vue.js 3",
      src: "https://coder.clothing/images/stories/virtuemart/product/vuejs-logo.png",
    },
    {
      title: "DotNet Core",
      src: "https://wpguru.co.uk/wp-content/uploads/2020/04/dotnet-logo.png",
    },
    {
      title: "BootStrap ",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/420px-Bootstrap_logo.svg.png",
    },
    {
      title: "TailWind CSS",
      src: "https://media.zeemly.com/zeemly/product/tailwind-css.png",
    },
    {
      title: "Sass",
      src: "https://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png",
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
      src: "http://www.lafabriquedecode.com/blog/wp-content/uploads/2013/04/mongo_logo.png",
    },
    {
      title: "Github",
      src: "https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png",
    },
    {
      title: "NPM",
      src: "https://authy.com/wp-content/uploads/npm-logo.png",
    },
    {
      title: "Postman",
      src: "https://blog.scottlogic.com/smangan/assets/postman.png",
    },
    {
      title: "Figma",
      src: "https://jenniferzlu.com/img/logo/figma.png",
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
      title: `Task Master`,
      description:
        "creating a task manager, where users can create multiple lists each with multiple items to complete on that list.They will demonstrate their understanding of the MVC Design pattern by completing this process utilizing services, controllers and models. In addition students will be able to persist data into local storage that will be retrieved on page refresh.",
      tech: ["Node Js", "Vue", "BootStrap"],
      githubLink: "",
      externalLink: "https://tungle0319.github.io/TaskMaster/",
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
      title: `Net Work`,
      description:
        "SPA app,  an client interface that utilizes a social networking API. Demonstrating knowledge of the VueJS framework, creating an  utilizing Vue and Vue-Router, creating searches to the API utilizing query parameters, and working with Auth0 for identity management",
      tech: ["Node Js", "Vue", "BootStrap"],
      githubLink: "",
      externalLink: "",
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
      title: `I'm Game`,
      description:
        "Single page application to search and browse board games using Board Game Atlas's API ",
      tech: ["Node Js", "Vue", "BootStrap", "MongoDb"],
      githubLink: "",
      externalLink: "",
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
