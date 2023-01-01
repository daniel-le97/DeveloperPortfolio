<template>
  <div class="container-fluid fixed-bottom start-0">
    <div class="row">
      <div class="col-1 d-flex flex-column">
        <i class="mdi mdi-github fs-3 text-light" title="Github"></i>
        <i class="mdi mdi-linkedin fs-3 text-light" title="Linkedin"></i>
        <i class="mdi mdi-github fs-3 text-light" title=""></i>
        <i class="mdi mdi-github fs-3 text-light"></i>
        <i class="mdi mdi-github fs-3 text-light"></i>
        <i class="mdi mdi-verticle- fs-3 text-light"></i>
      </div>
    </div>
  </div>
  
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

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
i{
  transition: all 0.5s ease;
}
i:hover{
  transform: translateY(-5px);
  color: turquoise !important;
}
</style>
