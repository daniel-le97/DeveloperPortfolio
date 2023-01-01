import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

percent:0,
  portfolioImages:[
    '../../assets/img/portfolio/InspireSS.png',
    '../../assets/img/portfolio/DimensionMiner.png',
    '../../assets/img/portfolio/ImGame.png',
    '../../assets/img/portfolio/KeeprSS.png',
    '../../assets/img/portfolio/Network.png',
    '../../assets/img/portfolio/TowerSS.png',

  ]
})
