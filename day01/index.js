// 获取所有的 panel 
const allPanel = document.querySelectorAll('.panel')
// 循环注册点击事件
for (let i = 0; i < allPanel.length; i++) {
  // 替换图片
  allPanel[i].style = `background-image: url(./img/photo${i + 1}.jpg)`
  allPanel[i].addEventListener('click', function () {
    // 排他思想，去除其他的active类
    document.querySelector('.container .active').classList.remove('active')
    this.classList.add('active')
  })
}