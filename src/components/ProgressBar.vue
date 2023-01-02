<template>
  <div class="progressContainer">
    <div
      v-motion
      :initial="{
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 25,
          mass: 0.5,
        },
      }"
      id="progress"
      class=""
    >
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Astronaut-Vector-Transparent.png"
        alt=""
        class="progress bg-transparent floating"
      />

      <p class="position-absolute start-0 top-0 font-1 text-success">
        {{ percent }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {
      window.addEventListener("scroll", function () {
        var top = window.scrollY;
        var height =
          document.body.getBoundingClientRect().height - window.innerHeight;
        updateProgress(top, height);
      });
    });
    function updateProgress(num1, num2) {
      var percent = Math.ceil((num1 / num2) * 100) + "%";
      AppState.percent = percent;
      document.getElementById(
        "progress"
      ).style.transform = `translateX(${percent})`;

      if (percent == 100 +'%') {
        console.log('teasdfgasdgasdg');
        let test =    document.getElementById(
        "progress"
      )
   test.className +' floating'
      }
    }

    watchEffect(() => {});

    return {
      editable,
      percent: computed(() => AppState.percent),
    };
  },
};
</script>

<style lang="scss" scoped>
.floating { 
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
 
}
 
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}

.placeholder {
  padding: 3em;
}
.progressContainer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgb(250, 236, 236);
}

#progress {
  transition: all 0.75s ease;
}
.progress {
  height: 100px;
  transform: translateX(-65px);
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
  height: 75px;
  }
}
</style>
