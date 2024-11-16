const progress = document.querySelector('#progress')
const circles = document.querySelectorAll('.circle')

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')


// 记录当前 circle 状态
let currentAcitve = 0

next.addEventListener('click', function () {
  currentAcitve++
  update()
})


prev.addEventListener('click', function () {
  currentAcitve--
  update()
})

// 更新进度状态
function update() {

  // 进度百分比显示
  const active = circles[currentAcitve].classList
  if (active.contains('active')) {
    circles[currentAcitve + 1].classList.remove('active')
  } else {
    circles[currentAcitve].classList.add('active')
  }

  const actives = document.querySelectorAll('.active')

  // 控制进度条
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  // 判断按钮状态
  if (currentAcitve === 0) {
    prev.disabled = true
  } else if (currentAcitve === circles.length - 1) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }

}

