<template>
<div id="progressbar"></div> <!-- Doesn't work -->
<header>
  <nav>
    <div class="topnav" data-aos="fade-in">
      <a href="./index.html"><b>// Florian's Portfolio</b></a>
      <a href="./404.html">// Projects</a>
      <a href="./404.html">// About</a>
      <a href="./contact.html">// Contact</a>
    </div>
  </nav>
  <div class="quote" data-aos="fade-in">
    <a href="https://www.atworld.shop" class="gradient">Never<br>Give<br>Up</a>
  </div>
</header>
</template>

<style scoped>
  header {
    overflow: hidden;
    padding: 2vw 2vw 10vh 2vw;
    display: flex;
    width: 100vw;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topnav {
    background-color: var(--midnight-blue-900);
    border-radius: 20px;
    line-height: 2.5;
    padding: 1vw 1vw 1vw 0.75vw;
  }

  .topnav a {
    float: left;
    color: var(--midnight-blue-400);
    padding: 0.75vw 3vw 0.75vw 3vw;
    line-height: 2.5;
    font-size: 1.5vw;
  }

  .topnav a:hover {
    background-color: var(--midnight-blue-400);
    border-radius: 20px;
    color: var(--midnight-blue-900);;
  }

  #progressbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 5px;
    background: linear-gradient(to top, #62efab,#62efab);
    animation: animate 10s linear infinite;
  }

  #progressbar :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #62efab, #62efab);
    filter: blur(10px);
  }

  @keyframes animate {
    0%,100% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes fade {
    0% {
      background-size: 100%;
    }
    100% {
      background-size: 200%;
    }
  }

  .quote {
    font-size: 2vw;
    display: flex;
    text-align: right;
    position: absolute;
    top: 2vw;
    right: 2vw;
  }

  .gradient {
    background: linear-gradient(45deg, #CA4246 16.666%, #E16541 16.666%, #E16541 33.333%, #F18F43 33.333%, #F18F43 50%, #8B9862 50%, #8B9862 66.666%, #476098 66.666%, #476098 83.333%, #A7489B 83.333%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }

  .gradient:hover {
    background: linear-gradient(45deg, #CA4246 16.666%, #E16541 16.666%, #E16541 33.333%, #F18F43 33.333%, #F18F43 50%, #8B9862 50%, #8B9862 66.666%, #476098 66.666%, #476098 83.333%, #A7489B 83.333%);
    background-size: 200%;
    animation: fade ease 2.5s;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }
</style>

<script setup lang="ts">
const progress = document.getElementById('progressbar')
const totalHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = function () {
  const progressHeight = (window.pageYOffset / totalHeight) * 100
  progress.style.height = progressHeight + '%'
}
</script>
