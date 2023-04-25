import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import barba from '@barba/core'

import header from './components/header/header'
import headerScroll from './components/header/header-scroll'
import home from './pages/home/home'
import homeScroll from './pages/home/home-scroll'
import work from './pages/work/work'
import cs from './pages/cs/cs'
import courseScroll from './pages/course/course-scroll'
import course from './pages/course/course'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


function scroll()
{
	let smoother = ScrollSmoother.create({
        wrapper: '.smooth-wrapper',
        content: '.smooth-content',
        smooth: 1,
        smoothTouch: 0.1,
        effects: true,
    })

    smoother.scrollTo(0, false)
}

let navLinks = document.querySelectorAll('.nav__link--toggle')
    
// function updateSessionStorage()
// {
//         let scroll = sessionStorage.getItem('scroll')
        
//         if(scroll === 'play'){
//             lenis.start()
//         } else {
//             lenis.stop()
//         }
// }

// navLinks.forEach(item => { item.addEventListener('click', () => {
//     setTimeout(() => {
//         addEventListener('click', updateSessionStorage())
//     }, 50)
//     })
// })
// document.querySelector('.nav__burger-wrapper').addEventListener('click', () => {
//     setTimeout(() => {
//         addEventListener('click', updateSessionStorage())
//     }, 50)
// })

function init(){
    header()
    headerScroll()

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

    const isCourse = document.querySelector('body').classList.contains('body--course')
    if(isCourse){
    course()
    courseScroll()
    }

    const isFluent = document.querySelector('body').classList.contains('body--fluent')
    if(isFluent){
    
    }

}


barba.init({
    transitions: [{
        name: 'default-transition',
        once() {
            init()
            scroll()
            // let loaderTl = gsap.timeline()
            // loaderTl.to('.loader', {
            //     opacity: 0,
            //     duration: 0.8,
            //     ease: 'Quart.easeInOut'
            // })
            // .to('.loader', {
            //     display: 'none'
            // })
        },
        async leave(data) {
            // return new Promise(resolve => {
            //     let leaveTl = gsap.timeline({
            //         onComplete(){
            //             resolve()
            //         }
            //     })
            //     leaveTl.to('.body',{
            //         opacity: 0,
            //         duration: 0.6,
            //         ease: 'Quart.easeInOut'
            //     })
            // })
            
        },
        async afterLeave() {
            let triggers = ScrollTrigger.getAll()
            triggers.forEach(function (trigger) {
                trigger.kill()
            })
        },
        async enter(data) {
            scroll()
            // let enterTl = gsap.timeline()
            // enterTl.to('.body', {
            //     opacity: 1,
            //     duration: 0.6,
            //     ease: 'Quart.easeInOut'
            // })
        },
        async after() {
            init()
        }
        }],
        views: [
        { namespace: 'home',
            beforeEnter(){
                document.querySelector('body').className = 'body body--home'
            }
        },
        { namespace: 'work',
            beforeEnter(){
                document.querySelector('body').className = 'body body--work'
            }
        },
        { namespace: 'cs',
        beforeEnter(){
            document.querySelector('body').className = 'body body--cs'
            }
        },
        { namespace: 'course',
        beforeEnter(){
            document.querySelector('body').className = 'body body--course'
            }
        },
        { namespace: 'fluent',
        beforeEnter(){
            document.querySelector('body').className = 'body body--fluent'
            }
        },
        { namespace: 'sg',
        beforeEnter(){
            document.querySelector('body').className = 'body body--sg'
            }
        }
    ],
    
})