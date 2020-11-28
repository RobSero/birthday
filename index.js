/* --------------------------------------------
                 POPUP NAVBAR
---------------------------------------------- */

const navPopUp = document.getElementById('popup-nav')
const navBurger = document.getElementById('nav-toggle')
const topBurger = document.getElementById('top-burger')
const midBurger = document.getElementById('mid-burger')
const botBurger = document.getElementById('bot-burger')
const menuList = document.getElementById('menu-list')


navBurger.addEventListener('click', ()=> {
  if (navPopUp.classList.contains('hide')) {
    navPopUp.classList.add('show')
    navPopUp.classList.remove('hide')
    topBurger.classList.add('burger-rotate-down')
    botBurger.classList.add('burger-rotate-up')
    midBurger.classList.add('transparent')
    menuList.classList.add('menu-list')
  } else {
    navPopUp.classList.remove('show')
    navPopUp.classList.add('hide')
    topBurger.classList.remove('burger-rotate-down')
    botBurger.classList.remove('burger-rotate-up')
    midBurger.classList.remove('transparent')
    menuList.classList.remove('menu-list')
  }
})