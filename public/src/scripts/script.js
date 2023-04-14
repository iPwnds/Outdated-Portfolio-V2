function Age () {
  const ageEl = document.getElementById('age')

  const birthDate = new Date(2005, 10, 19)
  const currentDate = new Date()
  let year = currentDate.getFullYear() - birthDate.getFullYear()
  const month = currentDate.getMonth() - birthDate.getMonth()
  const day = currentDate.getDate() - birthDate.getDate()

  if (month < 0 || month == 0 && day < 0) {
    year--
  }

  ageEl.innerText = year
}

function SideBar () {
  const progress = document.getElementById('progressbar')
  const totalHeight = document.body.scrollHeight - window.innerHeight

  window.onscroll = function () {
    const progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = progressHeight + '%'
  }
}
