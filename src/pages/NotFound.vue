<template>
    <div id="app">
        <div class="error-content">
            <div class="description">
                <p class="error-elem">404</p>
                <p class="error-description">We are sorry, but the page you requested was not found</p>
                <button class="back">Back To Home <img class="arrow-btn" src="@/assets/Vector.png" alt="arrow"></button>
            </div>
            <img class="notFound-img" src="@/assets/notFound-img.png" alt="NotFound image">
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
body {
    width: 1920px;
}
.error-content {
    display: flex;
    justify-content: left;
    gap: 81px;
    margin-left: 360px;
}
.error-elem {
    font-family: DM Serif Display;
    font-size: 250px;
    font-weight: 400;
    line-height: 312.5px;
    text-align: left;
    color: #CDA274;
    margin: 0;
}
.error-description {
    font-family: DM Serif Display;
    font-size: 35px;
    font-weight: 400;
    line-height: 52.5px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #292F36;
    width: 539px;
    margin-top: 15px;
}
.back {
    background-color: #292F36;
    color: #fff;
    padding: 26px 74px 26px 38px;
    border-radius: 18px;
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
.notFound-img {
    width: 600px;
}
</style>