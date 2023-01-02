<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>

    <p>{{test}}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      test: computed(() =>  {
        let x =1
        let y =2
return x +y
      }),
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
