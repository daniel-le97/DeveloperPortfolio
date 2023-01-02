<template>
  <!-- <section id="hero" class=" position-relative container-fluid d-flex flex-column align-items-center justify-content-center p-0 pt-0">

    <video
      id="heroVideo"
      autoplay
      loop
      muted
      src="../../assets/img/lively wallpaper anime.mp4"
      type="video/mp4"
      class=""
    ></video>
    <div
      id="heroText"
      class="hero-container position-absolute"

    >
      <h1 class=" text-light fw-bold display-1">Tung Le</h1>
      <h1 class=" text-light fw-bold display-1">Software Developer</h1>
      
    </div>
   
  </section> -->

  <div
    class="container-fluid hero-image text-center d-flex justify-content-center align-items-center"
  >
    <ParticleComponent />
    <div class="row justify-content-between">
      <div id="heroText2" class="col-md-6 hero-text-2">
        <p
          v-motion-slide-bottom
          :delay="300"
          class="text-start display-6 ms-5 font-1 mb-0 text-shadow"
        >
          creative
        </p>
        <p v-motion-slide-bottom :delay="300" class="font-1 display-7 mb-0 text-shadow">
          Designer <b class="display-6 text-warning">&</b>
        </p>
        <p v-motion-slide-bottom :delay="300" class="font-1 display-7 text-shadow">
          Developer
        </p>
      </div>
      <div class="col-md-6 text-center">
        <h1 id="heroText" class="text-light display-1 hero-text text-shadow">
          Learn
          <b v-motion-slide-bottom :delay="600">Anything. </b>
          <b v-motion-slide-bottom :delay="1000">Anytime. </b>
          <b v-motion-slide-bottom :delay="1500">Anywhere.</b>
        </h1>
      </div>
    </div>
    <GentleWave/>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import GentleWave from "../GentleWave.vue";
import ParticleComponent from "../ParticleComponent.vue";

export default {
  props: {},
  setup(props) {
    onMounted(() => {
      paralaxx1();
    });
    const editable = ref({});

    function paralaxx1() {
      let text1 = document.getElementById("heroText");
      let text2 = document.getElementById("heroText2");
      // console.log(text1);
      let prevScrollpos = window.scrollY;
      console.log(prevScrollpos);
      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        console.log(currentScrollPos);
        if (prevScrollpos > currentScrollPos) {
          // text1.classList.add('test1')
          // text1.classList.remove('test')
          text1.style.transform = `translateY(${currentScrollPos}px)`;
          text2.style.transform = `translateY(-${currentScrollPos}px)`;
          // text1.style.transform = "translateY(0deg)"
        } else {
          // text1.classList.remove('test1')
          // text1.classList.add('test')
          text1.style.transform = `translateY(${currentScrollPos}px)`;
          text2.style.transform = `translateY(-${currentScrollPos}px)`;
        }

        if (currentScrollPos > 350) {
          // console.log('test');
          text1.style.filter = "opacity(0)";
        }

        if (currentScrollPos < 350) {
          text1.style.filter = "opacity(1)";
        }

        prevScrollpos = currentScrollPos;
      };
    }
    return {
      editable,
    };
  },
  components: { ParticleComponent, GentleWave },
};
</script>

<style lang="scss" scoped>
.hero-text-2 {
  transition: all 0.25s ease;
}
.hero-text {
  z-index: 9999;
}
.display-7 {
  font-size: 10rem;
}
#heroText {
  transition: all 0.5s ease;
}

.test {
  transition: all 1.25s ease;
  transform: translateY(240px);
}
.test1 {
  transition: all 1.25s ease;
  transform: translateY(0px);
}
#hero {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  z-index: 0;
}
#heroVideo {
  width: 100%;
  object-fit: cover;
}
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
