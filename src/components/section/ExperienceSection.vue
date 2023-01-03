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
        <div class="col-md-2 "   v-for="s in skillsIcons">
 <CartoonFrame
            v-motion-roll-visible-once-left
            :delay="300"
          
          >
            <div class="v-motion">
              <img
                class="img-fluid box3 box "
                :src="s.src"
                width="100"
                height="100"
                :title="s.title"
              />
            </div>
          </CartoonFrame>
        </div>
        <div class="col-md-12 d-md-flex justify-content-around mb-4 flex-wrap">
         
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
}
img {
  transition: all 0.25s ease-out;
}

img:hover {
  transform: rotate(8deg);
}
</style>
