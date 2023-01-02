<template>
  <div class="container-fluid position-absolute start-50">
    <div class="row">
      <div class="col-2 d-flex flex-column align-items-start ">
       <p class=" email-icon">tung.le0319@gmail.com</p>
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

.email-icon:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #fff;
}
i{
  transition: all 0.5s ease;
}
i:hover{
  transform: translateY(-5px);
  color: turquoise !important;
}
</style>
