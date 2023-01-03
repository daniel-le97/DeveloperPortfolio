<template>
  <section id="experience" class="py-5 section-bubble2">
    <div class="container">
      <div class="section-title">
        <h1 class="font-1 text-light">Skills & Experience</h1>

     
      </div>

      <div class="row d-flex justify-content around">
        <div class="col-md-12">
          <div class="section-title">
            <p class="font-1 text-warning fs-2">
              Education
            </p>
          </div>
        </div>
        <div class="col-md-2">
             <a href="https://boisecodeworks.com/">
        <div class="v-motion">
            <img
            src="https://avatars.githubusercontent.com/u/94322600?s=280&v=4"
            alt="Full Stack Immersive Logo"
            class=" "
        />
        </div></a>

        
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <p class="font-2 fs-4 text-light ">Boise CodeWork's Immersive Full Stack Graduate. fall,22</p>
        </div>
      </div>

      <div class="row skills-content gy-4 justify-content-center">
        <div class="col-md-12">
          <p class="font-1 text-warning fs-2">Languages & Technologies</p>
        </div>
        <div class="col-md-2" v-for="s in skillsIcons">
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

      <div class="row">
        <div class="section-title">
          <p class="font-1 text-warning fs-2">Currently Learning</p>
        </div>

        <div class="col-md-6">
          <div class="card border-0 elevation-6 w-75">
            <img
              src="https://fireship.io/courses/react-next-firebase/img/featured.png"
              alt=""
              class="rounded"
            />
          </div>
        </div>
        <div class="col-md-6">
          <p class="font-2 fs-4 text-light "> learning the fundamentals of react and the Next.js framework through  <a href="https://fireship.io/">
             <img src="https://ia802200.us.archive.org/10/items/github.com-fireship-io-nft-art-generator_-_2022-01-22_14-51-40/cover.jpg" alt="" width="40">
             <b class="text-light darken-10"> fireship.io's </b>
          </a>   course. Utilizing React hooks and Firebase file upload and storage.</p>
        </div>
      </div>
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
    };
  },
  components: { CartoonFrame },
};
</script>

<style lang="scss" scoped>
.box {
  border: solid black;
  border-color: black;
  background-position: center;
  background-size: cover;
}

.box3 {
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
  padding: 5px;
}

.v-motion {
  transition: all 0.25s ease-out;
  img {
    transition: all 0.25s ease-out;
  }

  img:hover {
    transform: rotate(8deg);
  }
}
</style>
