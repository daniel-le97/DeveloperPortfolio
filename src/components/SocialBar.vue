<template>
  <div class="container-fluid fixed-bottom  ">
    <div class="row justify-content-between">
      <div class="col-2 d-flex flex-column align-items-start ">
        <i class="mdi mdi-github fs-3 text-light" title="Github"></i>
        <i class="mdi mdi-linkedin fs-3 text-light linkedIn-icon" title="Linkedin"></i>
     
      </div>
      <div class="col-1 text-center  d-flex justify-content-center align-items-center">
     <a href="mailto:tung.le0319@gmail.com" target="_blank" class="email font-1 fs-3 text-light">   tung.le0319@gmail.com </a>
      </div>
    </div>
    <div class="row">

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
.email{
  transform: rotate(90deg) +translateX(-50px) + translateY(-20px);
  transition: all 0.5s ease;

}
.email:hover{
  transform: rotate(90deg) +translateX(-70px) + translateY(-20px);
    color: turquoise !important;
      transition: all 0.5s ease;
}
.email-icon:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #fff;
}
.linkedIn-icon:after {
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
