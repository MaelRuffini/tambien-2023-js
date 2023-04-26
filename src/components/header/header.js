import gsap from 'gsap'

function header()
{

    let mm = gsap.matchMedia()

    // Phone
    mm.add("(max-width: 767px)", () => {


        /**
         * Navigation animations
         */

        // Open navigation
        let burgerBtn = document.querySelector('.nav__burger-wrapper')

        let burgerTl = gsap.timeline({ paused: true, reversed: true })
        .fromTo('.nav', {
            display: 'none',
        }, {
            display: 'block',
            duration: 0
        })
        .fromTo('.nav', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.15,
        })
        .fromTo('.nav__link-toggle', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.15,
            stagger: 0.1
        })

        burgerTl.reverse(-1)
        burgerBtn.addEventListener('click', () => {
            if(burgerTl.reversed()){
                burgerTl.play()
                sessionStorage.setItem('scroll', 'stop')
            } else {
                burgerTl.reverse() 
                sessionStorage.setItem('scroll', 'play')
                }
        })

        // Toggle
        let toggleBtns = gsap.utils.toArray('.nav__link-toggle--dropdown')
        let toggleLinks = gsap.utils.toArray('.nav-toggle__link')
    
        toggleBtns.forEach(item => {

            let btn = item.querySelector('.nav-toggle__title-wrapper')

            let toggleTl = gsap.timeline({ paused: true, reversed: true })
            .fromTo(item.querySelector('.nav-toggle__content'), {
                height: 0,
            },{
                height: 'auto',
                duration: 0.6,
                ease: 'Quart.easeInOut'
            }, 0)
            .fromTo(btn.querySelector('.toggle__button-line--vertical'), {
                scaleY: 1,
            },{
                scaleY: 0,
                duration: 0.3,
                ease: 'Quart.easeInOut'
            }, 0)

            btn.addEventListener('click', () => { toggleTl.reversed() ? toggleTl.play() : toggleTl.reverse() })
            
        })

        toggleLinks.forEach(item => {
            item.addEventListener('click', () => {
                if(burgerTl.reversed()){
                    return
                } else {
                    burgerTl.reverse() 
                    sessionStorage.setItem('scroll', 'play')
                    }
            })
        })

        document.querySelector('.nav__logo').addEventListener('click', () => {
            if(burgerTl.reversed()){
                return
            } else {
                burgerTl.reverse() 
                sessionStorage.setItem('scroll', 'play')
                }
        })

        document.querySelector('.nav__link--first').addEventListener('click', () => {
            if(burgerTl.reversed()){
                return
            } else {
                burgerTl.reverse() 
                sessionStorage.setItem('scroll', 'play')
                }
        })

        document.querySelector('.button--nav').addEventListener('click', () => {
            if(burgerTl.reversed()){
                return
            } else {
                burgerTl.reverse() 
                sessionStorage.setItem('scroll', 'play')
                }
        })
        

    })
    
}

export default header