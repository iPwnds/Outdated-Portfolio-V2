<template>
<div id="progressbar"></div>
  <header>
    <div class="topnav" data-aos="fade-in">
      <a href="index.html" data-aos="fade-in"><b>// Florian's Portfolio</b></a>
      <a href="about.html" data-aos="fade-in">// About</a>
      <a href="projects.html" data-aos="fade-in">// Projects</a>
      <a href="contact.html" data-aos="fade-in">// Contact</a>
    </div>
  </header>
</template>

<style scoped>
  header {
    overflow: hidden;
    justify-content: center;
    align-items: center;
    display: flex;
    text-shadow: none;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 2vw;
    padding-bottom: 10vh;
  }

  .topnav {
    background-color: var(--midnight-blue-800);
    border-radius: 20px;
    line-height: 2.5;
    text-shadow: none;
    padding: 1vw;
    justify-content: center;
    align-items: center;
  }

  header a {
    float: left;
    color: var(--midnight-blue-400);
    text-align: center;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 0.75vw;
    padding-bottom: 0.75vw;
    line-height: 2.5;
    text-decoration: none;
    font-size: 1.5vw;
    justify-content: center;
    align-items: center;
  }

  header a:hover {
    background-color: var(--midnight-blue-600);
    border-radius: 20px;
    line-height: 2.5;
    padding-right: 3vw;
    padding-left: 3vw;
    padding-top: 0.75vw;
    padding-bottom: 0.75vw;
    text-shadow: none;
    box-shadow: 3px 2px 2px var(--midnight-blue-800);
    justify-content: center;
    align-items: center;
  }

  @keyframes animate {
  	0%,100%
  	{
    filter: hue-rotate(0deg);
  	}
  	50%
  	{
    filter: hue-rotate(360deg);
  	}
  }

  #progressbar {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 5px;
	  background: linear-gradient(to top, #62efab,#62efab);
	  animation: animate 10s linear infinite;
  }

  #progressbar:before {
  	content: '';
  	position: absolute;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	background: linear-gradient(to top, #62efab, #62efab);
  	filter: blur(10px);
  }
</style>

<script setup lang="ts">

</script>
