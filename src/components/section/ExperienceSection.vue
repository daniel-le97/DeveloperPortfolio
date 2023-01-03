<template>
  <section id="experience" class="py-5 section-bubble2">
    <div class="container">
      <div class="section-title">
        <h1
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="font-1 text-light"
        >
          Skills & Experience
        </h1>
      </div>

   <!-- SECTION EDUCATION -->
      <div class="row d-flex justify-content around">
        <div class="col-md-12">
          <div class="section-title">
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="font-1 text-warning fs-2"
            >
              Education
            </p>
          </div>
        </div>
        <div class="col-md-2">
          <a
            v-motion-slide-visible-once-bottom
            :delay="300"
            href="https://boisecodeworks.com/"
          >
            <div class="v-motion">
              <img
                src="https://avatars.githubusercontent.com/u/94322600?s=280&v=4"
                alt="Full Stack Immersive Logo"
                class=" "
              /></div
          ></a>
        </div>

        <div class="col-md-4 d-flex align-items-center">
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 fs-4 text-light"
          >
            Boise CodeWork's Immersive Full Stack Graduate. fall,22
          </p>
        </div>
      </div>
   <!-- !SECTION EDUCATION -->

  <!-- SECTION LANG AND TECH -->
      <div class="row skills-content gy-4 justify-content-center">
        <div class="col-md-12">
          <p class="font-1 text-warning fs-2">Languages & Technologies</p>
        </div>
        <div class="col-4  col-md-2" v-for="s in skillsIcons">
          <CartoonFrame v-motion-roll-visible-once-left :delay="300">
            <div class="v-motion">
              <img class="img-fluid box3 box" :src="s.src" :title="s.title" />
            </div>
          </CartoonFrame>
        </div>
        <div
          class="col-md-12 d-md-flex justify-content-around mb-4 flex-wrap"
        ></div>
      </div>

  <!-- !SECTION LANG AND TECH -->



   <!-- SECTION DEVSOPPORTUNITIES -->
      <div class="row my-5">
        <div class="section-title">
          <p class="font-1 fs-2 text-warning">DevsOpportunities LLC</p>
        </div>
        <div class="col-md-6 d-flex justify-content-center my-3 my-md-0">
          <div
            class="rounded-circle bg-light text-center devsopportunities-image elevation-6"
          >
            <img
              src="../../assets/img/LLCLogo.png"
              alt="LLC Logo"
            />
          </div>
        </div>
        <div class="col-md-6">
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 fs-4 text-light"
          >
            Company I Co-Founded with other developers to do freelance work
            while searching for full time employment.
          </p>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="font-1 fs-5 text-light darken-10">
              Projects & work done Listed Below
              <i
                @click="scrollToProjects()"
                class="mdi mdi-arrow-down-circle fs-1 text-light action"
              ></i>
            </p>
          </div>
        </div>
      </div>

   <!-- SECTION DEVSOPPORTUNITIES -->




  <!-- SECTION CURRENTLY LEARNING -->
      <div class="row my-5 gy-3">
        <div class="section-title">
          <p class="font-1 text-warning fs-2">Currently Learning</p>
        </div>

        <div class="col-md-6">
          <div
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="card border-0 elevation-6  text-center "
          >
            <img
              src="https://fireship.io/courses/react-next-firebase/img/featured.png"
              alt=""
              class="rounded   img-fluid"
            />
          </div>
        </div>
        <div class="col-md-6">
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-2 fs-4 text-light"
          >
            learning the fundamentals of react and the Next.js framework through
            <a href="https://fireship.io/">
              <img
                src="https://ia802200.us.archive.org/10/items/github.com-fireship-io-nft-art-generator_-_2022-01-22_14-51-40/cover.jpg"
                alt=""
                width="40"
              />
              <b class="text-light darken-10"> fireship.io's </b>
            </a>
            course. Utilizing React hooks and Firebase file upload and storage.
          </p>
        </div>
      </div>
  <!-- !SECTION CURRENTLY LEARNING -->
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import CartoonFrame from "../CartoonFrame.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,

      skillsIcons: computed(() => AppState.skillsIcons),
      scrollToProjects() {
        window.scrollTo({
          top: document.getElementById("portfolio").offsetTop + 2250,
          left: 0,
          behavior: "smooth",
        });
      },
    };
  },
  components: { CartoonFrame },
};
</script>

<style lang="scss" scoped>
.fireship-img{

//when screen is 768px OR LESS
//when screen is 768px OR LESS
@media only screen and (max-width: 768px){
width: 75%;
}
}
.devsopportunities-image {
  height: 200px;
  width: 200px;
  img {
    height: 200px;
    width: 200px;
  }

}

.box {
  border: solid black;
  border-color: black;
  background-position: center;
  background-size: cover;
}
.box:hover {
  border: solid #f7d778;
  border-color: #f7d778;
}

.box3 {
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
  padding: 5px;
}

.v-motion {
  transition: all 0.25s ease;
  img {
    transition: all 0.25s ease;
  }

  img:hover {
    transform: rotate(8deg);
  }
}
</style>
