import './styles/style.css'
import Lenis from '@studio-freight/lenis'

import header from './components/header/header'
import headerScroll from './components/header/header-scroll'
import home from './pages/home/home'
import homeScroll from './pages/home/home-scroll'
import work from './pages/work/work'
import cs from './pages/cs/cs'


const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let navLinks = document.querySelectorAll('.nav__link--toggle')

function updateSessionStorage()
{
        let scroll = sessionStorage.getItem('scroll')
        
        if(scroll === 'play'){
            lenis.start()
        } else {
            lenis.stop()
        }
}

navLinks.forEach(item => { item.addEventListener('click', () => {
    setTimeout(() => {
        addEventListener('click', updateSessionStorage())
    }, 50)
    })
})
document.querySelector('.nav__burger-wrapper').addEventListener('click', () => {
    setTimeout(() => {
        addEventListener('click', updateSessionStorage())
    }, 50)
})

function init(){
    scroll()
    header()
    headerScroll()
}
init()



const isHome = document.querySelector('body').classList.contains('body--home')
if(isHome){
    home()
    homeScroll()
}

const isWork = document.querySelector('body').classList.contains('body--work')
if(isWork){
    work()
}

const isCs = document.querySelector('body').classList.contains('body--cs')
if(isCs){
    cs()
}