<template>
<section class="py-5 section-bubble4">
  <div class="container">
  <div class="row">
    <div class="col-md-example">

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
