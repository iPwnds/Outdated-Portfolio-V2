<template>
<div id="progressbar"></div>
  <header>
    <div class="topnav" data-aos="fade-in">
      <p class="quote rainbow" data-aos="fade-in">Never Give Up</p>
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
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: none;
    padding: 2vw 2vw 10vh 2vw;
  }

  .topnav {
    background-color: var(--midnight-blue-800);
    border-radius: 20px;
    line-height: 2.5;
    text-shadow: none;
    padding: 0.25vw 1vw 1vw 0.75vw;
  }

  header a {
    float: left;
    color: var(--midnight-blue-400);
    padding: 0.75vw 3vw 0.75vw 3vw;
    line-height: 2.5;
    text-decoration: none;
    font-size: 1.5vw;
  }

  header a:hover {
    background-color: var(--midnight-blue-600);
    border-radius: 20px;
    text-shadow: none;
    box-shadow: 3px 2px 2px var(--midnight-blue-800);
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

  .quote {
    text-align: left;
    font-size: 0.5vw;
  }

  .rainbow {
    background: linear-gradient(to right, #62efab 5%, #F2EA7D 15%, #F2EA7D 25%, #FF8797 35%, #FF8797 45%, #e1a4f4 55%, #e1a4f4 65%, #82fff4 75%, #82fff4 85%, #62efab 95%);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: bar 15s linear infinite;
  }
</style>

<script setup lang="ts">

</script>
