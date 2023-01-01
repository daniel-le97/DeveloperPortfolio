<template>
  <nav  id="navBar" class="navbar navbar-expand-lg navbar-dark bg-custom px-3 fixed-top ">
    <div class="d-flex me-5">
      <p class="mb-0 font-1 fs-5">Tung Le</p>
      <p class="mb-0 ms-4 font-1 fs-5">SoftWare Developer</p>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link
            :to="{ name: 'Home' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            Home
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
    </div>
    <ProgressBar />
  </nav>
</template>

<script>
import Login from "./Login.vue";
import ProgressBar from "./ProgressBar.vue";
import { onMounted } from "vue";
export default {
  setup() {
onMounted(()=>{
hideOnScroll()
})
       function hideOnScroll() {
      let nav = document.querySelector("#navBar");
      let prevScrollpos = window.scrollY;
      console.log(nav);
      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          nav.style.top = "0";
             nav.classList.add('opacity-0')
          
        } else {
          nav.style.top = "-250px";
             nav.classList.add('opacity-0')
        }
        prevScrollpos = currentScrollPos;
      };
    }
    return {};
  },
  components: { Login, ProgressBar },
};
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
nav {
  @media screen and (min-width: 768px) {
    height: 64px;
  }
}

.bg-custom{
  background-color: rgba(51, 46, 46, 0.685);
  backdrop-filter: blur(8px);
}
</style>
