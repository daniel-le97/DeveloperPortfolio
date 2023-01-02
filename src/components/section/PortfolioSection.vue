<template>
  <section id="portfolio" class="py-5 section-bubble3">
    <div class="container">
      <div class="section-title d-flex">
        <h1>Some Things I've Built</h1>
      </div>

  

      <div class="row my-5">
        <div class="col-md-7">
          <img
          v-motion-slide-visible-once-bottom :delay="500"
            src="../../assets/img/portfolio/samadhiApp.png"
            class="img-fluid elevation-6 rounded"
            alt=""
          />
        </div>
        <div class="col-md-5 position-relative">
          <p 
          v-motion-slide-visible-once-bottom :delay="500" class="font-1 fs-5 text-warning">Featured Project</p>
          <p
          v-motion-slide-visible-once-bottom :delay="600" class="font-1 fs-3 text-light text-shadow">SamadhiYogaIdaho</p>
          <div
          v-motion-slide-visible-once-bottom :delay="700"
            class="card elevation-6 p-2 border-0 bg-primary text-light  project-description w-100"
          >
            <div 
            v-motion-slide-visible-once-bottom :delay="800" class="card-body">
              Inspiration is a gift, The Inspire application allows users to
              keep track of daily tasks and the weather with the help of a
              randomly generated quote and beautiful background image scenery
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li 
              v-motion-slide-visible-once-bottom :delay="300" class="list-group-item">HTML</li>
              <li 
              v-motion-slide-visible-once-bottom :delay="300" class="list-group-item">CSS</li>
              <li 
              v-motion-slide-visible-once-bottom :delay="300" class="list-group-item">Javascript</li>
            </ul>
          </div>
        </div>
      </div>





      <div class="row my-6" style="">
        <div class="col-md-5 position-relative text-end">
          <p class="font-1 fs-5 text-warning">Featured Project</p>
          <p class="font-1 fs-3 text-light text-shadow">Better After Books</p>
          <div
            class="card p-2 border-0 bg-primary text-light position-absolute project-description-flip w-100"
            style="z-index: 9"
          >
            <div class="card-body">
              Inspiration is a gift, The Inspire application allows users to
              keep track of daily tasks and the weather with the help of a
              randomly generated quote and beautiful background image scenery
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">CSS</li>
              <li class="list-group-item">Javascript</li>
            </ul>
          </div>
        </div>
        <div class="col-md-7">
          <img
            src="../../assets/img/portfolio/BetterAfterBooks.png"
            class="img-fluid elevation-5 rounded"
            alt=""
          />
        </div>
      </div>

      <div class="row my-5">
        <div class="col-md-7">
          <img
            src="../../assets/img/portfolio/KeeprSS.png"
            class="img-fluid elevation-6 rounded"
            alt=""
          />
        </div>
        <div class="col-md-5 position-relative">
          <p class="font-1 fs-5 text-warning">Featured Project</p>
          <p class="font-1 fs-3 text-light text-shadow">Keepr</p>
          <div
            class="card border-0 elevation-6 p-2 bg-primary text-light position-absolute project-description w-100"
          >
            <div class="card-body">
              Inspiration is a gift, The Inspire application allows users to
              keep track of daily tasks and the weather with the help of a
              randomly generated quote and beautiful background image scenery
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">CSS</li>
              <li class="list-group-item">Javascript</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="col-md-12 portfolio-item filter-game"
        >
          <h6 class="text-center">
            <b>Inspire: </b>API/HTTP Calendar And Task List App
          </h6>
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/InspireSS.png"
              class="img-fluid projectImg"
              alt=""
            />
            <div class="card-img-overlay"></div>
            <div class="portfolio-links d-flex flex-colum">
              <a
                href="../../assets/img/portfolio/InspireSS.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                title="Inspiration is a gift, The Inspire application allows users to keep track of daily tasks and the weather with the help of a randomly generated quote and beautiful background image scenery"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://tungle0319.github.io/Inspire/"
                title="More Details"
                target="_blank"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          v
          class="col-md-12 portfolio-item filter-full"
        >
          <h6 class="text-center"><b>Keepr: </b> A Photo Sharing App</h6>
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/KeeprSS.png"
              class="img-fluid projectImg"
              alt=""
            />
            <div class="portfolio-links">
              <a
                href="../../assets/img/portfolio/KeeprSS.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                title="Keepr is a social network that allows users to visually share and discover new interests by posting images to their own collection('vaults') and browsing what other users have 'kept in their vaults. Users can see how many times posts have been viewed or 'kept'! "
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                title="More Details"
                target="_blank"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="col-md-12 portfolio-item filter-full"
        >
          <h6 class="text-center"><b>Tower: </b>Ticket Purchasing App</h6>
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/TowerSS.png"
              class="img-fluid projectImg"
              alt=""
            />
            <div class="portfolio-links">
              <a
                href="../../assets/img/portfolio/TowerSS.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                title="Tower is a social network that allows users to attend  or create events that  other users can choose to attend and given a ticket unique to them. Each event has a detailed page that provides all the necessary information to hook a user into grabbing a ticket, cancelled events are displayed and are able to view details of but users cannot get a ticket to a cancelled event."
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://thetower-f4he.onrender.com/"
                title="More Details"
                target="_blank"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="col-md-12 portfolio-item filter-game"
        >
          <h6 class="text-center">
            <b>DimensionMiner: </b>Cookie Clicker Spin-Off App
          </h6>
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/DimensionMiner.png"
              class="img-fluid projectImg"
              alt=""
            />
            <div class="portfolio-links">
              <a
                href="../../assets/img/portfolio/DimensionMiner.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                title="Dimension-Miner! a fun cookie clicker spin off that involved spam clicking the target and recieving 'resources' that they can save up and spend on 'power-ups' that allow them greator bonuses when playing the game. reaching mile-stones reveal specific trophies unique to each phase they pass."
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://tungle0319.github.io/DimensionMiner/"
                title="More Details"
                target="_blank"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="col-md-12 portfolio-item filter-game"
        >
          <h6 class="text-center"><b>TaskMaster: </b>Todo List Tracking App</h6>
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/TaskMaster.png"
              class="img-fluid projectImg"
              alt=""
            />
            <div class="portfolio-links">
              <a
                href="../../assets/img/portfolio/TaskMaster.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                title="App 3"
                ><i class="bx bx-plus"></i
              ></a>
              <a
                href="https://tungle0319.github.io/TaskMaster/"
                title="More Details"
                target="_blank"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>

        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="col-md-12 portfolio-item filter-full"
        >
          <h6 class="text-center">
            <b>I'm game: </b>E-Commerce Board Game App
          </h6>
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/ImGame.png"
              class="img-fluid projectImg"
              alt=""
            />
            <div class="portfolio-links">
              <a
                href="../../assets/img/portfolio/ImGame.png"
                data-gallery="portfolioGallery"
                class="portfolio-lightbox"
                title=" I'm Game! An app for those who have a passion for table top gaming. Our goal is to give users the ability to find and purchase new games that they love or that catch their eye. Users can  keep track of games in their own collection by adding them to 'lists' like favorites, owned, and a wishlist they can view on their account page, Users that are signed in are able to creat groups where they can invite other friends to join and view eachothers shared list of owned games where they are able to chat to one another (supported with Socket.io) and plan as well as create a gamenight with a specified time and location for them to meet up and have a fun time together."
              >
                <i class="bx bx-plus"></i
              ></a>
              <a
                href="portfolio-details.html"
                title="More Details"
                target="_blank"
                ><i class="bx bx-link"></i
              ></a>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div class="container" style="margin-top: 10rem">
      <div class="row g-3">
        <div class="col-md-12 text-center">
          <p class="font-1 fs-2 text-light">Other Noteworthy Projects</p>
        </div>

        <div class="col-md-4" v-for="a in archivedProjects">
          <div class="card border-0 p-2 bg-primary">
            <div class="d-flex justify-content-between">
              <i class="mdi mdi-folder fs-3 text-warning"></i>
              <GitHubIcon />
            </div>

            <div class="">
              <p class="fs-3 font-1">{{ a.title }}</p>
              <p class="fs-5 text-light">{{ a.description }}</p>
            </div>
            <div class="">
              <ul class="list group">
                <li class="list-group-items" v-for="t in archivedProjects.tech">
                  {{ t }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import GitHubIcon from "../GitHubIcon.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    const archivedProjects = [
      {
        title: `I'm Game`,
        description:
          "A single page web app for helping users find board games and add them to a list",
        tech: ["Node Js", "Vue", "BootStrap"],
      },
      {
        title: `Tower`,
        description:
          "A single page web app for helping users find board games and add them to a list",
        tech: ["Node Js", "Vue", "BootStrap"],
      },
      {
        title: `Inspire`,
        description:
          "A single page web app for helping users find board games and add them to a list",
        tech: ["Node Js", "Vue", "BootStrap"],
      },
      {
        title: `Net Work`,
        description:
          "A single page web app for helping users find board games and add them to a list",
        tech: ["Node Js", "Vue", "BootStrap"],
      },
      {
        title: `Task Master`,
        description:
          "A single page web app for helping users find board games and add them to a list",
        tech: ["Node Js", "Vue", "BootStrap"],
      },
      {
        title: `Dimension Miner`,
        description:
          "A single page web app for helping users find board games and add them to a list",
        tech: ["Node Js", "Vue", "BootStrap"],
      },
    ];
    onMounted(() => {});
    watchEffect(() => {});
    return {
      archivedProjects,
      editable,
      projects: computed(() => AppState.portfolioImages),
    };
  },
  components: { GitHubIcon },
};
</script>

<style lang="scss" scoped>
.my-6 {
  margin-top: 8rem;
  margin-bottom: 8rem;
}
img {
  transition: all 0.5s ease;
    @media only screen and (max-width: 768px){
  filter: brightness(50%);
  filter: grayscale(90);
  }
}

img:hover {
  transition: all 0.5s ease;
  filter: brightness(120%);

  cursor: pointer;
  //when screen is 768px OR LESS

}

.list-group-item {
  background: transparent;
  border: 0;
  font-family: "Bebas Neue", cursive;
  font-size: 1.25rem;
  color: #fff;
}
.project-description {
  left: -80px;
  position: absolute;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){

  left: 0;
  top: -200px;
background-color: rgba(27, 82, 95, 0.534) !important;
backdrop-filter: blur(1px);
  }
}
.project-description-flip {
  left: 80px;
}
</style>
