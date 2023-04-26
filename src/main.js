import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { SplitText } from "gsap/SplitText"
import barba from '@barba/core'

import header from './components/header/header'
import headerScroll from './components/header/header-scroll'
import headerPanel from './components/header-panel'
import home from './pages/home/home'
import homeScroll from './pages/home/home-scroll'
import work from './pages/work/work'
import cs from './pages/cs/cs'
import courseScroll from './pages/course/course-scroll'
import course from './pages/course/course'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

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

function load()
{
    let splitTextTop = new SplitText('.loading__text--top', {
        type: 'chars'
    })

    let splitTextBottom = new SplitText('.loading__text--bottom', {
        type: 'chars'
    })

    let loaderTl = gsap.timeline()
    loaderTl.from(splitTextTop.chars, {
        opacity: 0.6,
        delay: 0.2,
        duration: 0.1,
        stagger: 0.04,
        ease: 'Quart.easeInOut'
    }, 0)
    loaderTl.from(splitTextBottom.chars, {
        opacity: 0.6,
        delay: 0.2,
        duration: 0.2,
        stagger: 0.04,
        ease: 'Quart.easeInOut'
    }, 0)
    loaderTl.to('.loading__wrapper', {
        opacity: 0,
        duration: 0.8,
        ease: 'Quart.easeInOut'
    }, 0.8)
    loaderTl.to('.loading__background', {
        opacity: 0,
        duration: 0.4,
        ease: 'Quart.easeInOut'
    }, 1.2)
    loaderTl.to('.loader', {
        display: 'none',
        duration: 0
    })

    
}

header()
headerScroll()

function init(){

    headerPanel()

    let navLinks = document.querySelectorAll('.nav__link--toggle')

    function updateSessionStorage()
    {
            let scroll = sessionStorage.getItem('scroll')

            if(scroll === 'play'){
                document.querySelector('body').classList.remove('overflow-hidden')
            } else {
                document.querySelector('body').classList.add('overflow-hidden')
            }
    }

    navLinks.forEach(item => {
        item.style.opacity = 1
    })

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
            load()
        },
        async leave(data) {
            return new Promise(resolve => {
                let leaveTl = gsap.timeline({
                    onComplete(){
                        resolve()
                    }
                })
                .to('.transition__wrapper', {
                    display: 'block',
                    duration: 0
                }, 0)
                .to('.transition__wrapper', {
                    opacity: 1,
                    duration: 0.2,
                }, 0)
                .to('.transition__wrapper', {
                    backgroundColor: 'rgba(26, 26, 26, 1)',
                    duration: 0.2,
                }, 0.1)
            })
            
        },
        async afterLeave() {
            let triggers = ScrollTrigger.getAll()
            triggers.forEach(function (trigger) {
                trigger.kill()
            })
        },
        async enter(data) {
            let enterTl = gsap.timeline()
            .to('.transition__wrapper', {
                backgroundColor: 'rgba(26, 26, 26, 0.6)',
                duration: 0.2,
            }, 0)
            .to('.transition__wrapper', {
                opacity: 0,
                duration: 0.2,
            }, 0.1)
            .to('.transition__wrapper', {
                display: 'none',
                duration: 0
            })
        },
        async after() {
            scroll()
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