<template>
    <div class="main">
        <div class="categories">
            <button class="category-item">Bathroom</button>
            <button class="category-item selected">Bed Room</button>
            <button class="category-item">Kitchan</button>
            <button class="category-item">Living Area</button>
        </div>
        <div id="projects">
            <div class="project-list">
                <project v-for="project in projectsData" :key="project.id">
                    <img :src="project.image" alt="Изображение проекта">
                    <div class="project-footer">
                        <div class="description">
                            <p class="project-title">{{ project.title }}</p>
                            <p class="bread-crumbs">{{ project.link }}</p>
                        </div>
                        <a class="project__link">
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
                </project>
            </div>
            
        </div>
        <div class="pagination">
            <button class="page">01</button>
            <button class="page">02</button>
            <button class="page">03</button>
            <button class="page">></button>
        </div>
    </div>
</template>

<script>
    const projectsData = [
        {
            id: 1,
            tag: "Bed Room",
            title: "Minimal Bedroom",
            image: require("@/assets/project1.png"),
            link: "Decor / Artchitecture",
        },
        {
            id: 2,
            tag: "Bed Room",
            title: "Minimal Bedroom",
            image: require("@/assets/project2.png"),
            link: "Decor / Artchitecture",
        },
        {
            id: 3,
            tag: "Bed Room",
            title: "Classic Minimal Bedroom",
            image: require("@/assets/project3.png"),
            link: "Decor / Artchitecture",
        },
        {
            id: 4,
            tag: "Bed Room",
            title: "Modern Bedroom",
            image: require("@/assets/project4.png"),
            link: "Decor / Artchitecture",
        },
        {
            id: 5,
            tag: "Bed Room",
            title: "Minimal Bedroom table",
            image: require("@/assets/project5.png"),
            link: "Decor / Artchitecture",
        },
        {
            id: 6,
            tag: "Bed Room",
            title: "System Table",
            image: require("@/assets/project6.png"),
            link: "Decor / Artchitecture",
        },
        {
            id: 7,
            tag: "Bed Room",
            title: "Modern Bedroom",
            image: require("@/assets/project7.png"),
            link: "Decor / Artchitecture",
        },
        {
            id: 8,
            tag: "Bed Room",
            title: "Modern Bedroom",
            image: require("@/assets/project8.png"),
            link: "Decor / Artchitecture",
        },
    ];

    export default {
        data() {
            return {
                projectsData: projectsData,
            };
        },
    };
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
}
.categories {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 880px;
    height: 75px;
    border: 1px solid #CDA274;
    border-radius: 18px;
    margin: 0 auto 60px auto;
}

.category-item {
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 0;

    width: 219px;
    height: 73px;
    border-radius: 18px;
    border: none;
    background-color: #fff;
    gap: 10px;
}
.selected {
    background: #CDA274;
    color: #fff;
}

.project-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
}

.project-footer {
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px;
width: 585px;
height: 70px;
}
.project-title {
    font-family: 'DM Serif Display';
    font-size: 25px;
    font-weight: 600;
    line-height: 31.25px;
    letter-spacing: 0.02em;
    text-align: left;
    margin: 0;
    color: #292F36;


}
.bread-crumbs {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    margin: 0;
    color: #4D5053;

}

.project__link {
    width: 52px;
    height: 52px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    background-color: #f4f0ec;
    cursor: pointer;
}
.pagination {
    margin: 51px auto 0 auto;
    gap: 20px;
    display: flex;
}
.page {
    font-family: 'Jost';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    margin: 0;
    background-color: transparent;
    width: 52px;
    height: 52px;
    line-height: 52px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #cda274;;
    cursor: pointer;
    color: #292F36;
}
</style>