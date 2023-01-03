<template>
  <section id="experience" class="py-5 section-bubble2">
    <div class="container">
      <div class="section-title">
        <h1 class="font-1 text-light">Skills & Experience</h1>
        <h5>
          Thanks to
          <a href="https://boisecodeworks.com/">
            <img src="../../assets/img/CodeWorksLogo.png" alt="" height="50"
          /></a>
        </h5>
        <p>
          I have completed over 600+ hours of live coding and usage of a diverse
          range of languages and frameworks.
        </p>
      </div>

      <div class="row skills-content gy-4">
        <div class="col-lg-12 d-md-flex justify-content-around mb-4">
          <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              width="100"
              height="100"
              title="HTML 5"
            />
          </div>

          <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              width="100"
              height="100"
              title="CSS3"
            />
          </div>

          <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              width="100"
              height="100"
              title="JavaScript ES6"
            />
          </div>

          <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
              width="100"
              height="100"
              title="Node.JS"
            />
          </div>

          <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
              width="100"
              height="100"
              title="Vue.js 3"
            />
          </div>

          <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
              width="100"
              height="100"
              title="Bootstrap 5"
            />
          </div>

          <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg"
              width="100"
              height="100"
              title="TailWind"
            />
          </div>

          <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
            <img
              class="img-fluid fs-6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
              width="100"
              height="100"
              title="C-Sharp"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-12 d-md-flex justify-content-around mt-4">
        <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
          <img
            class="img-fluid fs-6"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
            width="100"
            height="100"
            title="MySQL"
          />
        </div>

        <div class="v-motion" v-motion-roll-visible-once-left :delay="300">
          <img
            src="https://i.pinimg.com/originals/71/26/cd/7126cdceaae0b3225e4af95d593a7236.png"
            alt=""
            width="100"
            height="100"
            title="SCRUM"
          />
        </div>
        <div  class="v-motion" v-motion-roll-visible-once-right :delay="300">
          <img
            class="img-fluid fs-6"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
            width="100"
            height="100"
            title="MongoDb"
          />
        </div>
        <div  class="v-motion" v-motion-roll-visible-once-right :delay="300">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fgit-icon-logo-png-transparent.png&f=1&nofb=1&ipt=b308bfba05a76bcdf2bc582ad5cacaad0a57319d8663d56b8f4c62f5651790ff&ipo=images"
            alt=""
            height="100"
            width="100"
            title="G100"
          />
        </div>
        <div  class="v-motion" v-motion-roll-visible-once-right :delay="300">
          <img
            src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
            alt=""
            width="100"
            height="100"
            title="GitHub"
          />
        </div>
        <div  class="v-motion" v-motion-roll-visible-once-right :delay="300">
          <img
            class="img-fluid rounded-circle fs-6"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F2676579%2F34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png&f=1&nofb=1&ipt=cf2e1538e56e2a46ac6d867dc51ca74988aa8f861ad0bbf88871c33d34b6b915&ipo=images"
            width="100"
            height="100"
            title="Postman"
          />
        </div>
        <div class="v-motion" v-motion-roll-visible-once-right :delay="300">
          <img
            class="img-fluid fs-6"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            width="100"
            height="100"
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

.v-motion{
  transition: all 0.25s ease;
}
img {
  transition: all 0.25s ease;
}

img:hover {
  transform: rotate(8deg);
}
</style>
