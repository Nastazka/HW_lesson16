<template>
    <div>
    <div class="container">
      <div class="intro">
          <p class="intro-title">Let Your Home <br>Be Unique</p>
          <p class="intro-description">There are many variations of the passages of<br>lorem Ipsum fromavailable, majority.</p>
          <button class="start">Get Started <img class="arrow-btn" src="@/assets/Vector.png" alt="arrow"></button>
      </div>

      <div class="project">
            <p class="projects-title">Follow Our Projects</p>
            <p class="projects-desc">It is a long established fact that a reader will be distracted by the of readable<br> content of page  lookings at its layouts  points.</p>
            <div class="project-cards">

                <div class="project-card">
                    <img src="@/assets/Image1.png" alt="project-1">
                    <div class="project-footer">
                        <div class="project-desc">
                            <p class="project_title">Modern Kitchan</p>
                            <p class="project-subtitle">Decor / Artchitecture</p> 
                        </div>
                        
                        <router-link to="/project_details" class="head-items"><img class="project-arrow" src="@/assets/arrow.png" alt="arrow"></router-link>
                    </div>  
                </div>
                
                <div class="project-card">
                    <img src="@/assets/Image2.png" alt="project-1">
                    <div class="project-footer">
                        <div class="project-desc">
                            <p class="project_title">Modern Kitchan</p>
                            <p class="project-subtitle">Decor / Artchitecture</p> 
                        </div>
                        <img class="project-arrow" src="@/assets/arrow.png" alt="arrow">
                    </div>  
                </div>

                <div class="project-card">
                    <img src="@/assets/Image3.png" alt="project-1">
                    <div class="project-footer">
                        <div class="project-desc">
                            <p class="project_title">Modern Kitchan</p>
                            <p class="project-subtitle">Decor / Artchitecture</p> 
                        </div>
                        <img class="project-arrow" src="@/assets/arrow.png" alt="arrow">
                    </div>  
                </div>

                <div class="project-card">
                    <img src="@/assets/Image4.png" alt="project-1">
                    <div class="project-footer">
                        <div class="project-desc">
                            <p class="project_title">Modern Kitchan</p>
                            <p class="project-subtitle">Decor / Artchitecture</p> 
                        </div>
                        <img class="project-arrow" src="@/assets/arrow.png" alt="arrow">
                    </div>  
                </div>

            </div>
        </div>
    </div>

    <div class="counter">
        <div class="count">
            <p class="count-num">12</p>
            <p class="count-desc">Years Of Experiance</p>
        </div>
        <div class="count">
            <p class="count-num">85</p>
            <p class="count-desc">Success Project</p>
        </div>
        <div class="count">
            <p class="count-num">15</p>
            <p class="count-desc">Active Project</p>
        </div>
        <div class="count">
            <p class="count-num">95</p>
            <p class="count-desc">Happy Customers</p>
        </div>
    </div>

    <div class="container">
        <div class="blog">
            <p class="blog-title">Articles & News</p>
            <p class="blog-subtitle">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
            <articles-component></articles-component>
        </div>

      </div>
  </div>
</template>

<script>
import ArticlesComponent from '@/components/ArticlesList.vue';
export default {
  name: 'App',
  components: {
    ArticlesComponent
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
body {
    width: 1920px;
}
.intro {
    background-image: url(@/assets/intro-img.png);
    width: 100%;
    height: 758px;
}
.intro-title {
    font-family: 'DM Serif Display';
    font-weight: 400;
    font-size: 65px;
    padding-left: 52px;
    padding-top: 208px;
    margin: 0;
    color: #292F36;

}
.intro-description {
    font-family: 'Jost';
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    padding-left: 52px;
    padding-top: 18px;
}
.start {
    background-color: #292F36;
    color: #fff;
    padding: 26px 74px 26px 38px;
    border-radius: 18px;
    margin-left: 52px;
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: center;

}
.arrow-btn {
    padding-left: 10px;
}
.projects-title {
    font-family: 'DM Serif Display';
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: center;
}

.projects-desc {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
    margin-bottom: 93px;
    margin-top: 8px;
}
.project-cards {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 100px;
}
.project-footer {
    display: flex;
    justify-content: space-between;
}
.project-arrow {
    width: 70px;
    height: 70px;
    margin-top: 24px;
}
.project_title {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-top: 28px;
    margin-bottom: 4px;
}
.project-subtitle {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    margin: 0;
}

.counter {
    background-color: #F4F0EC;
    margin-top: 96px;
    margin-bottom: 96px;
    display: flex;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 150px;
}
.count {
    
    padding-right: 54px;
    padding-left: 54px;
}
.count:not(:last-child) {
    border-right: 1px solid #CDA274;
}
.count-num {
    font-family: DM Serif Display;
    font-size: 85px;
    font-weight: 400;
    line-height: 106px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #CDA274;
    margin: 0;
}
.count-desc {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
    margin: 0;
}
.blog-title {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: center;
}
.blog-subtitle {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
    width: 811px;
    margin-left: 195px;
}

.articles-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 21px;
    row-gap: 30px;
    margin-top: 52px;
}
article {
    position: relative;
    height: 521px;
    padding: 21px;
    border: 1px #e7e7e7 solid;
    border-radius: 62px;
}
.article-title {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    width: 330px;
}
.article-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}
.article-date {
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
}
.article__link {
    position: absolute;
    bottom: 37px;
    right: 21px;
    width: 52px;
    height: 52px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    background-color: #f4f0ec;
    cursor: pointer;
}
</style>