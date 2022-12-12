<template>
<div id="progressbar"></div>
  <header class="topnav">
    <div class="topnav_color" data-aos="zoom-out">
      <a href="index.html" data-aos="fade-right"><b>Florian's Portfolio</b></a>
      <a href="about.html" data-aos="fade-right">About</a>
      <a href="projects.html" data-aos="fade-right">Projects</a>
      <a href="contact.html" data-aos="fade-right">Contact</a>
    </div>
  </header>
</template>

<style scoped>
    .topnav {
        overflow: hidden;
        justify-content: center;
        align-items: center;
        display: flex;
        text-shadow: none;
        padding-left: 2vw;
        padding-right: 2vw;
        padding-top: 2vw;
    }

    .topnav_color {
        background-color: var(--dark-light-blue);
        border-radius: 20px;
        line-height: 2.5;
        text-shadow: none;
        padding: 1vw;
        justify-content: center;
        align-items: center;
    }

    .topnav a {
        float: left;
        color: var(--light-blue);
        text-align: center;
        padding-left: 3vw;
        padding-right: 3vw;
        padding-top: 0.75vw;
        padding-bottom: 0.75vw;
        line-height: 2.5;
        text-decoration: none;
        font-size: 25px;
        justify-content: center;
        align-items: center;
    }

    .topnav a:hover {
        background-color: var(--light-dark-blue);
        border-radius: 20px;
        line-height: 2.5;
        padding-right: 3vw;
        padding-left: 3vw;
        padding-top: 0.75vw;
        padding-bottom: 0.75vw;
        text-shadow: none;
        box-shadow: 3px 2px 2px var(--medium-blue);
        justify-content: center;
        align-items: center;
    }
</style>

<script setup lang="ts">

</script>
