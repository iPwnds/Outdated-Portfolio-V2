<template>
  <footer>
    <div class="footer" style="padding: 5vw 0vw 1vw 1vw;">
      <div class="content">
        <div class="rainbow" style="padding-top: 7.5vw;">
          <div data-aos="fade-in">
            <p>Made with ❤️ By Florian Braun</p>
          </div>
          <div data-aos="fade-in">
            <p>&copy; copyright 2020 - {{ year() }} Florian Braun</p>
          </div>
        </div>
        <div data-aos="fade-in">
          <div class="tag"><b class="small light_colored">Contact</b><br></div>
          <div>
            <Github />
            <b>GitHub</b><br><a href="./contact.html" height="12px" width="12px">iPwnds</a>
          </div>
          <div>
            <Linkedin />
            <b>LinkedIn</b><br><a href="./contact.html" height="12px" width="12px">Florian Braun</a>
          </div>
          <div>
            <Discord />
            <b>Discord</b><br><a href="./contact.html" height="12px" width="12px">florianbraun</a>
          </div>
        </div>
        <div data-aos="fade-in">
          <div>
            <Mail />
            <b>Personal Email</b><br><a href="./contact.html" height="12px" width="12px">Contact@BraunF.net</a>
          </div>
          <div>
            <Mail />
            <b>Business Email</b><br><a href="./contact.html" height="12px" width="12px">Contact@coreworld.shop</a>
          </div>
          <div>
            <Instagram />
            <b>Instagram</b><br><a href="./contact.html" height="12px" width="12px">florianb.25</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    z-index: 1;
    display: grid;
    position: relative;
    grid-area: footer;
    min-height: 12rem;
    padding-top: 10vh;
  }

  .content{
    z-index: 2;
    display: grid;
    grid-template-columns: .7fr .2fr auto;
    grid-gap: 4rem;
    padding: 2rem;
    color: var(--midnight-blue-400);
  }

  .content a{
    color: var(--midnight-blue-400);
  }

  .content > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content > div > div {
    margin: 0.5rem 0;
    font-size: 1vw;
  }

  .content > div > div > * {
    margin-right: 0.5rem;
  }
  .rainbow {
    background: linear-gradient(to right, #62efab 5%, #F2EA7D 15%, #F2EA7D 25%, #FF8797 35%, #FF8797 45%, #e1a4f4 55%, #e1a4f4 65%, #82fff4 75%, #82fff4 85%, #62efab 95%);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: bar 15s linear infinite;
  }

  @keyframes bar {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }

  .tag :before{
    content: "< ";
    font-size: 0.75vw;
    font-weight: 100;
  }

  .tag :after{
    content: " />";
    font-size: 0.75vw;
    font-weight: 100;
  }
</style>

<script setup lang="ts">
import Discord from '../assets/svg/discord.svg'
import Linkedin from '../assets/svg/linkedin.svg'
import Github from '../assets/svg/github.svg'
import Instagram from '../assets/svg/instagram.svg'
import Mail from '../assets/svg/mail.svg'

const year = () => {
  const date = Date.now()
  return new Date(date).getUTCFullYear()
}
</script>
