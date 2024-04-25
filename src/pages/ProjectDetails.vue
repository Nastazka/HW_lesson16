<template>
    <div id="app">
    <div class="projectDetails_intro">
      <img src="@/assets/Banner.jpg" alt="intro-banner">
    </div>

    <div class="project_container">
      <p class="project_title">Minimal Look Bedrooms</p>
      <!-- <div v-html="projectDescription"></div> -->

      <div class="project_slider">
        <transition name="slide-fade" mode="out-in">
          <div class="slider-container" :key="currentSlide">
            <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" v-show="index === currentSlide">
          </div>
        </transition>
        <button class="prev-btn" @click="prevSlide"></button>
        <button class="next-btn" @click="nextSlide"></button>
        <div class="dots-container">
          <span v-for="(image, index) in images" :key="index" class="dot" :class="{ active: index === currentSlide }" @click="goToSlide(index)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex';

// export default {
//   computed: {
//     ...mapState({
//       projectDescription: state => state.projectModule.description
//     })
//   },
//   methods: {
//     ...mapActions({
//       updateDescription: 'project/updateProjectDescription'
//     })
//   }
// };

export default {
  data() {
    return {
      currentSlide: 0,
      images: [
        { src: require("@/assets/Project_1.png"), alt: "Image 1" },
        { src: require("@/assets/Project_1.png"), alt: "Image 2" },
        { src: require("@/assets/Project_1.png"), alt: "Image 3" }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
.projectDetails_intro {
    margin-bottom: 200px;
    height: 356px;
}
.project_container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.project_title {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 62.5px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin: 0;
}
.project_text {
    width: 658px;
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
    margin-top: 11px;
    margin-bottom: 100px;
}
.project_slider {
    width: 62%;
    margin: 0 auto 200px auto;
    overflow: hidden;
}

.slider-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slider-container img {
    width: 100%;
    object-fit: cover;
}

.prev-btn, .next-btn {
    display: none;
}

.dots-container {
    position: absolute;
    bottom: -550px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
}

.dot.active {
    background-color: #000;
}
</style>