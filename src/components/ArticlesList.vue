<template>
    <div id="articles-news" class="blog-articles">
        <div class="articles-list">
            <article v-for="article in articlesData" :key="article.id">
                <img :src="article.image" alt="Изображение новости">
                <p class="article-title">{{ article.title }}</p>
                <div class="article-footer">
                    <span class="article-date">{{ article.date }}</span>
                    <a class="article__link">
                        <svg
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128"
                            stroke="#292F36"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </article>
        </div>
    </div>
</template>

<script>

const articlesData = [
    {
        id: 1,
        title: "Let’s Get Solution For Building Construction Work",
        image: require("@/assets/Article1.png"),
        date: "26 December, 2022",
    },
    {
        id: 2,
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        image: require("@/assets/Article2.png"),
        date: "22 December, 2022",
    },
    {
        id: 3,
        title: "Best For Any Office & Business Interior Solution",
        image: require("@/assets/Article3.png"),
        date: "25 December, 2022",
    },
    {
        id: 4,
        title: "Let’s Get Solution For Building Construction Work",
        image: require("@/assets/Article4.png"),
        date: "26 December, 2022",
    },
    {
        id: 5,
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        image: require("@/assets/Article5.png"),
        date: "22 December, 2022",
    },
    {
        id: 6,
        title: "Best For Any Office & Business Interior Solution",
        image: require("@/assets/Article6.png"),
        date: "25 December, 2022",
    },
];

export default {
    data() {
        return {
            articlesData: articlesData,
        };
    },
};
</script>

<style>
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