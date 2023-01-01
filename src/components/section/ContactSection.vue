<template>
<div class="container">
  <div class="row">
    <div class="col-md-example">
      
    </div>
  </div>
</div>
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
