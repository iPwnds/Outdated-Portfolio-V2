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
        background-color: var(--midnight-blue-800);
        border-radius: 20px;
        line-height: 2.5;
        text-shadow: none;
        padding: 1vw;
        justify-content: center;
        align-items: center;
    }

    .topnav a {
        float: left;
        color: var(--midnight-blue-400);
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

    #progressbar {
	      position: fixed;
	      top: 0;
	      left: 0;
	      width: 5px;

	      background: linear-gradient(to top, #62efab,#62efab);
	      animation: animate 10s linear infinite;
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
