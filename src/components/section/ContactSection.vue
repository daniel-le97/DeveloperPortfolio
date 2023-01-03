<template>
<section id="contact" class="py-6 section-bubble4">
  <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
 <p class="display-3 font-1 text-light">Get In Touch</p>
 
    </div>
    <div class="col-md-12">
      <img src="https://www.modelocurriculum.net/wp-content/como-funciona-open-to-work.png" alt="" class="elevation-6 rounded-circle">
    </div>
  </div>
</div>
</section>
</template>

<script>

import { onMounted, ref, watchEffect } from "vue";

export default {
props:{

       },
  setup(props) {
    const editable = ref({});
 
    return {
      editable,
      }
    }
  }
</script>

<style lang="scss" scoped>

.py-6{
padding-top: 10rem;
padding-bottom: 10rem;
}
</style>
