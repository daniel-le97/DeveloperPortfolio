<template>
  <section id="portfolio" class="py-5 section-bubble3">
    <div class="container">
      <div class="section-title">
        <h1>My Projects</h1>
      </div>

      <!-- <div class="row" v-for="p in projects">
        <div class="col-md-6">
          <img :src="p" alt="" class="img-fluid rounded elevation-5" />
        
        </div>
      </div> -->


      <div class="row">
        <div class="col-md-6">
 <img
              src="../../assets/img/portfolio/InspireSS.png"
              class="img-fluid elevation-5"
              alt=""
            />

        </div>
        <div class="col-md-6">

          <div class="card p-2 bg-dark text-light  h-100">
<div class="card-body h-100">
  <div class="card-title ">
 <p class="text-center fs-4">Inspire</p>
  </div>
  Inspire: Calendar Application and Task List App
</div>

          </div>
        </div>
      </div>
      <div class="row">




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
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      projects: computed(() => AppState.portfolioImages),
    };
  },
};
</script>

<style lang="scss" scoped></style>
