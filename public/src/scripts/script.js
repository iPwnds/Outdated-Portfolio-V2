const letters = '❤️🧡💛💚💙💜🤎🖤🤍'

let interval = null

document.querySelector('span').onmouseover = event => {
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

const ageEl = document.getElementById('age')
const birthDate = new Date(2005, 10, 19)
const currentDate = new Date()
let year = currentDate.getFullYear() - birthDate.getFullYear()
const month = currentDate.getMonth() - birthDate.getMonth()
const day = currentDate.getDate() - birthDate.getDate()

if (month < 0 && month === 0 && day < 0) {
  year--
}

ageEl.innerText = year
