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
        src="https://cdn3.iconfinder.com/data/icons/back-building-exercises-and-muscle-building/437/back-building-exercises-017-512.png"
        alt=""
        class="progress bg-transparent"
      />

      {{ percent }}
    </div>
  </div>
</template>

<script>

import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from '../AppState.js'


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
AppState.percent = percent
      document.getElementById(
        "progress"
      ).style.transform = `translateX(${percent})`;
    }

    watchEffect(() => {});

    return {
      editable,
      percent:computed(()=> AppState.percent)
    };
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>
