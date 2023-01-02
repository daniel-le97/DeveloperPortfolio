<template>
  <section id="experience" class="py-5 section-bubble2">
    <div class="container">
      <div class="section-title">
        <h1>Skills & Experience</h1>
        <h5>
          Thanks to
          <a href="https://boisecodeworks.com/">
            <img src="./assets/img/CodeWorksLogo.png" alt="" height="50"
          /></a>
        </h5>
        <p>
          I have completed over 600+ hours of live coding and usage of a diverse
          range of languages and frameworks.
        </p>
      </div>

      <div class="row skills-content gy-4">
        <div class="col-lg-12 d-md-flex justify-content-around mb-4">
          <div v-motion-slide-visible-once-bottom :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              width="80"
              height="80"
              title="HTML 5"
            />
          </div>

          <div v-motion-slide-visible-once-bottom :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              width="80"
              height="80"
              title="CSS3"
            />
          </div>

          <div v-motion-slide-visible-once-bottom :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              width="80"
              height="80"
              title="JavaScript ES6"
            />
          </div>

          <div v-motion-slide-visible-once-bottom :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
              width="80"
              height="80"
              title="Node.JS"
            />
          </div>

          <div v-motion-slide-visible-once-bottom :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg"
              width="80"
              height="80"
              title="Vue.js 3"
            />
          </div>

          <div v-motion-slide-visible-once-bottom :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
              width="80"
              height="80"
              title="Bootstrap 5"
            />
          </div>

          <div v-motion-slide-visible-once-bottom :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg"
              width="80"
              height="80"
              title="TailWind"
            />
          </div>

          <div v-motion-slide-visible-once-bottom :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
              width="80"
              height="80"
              title="C-Sharp"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-12 d-md-flex justify-content-around mt-4">
        <div v-motion-slide-visible-once-bottom :delay="300">
          <img
            class="img-fluid fs-6"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
            width="80"
            height="80"
            title="MySQL"
          />
        </div>

        <div v-motion-slide-visible-once-bottom :delay="300">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F37%2F37ed00735a2146044f6524823701d96c.jpeg&f=1&nofb=1&ipt=9ba77929ffaff581da648983d87c8201ee5426f3bf1e33642d8136c4ae6cd953&ipo=images"
            alt=""
            width="90"
            height="90"
            title="SCRUM"
          />
        </div>
        <div v-motion-slide-visible-once-bottom :delay="300">
          <img
            class="img-fluid fs-6"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
            width="80"
            height="80"
            title="MongoDb"
          />
        </div>
        <div v-motion-slide-visible-once-bottom :delay="300">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fgit-icon-logo-png-transparent.png&f=1&nofb=1&ipt=b308bfba05a76bcdf2bc582ad5cacaad0a57319d8663d56b8f4c62f5651790ff&ipo=images"
            alt=""
            height="80"
            width="80"
            title="Git"
          />
        </div>
        <div v-motion-slide-visible-once-bottom :delay="300">
          <img
            src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
            alt=""
            width="80"
            height="80"
            title="GitHub"
          />
        </div>
        <div v-motion-slide-visible-once-bottom :delay="300">
          <img
            class="img-fluid rounded-circle fs-6"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F2676579%2F34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png&f=1&nofb=1&ipt=cf2e1538e56e2a46ac6d867dc51ca74988aa8f861ad0bbf88871c33d34b6b915&ipo=images"
            width="80"
            height="80"
            title="Postman"
          />
        </div>
        <div v-motion-slide-visible-once-bottom :delay="300">
          <img
            class="img-fluid fs-6"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            width="80"
            height="80"
            title="Figma"
          />
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

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  transition: all 0.25s ease;
}

img:hover {
  transform: rotate(8deg);
}
</style>
