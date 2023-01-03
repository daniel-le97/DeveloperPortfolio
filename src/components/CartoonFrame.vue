<template>
  <div class="card-container">
    <div class="image-card perspective-left">


      <slot>
        
      </slot>

        <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="" class="box box3">
        <div class="oddboxinner elevation-6"></div> -->
   
    </div>
  </div>
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


.image-card::before{
   content: "";
     border-radius: 1rem;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url("https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg");
  filter: brightness(78%);
    background-position: center;
  background-size: cover !important;
}
.image-card {
 
  padding: 8px;
  border-radius: 1rem;

  background: url("https://w.wallhaven.cc/full/xl/wallhaven-xl77vl.jpg");
  background-position: center;
  background-size: cover !important;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.perspective-left {
  transform: perspective(1500px) rotateY(30deg);
  transition: transform 1s ease 0s;
}

.perspective-left:hover {
  transform: perspective(3000px) rotateY(-10deg);
}
</style>
