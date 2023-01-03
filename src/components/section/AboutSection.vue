<template>
  <section id="about" class="about py-5 mt-0 section-bubble1 text-light font-1">
    <div class="container">
      <div class="section-title d-flex justify-content-between">
        <h1 v-motion-slide-visible-once-bottom :delay="300">About me</h1>

        <!-- <div class="">
          <p class="fs-3">//life motto <br> if(attempt == fail){ <br> remember()  <br> learn()     <br> retry() <br>  }</p>
        </div> -->
      </div>

      <div class="row">
        <div class="col-lg-4">
          <div class="card-container">
            <div class="image-card perspective-left">
              <div class="box box3">
                <!-- <img
            v-motion-slide-visible-once-bottom
            :delay="300"
            src="../../assets/img/Tungle/Tung Le.4.jpg"
            class="img-fluid rounded profileImg elevation- oddboxinner"
            alt=""
          /> -->
                <div class="oddboxinner elevation-6"></div>
              </div>
            </div>
          </div>
          <!-- <div class="box box3">
       
          <div class="oddboxinner elevation-6"></div>
     </div> -->
        </div>

        <div
          class="col-lg-8 pt-4 pt-lg-0 content px-md-5 d-flex align-items-center"
        >
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="px-md-5 font-2 text-start fs-5"
          >
            Hello! My name is Tung and I
            <b class="text-light darken-10">LOVE</b> design and creating. I
            don't have any specific style. I prefer to adapt to each project and
            use it as to new things and expand my knowledge, Keeping the good
            and learning from the bad. I was immeditaley captivated with web
            development upon my first
            <b class="text-light darken-10">"Hello World!" </b> 1 year ago. I've
            now come to build full-stack applications using a variety of
            languages,frameworks,and tools referenced below. I have a passion
            for everything in software development from the design aspects of
            the frontend to the logic and puzzles of the backend both equally
            satisfying to overcome the challenges each has. More importantly I
            have a passion for working with people that share the same love for
            problem-solving, and love of code!
          </p>
        </div>
      </div>

      <div class="row my-5 justify-content-center">
        <div class="col-md-6 text-center">
          <p class="font-1 fs-4 text-warning">Current Favorite Song</p>
          <iframe
            class="elevation-6"
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div class="col-md-6 text-center">
          <p class="font-1 fs-4 text-warning">Creatures I'd die for</p>
          <div class="d-flex justify-content-around p-2">
            <img
              src="../../assets/img/Coco.png"
              alt=""
              width="240"
              height="240"
              class="elevation-6 rounded"
            />
            <img
              src="../../assets/img/Goblin.png"
              alt=""
              width="240"
              height="240"
              class="elevation-6 rounded"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <BlockQuote/> -->

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="font-1 fs-4 text-warning">Some of my artwork</p>
          <p class="font-2 fs-5 text-light text-center">
            I love drawing mandalas as a way of relaxation and creative
            meditation. Procreate is one of my favorite digital mediums of
            creating art. Since being caught by the web developer bug I've been
            able to synergize my love of art with UI/UX Design
          </p>
        </div>

        <div class="d-flex flex-wrap justify-content-around">
          <div v-motion-slide-visible-bottom :delay="600" class="v-motion">
            <img
              src="../../assets/img/Procreate/SunflowerStar.png"
              alt=""
              class="procreate-art perspective-left"
            />
          </div>
          <div v-motion-slide-visible-bottom :delay="600" class="v-motion">
            <img
              src="../../assets/img/Procreate/Trex.png"
              alt=""
              class="procreate-art perspective-left"
            />
          </div>
          <div v-motion-slide-visible-bottom :delay="600" class="v-motion">
            <img
              src="../../assets/img/Procreate/CosmicWolf.png"
              alt=""
              class="procreate-art perspective-left"
            />
          </div>
          <div v-motion-slide-visible-bottom :delay="600" class="v-motion">
            <img
              src="../../assets/img/Procreate/Mandala1.png"
              alt=""
              class="procreate-art perspective-left"
            />
          </div>
          <div v-motion-slide-visible-bottom :delay="600" class="v-motion">
            <img
              src="../../assets/img/Procreate/Mandala2.png"
              alt=""
              class="procreate-art perspective-left"
            />
          </div>
          <div v-motion-slide-visible-bottom :delay="600" class="v-motion">
            <img
              src="../../assets/img/Procreate/SunflowerStar.png"
              alt=""
              class="procreate-art perspective-left"
            />
          </div>
          <div v-motion-slide-visible-bottom :delay="600" class="v-motion">
            <img
              src="../../assets/img/Procreate/SunflowerStar.png"
              alt=""
              class="procreate-art perspective-left"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped>
.procreate-art {
  width: auto;
  height: 400px;
}

.procreate-art:hover {
  transform: scale(1.01);
  transition: all 0.5s ease;
}
.box {
  background-image: url("../../assets/img/Tungle/Tung Le.4.jpg");
  border: solid black;
  border-color: black;
  background-position: center;
  background-size: cover;
}

.box3 {
  border-width: 5px 3px 3px 5px;
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);
}

.oddboxinner {
  height: 500px;
  margin: 15px;
  transform: rotate(-2deg);
}

.image-card {
  width: 440px;
  height: 560px;
  padding: 8px;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  background: url("https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg");
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.perspective-left {
  transform: perspective(1500px) rotateY(15deg);
  transition: transform 1s ease 0s;
}

.perspective-left:hover {
  transform: perspective(3000px) rotateY(5deg);
}

.perspective-right {
  transform: perspective(1500px) rotateY(-15deg);
  transition: transform 1s ease 0s;
}

.perspective-right:hover {
  transform: perspective(3000px) rotateY(-5deg);
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
