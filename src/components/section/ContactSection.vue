<template>
<section id="contact" class="py-5 section-bubble4">
  <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
 <p class="display-3 font-1 text-light">Get In Touch</p>
 <p> </p>
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
</style>
