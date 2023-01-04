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


      <div class="row justify-content-center">
<div class="col-md-6 d-flex justify-content-center">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="gooey">
                <!-- in="sourceGraphic" -->
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
        </defs>
    </svg>

    <button id="gooey-button">
       <p class="display-3 font-1">Contact</p>
        <span class="bubbles">
       
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
        </span>
    </button>
</div>
      </div>
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





svg {
  position: absolute;
  top: -4000px;
  left: -4000px;
}

#gooey-button {
  padding: 1rem;
  font-size: 2rem;
  border: none;
  color: #0c1016;
  filter: url("#gooey");
  position: relative;
  background-color: #00FF80;
  border-radius: 50%;
  width: 250px;
}
#gooey-button:focus {
  outline: none;
}
#gooey-button .bubbles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#gooey-button .bubbles .bubble {
  background-color: #00FF80;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: -1;
}
#gooey-button .bubbles .bubble:nth-child(1) {
  left: 27px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-1 3.02s infinite;
          animation: move-1 3.02s infinite;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
#gooey-button .bubbles .bubble:nth-child(2) {
  left: 49px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-2 3.04s infinite;
          animation: move-2 3.04s infinite;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}
#gooey-button .bubbles .bubble:nth-child(3) {
  left: 58px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-3 3.06s infinite;
          animation: move-3 3.06s infinite;
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}
#gooey-button .bubbles .bubble:nth-child(4) {
  left: 55px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-4 3.08s infinite;
          animation: move-4 3.08s infinite;
  -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;
}
#gooey-button .bubbles .bubble:nth-child(5) {
  left: 47px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-5 3.1s infinite;
          animation: move-5 3.1s infinite;
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}
#gooey-button .bubbles .bubble:nth-child(6) {
  left: 27px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-6 3.12s infinite;
          animation: move-6 3.12s infinite;
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
#gooey-button .bubbles .bubble:nth-child(7) {
  left: 27px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-7 3.14s infinite;
          animation: move-7 3.14s infinite;
  -webkit-animation-delay: 1.4s;
          animation-delay: 1.4s;
}
#gooey-button .bubbles .bubble:nth-child(8) {
  left: 76px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-8 3.16s infinite;
          animation: move-8 3.16s infinite;
  -webkit-animation-delay: 1.6s;
          animation-delay: 1.6s;
}
#gooey-button .bubbles .bubble:nth-child(9) {
  left: 80px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-9 3.18s infinite;
          animation: move-9 3.18s infinite;
  -webkit-animation-delay: 1.8s;
          animation-delay: 1.8s;
}
#gooey-button .bubbles .bubble:nth-child(10) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
#gooey-button .bubbles .bubble:nth-child(11) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
#gooey-button .bubbles .bubble:nth-child(12) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
#gooey-button .bubbles .bubble:nth-child(13) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
#gooey-button .bubbles .bubble:nth-child(14) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
#gooey-button .bubbles .bubble:nth-child(15) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
#gooey-button .bubbles .bubble:nth-child(16) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
#gooey-button .bubbles .bubble:nth-child(17) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
#gooey-button .bubbles .bubble:nth-child(18) {
  left: 91px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
          animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}

@-webkit-keyframes move-1 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -88px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}

@keyframes move-1 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -88px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-2 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -118px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-2 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -118px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-3 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -119px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-3 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -119px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-4 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -64px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-4 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -64px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-5 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -109px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-5 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -109px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-6 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -56px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-6 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -56px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-7 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -96px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-7 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -96px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-8 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -68px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-8 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -68px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-9 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -123px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-9 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -123px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-10 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -128px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-10 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -128px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-11 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -134px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-12 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -138px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-13 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -142px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-14{
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -146x);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
</style>
