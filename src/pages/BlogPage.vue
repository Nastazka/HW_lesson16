<template>
    <div id="app">
        <div class="blog-intro">
            <img src="@/assets/blog-intro.png" alt="blog-intro" class="blog-intro_img">
            <div class="intro-text">
                <p class="blog-intro_title">Articles & News</p>
                <p class="blog-intro_subtitle">Home / Blog</p>
            </div>
        </div>

        <div class="container">
            <div class="latest-post">
                <p class="latest-post_title">Latest Post</p>
                <div class="post">
                    <img src="@/assets/post-img.png" alt="post-img" class="post-img">
                    <div class="post-content">
                        <p class="content_title">Low Cost Latest Invented Interior Designing Ideas</p>
                        <p class="content_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief<br><br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                        <div class="article-footer">
                            <p class="article-date">26 December,2022</p>
                            <img src="@/assets/arrow.png" alt="arrow">
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog">
                <p class="latest-post_title">Articles & News</p>
            
                <articles-component></articles-component>

                <div class="pagination">
                    <button class="page">01</button>
                    <button class="page">02</button>
                    <button class="page">03</button>
                    <button class="page">></button>
                </div>
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
.blog {
    display: flex;
    flex-direction: column;
}
.blog-intro {
    margin-bottom: 200px;
}
.intro-text {
    background-color: #fff;
    width: Fixed (503px);
    height: Hug (178px);
    top: 344px;
    left: 708px;
    padding: 41px 78px 41px 78px;
    border-radius: 37px 37px 0 0;
    position: absolute;
    
}
.blog-intro_title {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0em;
    text-align: center;
    color: #292F36;
    margin: 0;
}
.blog-intro_subtitle {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #4D5053;
    margin: 0;
}

.latest-post_title {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin: 0;
}
.post {
    display: flex;
    justify-content: space-between;
    margin-top: 27px;
    margin-bottom: 150px;
}
.post-img {
    margin-left: 22px;
}
.post-content {
    width: 469px;
    margin-right: 56px;
}
.content_title {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
}
.content_text {
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
    margin-bottom: 41px;
}
.pagination {
    align-self: center;
    margin-top: 51px;
    gap: 20px;
    display: flex;
}
.page {
    background-color: transparent;
    width: 52px;
    height: 52px;
    line-height: 52px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #cda274;;
    cursor: pointer;
}
</style>