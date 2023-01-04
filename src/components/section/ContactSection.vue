<template>
  <section id="contact" class="py-6 section-bubble4">
    <div class="container gap-5">
      <div class="row">
        <div class="col-md-12 ">
          <p class="display-3 font-1 text-light">Get In Touch</p>
        </div>
      </div>

      <!-- <div class="row position-relative my-6">

        <ContactForm/>
      </div> -->
      <div class="row">
        <div class="col-md-4">
          <a href="https://github.com/TungLe0319" target="_blank">
            <img
              src="https://raw.githubusercontent.com/TungLe0319/GithubStats/master/generated/languages.svg#gh-dark-mode-only"
              alt=""
              class="elevation-6 rounded"
            />
          </a>
        </div>
        <div class="col-md-4">
          <a href="https://github.com/TungLe0319" target="_blank">
            <img
              src="https://raw.githubusercontent.com/TungLe0319/GithubStats/master/generated/overview.svg#gh-dark-mode-only"
              alt=""
              class="elevation-6 rounded"
            />
          </a>
        </div>
      </div>
    </div>
  
  </section>
</template>

<script>
import { onMounted, ref, watchEffect } from "vue";
import ContactForm from "../ContactForm.vue";


export default {
  props: {},
  setup(props) {
    const editable = ref({});
    return {
      editable,
    };
  },
  components: { ContactForm },
};
</script>

<style lang="scss" scoped>


.my-6 {
  margin-top: 8rem;
  margin-bottom: 15rem;
}
.py-6 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
