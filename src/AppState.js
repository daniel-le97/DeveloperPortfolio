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
});
