import AOS from 'aos';

AOS.init({
  once: false,
  mirror: true,
  anchorPlacement: 'top-bottom',
  offset: 0,
  duration: 1000
});

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let interval = null

document.querySelector('code').onmouseover = event => {
  let iteration = 0

  clearInterval(interval)

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index]
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join('')

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval)
    }

    iteration += 1 / 3
  }, 30)
}
