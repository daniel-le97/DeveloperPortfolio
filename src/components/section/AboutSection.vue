<template>
  <section id="about" class="about py-5 mt-0 section-bubble1 text-light font-1">
    <div class="container">
      <div class="section-title">
        <h1
         v-motion-slide-visible-once-bottom
          :delay="300"
        >About me</h1>
      
      </div>

      <div class="row">
        <div class="col-lg-4" >
          <img
           v-motion-slide-visible-once-bottom
          :delay="300"
            src="../../assets/img/Tungle/Tung Le.4.jpg"
            class="img-fluid rounded profileImg"
            alt=""
          />
        </div>

        <div
          class="col-lg-8 pt-4 pt-lg-0 content px-md-5 d-flex align-items-center"
        >
          <p 
           v-motion-slide-visible-once-bottom
          :delay="300"
          class="px-md-5 aboutmeText text-start fs-5">
            Hello! My name is Tung  and I enjoy designing and creating. My interest in web development started back in 2015 when i  I'm a
            full-stack software developer with a passion for creativity, problem
            solving and learning something new every day. I immediately fell in
            love with coding the moment i started with "Hello World!" I was
            instantly hooked. I've now come to build full-stack applications
            using a variety of languages,frameworks,and tools referenced below.
            I have a passion for everything in software development from the
            design aspects of the frontend to the logic and puzzles of the
            backend both equally satisfying to overcome the challenges each has.
            More importantly I have a passion for working with people that share
            the same love for problem-solving, and love of code!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped></style>
