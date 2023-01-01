<template>
  <header>
    <Navbar  />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";

export default {
  setup() {
    onMounted(() => {
      // hideOnScroll();
    });
 

    return {
      appState: computed(() => AppState),
    };
  },
  components: { Navbar },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

#nav {
  transition: all 0.5s ease;
}

:root {
  --main-height: calc(100vh - 64px);
}
</style>
