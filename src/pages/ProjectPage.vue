<template>
    <div id="app">
        <div class="project-intro">
            <img src="@/assets/project-intro.png" alt="project-intro" class="project-intro_img">
            <div class="intro-text">
                <p class="project-intro_title">Our Project</p>
                <p class="project-intro_subtitle">Home / Project</p>
            </div>
        </div>
        <div class="container">
            <projects-component />
        </div>
    </div>
</template>

<script>
import ProjectsComponent from '@/components/ProjectsComponent.vue';
export default {
  name: 'App',
  components: {
    ProjectsComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
.project-intro {
    margin-bottom: 200px;
}
.intro-text {
    background-color: #fff;
    width: Fixed (503px);
    height: Hug (178px);
    top: 344px;
    left: 760px;
    padding: 41px 78px 41px 78px;
    border-radius: 37px 37px 0 0;
    position: absolute;
    
}
.project-intro_title {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0em;
    text-align: center;
    color: #292F36;
    margin: 0;
}
.project-intro_subtitle {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #4D5053;
    margin: 0;
}
</style>