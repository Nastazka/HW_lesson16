<template>
    <div>
        <div class="container">
            <header>
            <img class="logo-img" src="@/assets/Logo.svg" alt="Logo">
            <div class="head-menu">
                <nav>
                    <router-link to="/home" class="head-items">Home</router-link>
                    <router-link to="/project" class="head-items">Project</router-link>
                    <router-link to="/Blog" class="head-items">Blog</router-link>
                    <router-link to="/error" class="head-items">error</router-link>
                </nav>
            </div>
        </header>
        </div>
        
        <router-view />
    </div>
</template>

<style>
.container {
    width: 1200px;
    margin: 0 auto;
}
header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 57px;
}
nav {
    display: flex;
    width: 235px;
    justify-content: space-between;
}
.head-items {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 56px;
    text-decoration: none;
    color: #292F36;
}
.head-items:hover {
    color: #5C5C5C;
}
</style>