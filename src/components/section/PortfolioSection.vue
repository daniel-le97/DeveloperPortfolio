<template>
  <section id="portfolio" class="py-5 section-bubble3">
    <div class="container">
      <div class="section-title d-flex">
        <h1 class="font-1 text-light">Some Things I've Built</h1>
      </div>

      <div class="row my-5">
        <div class="col-md-7">
          <img
            v-motion-slide-visible-bottom
            :delay="500"
            src="../../assets/img/portfolio/samadhiApp.png"
            class="img-fluid elevation-6 rounded"
            alt=""
          />
        </div>
        <div class="col-md-5 position-relative">
          <p
            v-motion-slide-visible-bottom
            :delay="500"
            class="font-1 fs-5 text-warning"
          >
            Featured Project
          </p>
          <p
            v-motion-slide-visible-bottom
            :delay="600"
            class="font-1 fs-3 text-light text-shadow"
          >
            SamadhiYogaIdaho
          </p>
          <div
            v-motion-slide-visible-bottom
            :delay="700"
            class="card elevation-6 p-2 border-0 bg-primary text-light project-description w-100"
          >
            <div
              v-motion-slide-visible-bottom
              :delay="800"
              class="card-body font-2"
            >
              Custom Designed and built Website for a small yoga business owner,
              intergrated Ghost for CMS Publishing for her blog as well as
              configuring MailGun for Email Service. Allows her
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                Vue.Js
              </li>
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                BootStrap
              </li>
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                MongoDb
              </li>
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                PocketBase
              </li>
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                Ghost
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row my-6" style="">
        <div class="col-md-5 position-relative text-end">
          <p
            v-motion-slide-visible-bottom
            :delay="500"
            class="font-1 fs-5 text-warning"
          >
            Featured Project
          </p>
          <p
            v-motion-slide-visible-bottom
            :delay="600"
            class="font-1 fs-3 text-light text-shadow"
          >
            Better After Books
          </p>
          <div
            v-motion-slide-visible-bottom
            :delay="700"
            class="card elevation-6 p-2 border-0 bg-primary text-light position-absolute project-description-flip w-100"
            style="z-index: 9"
          >
            <div
              v-motion-slide-visible-bottom
              :delay="800"
              class="card-body text-start font-2"
            >
              Wanting to test my knowledge coming out of CodeWorks I with my
              brothers who also attended the course designed and architected a
              BookBub clone site to browse, search and favorite books. where we
              integrated and utilzied Google's Book API and transfering data
              over to our MySQL Database.
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                HTML
              </li>
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                CSS
              </li>
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                Javascript
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7">
          <figure class="td-figure">
            <img
              v-motion-slide-visible-bottom
              :delay="500"
              src="../../assets/img/portfolio/BetterAfterBooks.png"
              class="img-fluid elevation-5 rounded"
              alt=""
            />
          </figure>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-md-7">
          <img
            v-motion-slide-visible-bottom
            :delay="500"
            src="../../assets/img/portfolio/KeeprSS.png"
            class="img-fluid elevation-6 rounded"
            alt=""
          />
        </div>
        <div class="col-md-5 position-relative">
          <p
            v-motion-slide-visible-bottom
            :delay="500"
            class="font-1 fs-5 text-warning"
          >
            Featured Project
          </p>
          <p
            v-motion-slide-visible-bottom
            :delay="600"
            class="font-1 fs-3 text-light text-shadow"
          >
            Keepr
          </p>
          <div
            v-motion-slide-visible-bottom
            :delay="700"
            class="card elevation-6 p-2 border-0 bg-primary text-light project-description w-100"
          >
            <div
              v-motion-slide-visible-bottom
              :delay="800"
              class="card-body font-2"
            >
              Keepr is a social network that allows users to visually share and
              discover new interests by posting images or videos to their own,
              or others', collections (i.e., a collection of 'vaults,' usually
              with a common theme) and browsing what other users have kept.
              Demonstrates a working knowledge of building full-stack
              applications. They will utilize a VueJs frontend with Vue-Router
              to manage the DOM. On the server-side, students will use the
              DotNet WebApi for their server and implement the Repository
              pattern to communicate with their database. In addition, students
              will use Auth0 for user management, Dapper as an ORM, and a MySQL
              server for their database.
            </div>

            <ul class="list-group list-group-horizontal bg-transparent">
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                HTML
              </li>
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                CSS
              </li>
              <li
                v-motion-slide-visible-bottom
                :delay="300"
                class="list-group-item"
              >
                Javascript
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 20rem">
      <div class="row g-3">
        <div class="col-md-12 text-center">
          <p class="font-1 fs-2 text-light">Other Noteworthy Projects</p>
        </div>

        <div class="col-md-4" v-for="a in archivedProjects">
          <div
            v-motion-slide-visible-bottom
            :delay="300"
            class="card elevation-6 border-0 p-2 bg-primary archived-project-card"
          >
            <div class="d-flex justify-content-between">
              <i
                v-motion-slide-visible-bottom
                :delay="400"
                class="mdi mdi-folder fs-3 text-warning"
              ></i>
              <div class="d-flex align-items-center">
                <GitHubIcon v-motion-slide-visible-bottom :delay="100" />
                <a
                  v-motion-slide-visible-bottom
                  :delay="600"
                  href=""
                  class="ms-3"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5873/5873833.png"
                    alt="External Link to Webpage"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
            </div>

            <div class="">
              <p v-motion-slide-visible-bottom :delay="700" class="fs-3 font-1">
                {{ a.title }}
              </p>
              <p
                v-motion-slide-visible-bottom
                :delay="900"
                class="text-light font-2"
              >
                {{ a.description }}
              </p>
            </div>
            <div class="">
              <ul class="list-group list-group-horizontal">
                <li
                  class="list-group-item text-light darken-10"
                  v-for="t in a.tech"
                >
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
          "Single page application to search and browse board games using Board Game Atlas's API ",
        tech: ["Node Js", "Vue", "BootStrap", "MongoDb"],
        githubLink: "",
        externalLink: "",
      },
      {
        title: `Tower`,
        description:
          "A single page web app for helping users find board games and add them to a list",
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
        title: `Net Work`,
        description:
          "In this checkpoint, students will create a client interface that utilizes a social networking API. Students will demonstrate their knowledge of the VueJS framework, creating an SPA application utilizing Vue and Vue-Router, creating searches to the API utilizing query parameters, and working with Auth0 to manage client identity.",
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
        externalLink: "",
      },
      {
        title: `Dimension Miner`,
        description:
          "A single page web app for helping users find board games and add them to a list",
        tech: ["Node Js", "Vue", "BootStrap"],
        githubLink: "",
        externalLink: "https://tungle0319.github.io/DimensionMiner/",
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
.scene {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  perspective: 800px;

  .card {
    position: relative;
    width: 240px;
    height: 300px;
    color: white;
    cursor: pointer;
    transition: 1s ease-out-in-out;
    transform-style: preserve-3d;

    &:hover {
      transform: rotateY(0.5turn);
    }

    .card__face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transition: 1s ease-out-in-out;
      -webkit-box-reflect: below 0
        linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

      img {
        width: 240px;
        height: 300px;
        object-fit: cover;
      }

      &--back {
        transform: rotateY(0.5turn);
      }
    }
  }
}

.archived-project-card {
  transition: all 0.25s ease-out;
}
.archived-project-card:hover {
  transform: translateY(-10px) !important;
  filter: brightness(120%);
  cursor: pointer;
}
.my-6 {
  margin-top: 8rem;
  margin-bottom: 8rem;
}
img {
  transition: all 0.5s ease-out;

  @media only screen and (max-width: 768px) {
    filter: brightness(50%);
    filter: grayscale(90);
  }
}

img:hover {
  transition: all 0.5s ease-out;
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
  @media only screen and (max-width: 768px) {
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
