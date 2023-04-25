import gsap from 'gsap'

function header()
{

    let mm = gsap.matchMedia()

    // Desktop
    mm.add("(min-width: 767px)", () => {

        /**
        * Buttons animation
        */
        const buttons = document.querySelectorAll('.button')

        buttons.forEach(item => {

            let buttonsTl = gsap.timeline({ paused: true, repeat: 2, repeatDelay: 0.2 })
            .to(item.querySelector('.button__text'), {
                opacity: 0,
                duration: 0,
            })
            .to(item.querySelector('.button__text'), {
                opacity: 1,
                duration: 0,
                delay: 0.25
            })
        
            item.addEventListener('mouseenter', () => { buttonsTl.restart() })
            item.addEventListener('mouseleave', () => { buttonsTl.pause(), item.querySelector('.button__text').style.opacity = '1' })

        })


        /**
         * Nav animations
         */
        const navLinks = document.querySelectorAll('.nav__link--toggle')
        const navContainers = document.querySelectorAll('.section--nav-content')

        let navArray = []
        
        for(let i = 0; i < navLinks.length; i++){

            navArray[i] = gsap.timeline({ paused: true, reversed: true })
            .to(navContainers[i], {
                display: 'flex',
                duration: 0
            }, 0)
            .from(navContainers[i], {
                opacity: 0,
                duration: 0.2,
            }, 0)
            .to(navLinks[i], {
                opacity: 0.5,
                duration: 0.2
            }, 0.1)
            .from(navContainers[i].querySelectorAll('.row'), {
                opacity: 0,
                yPercent: 50,
                duration: 0.2,
                stagger: 0.1
            }, 0.2)

        
            navArray[i].reverse(-1)

            navLinks[i].addEventListener('click', () => {
                if(navArray[i].reversed())
                {
                    navArray.forEach(item => {
                        if(item.reversed())
                        {
                            return
                        } else{
                            item.reverse()
                        }
                    })
                    navArray[i].play()
                    sessionStorage.setItem('scroll', 'stop')
                } else{
                    navArray[i].reverse()
                    sessionStorage.setItem('scroll', 'play')
                }
            })

            navContainers[i].querySelector('.nav-content__background').addEventListener('click', () => { navLinks[i].click() })

        }


    })

    // Phone
    mm.add("(max-width: 767px)", () => {


        /**
         * Navigation animations
         */

        // Open navigation
        let burgerBtn = document.querySelector('.nav__burger-wrapper')

        let burgerTl = gsap.timeline({ paused: true, reversed: true })
        .to('.nav', {
            display: 'block',
            duration: 0
        })
        .from('.nav', {
            opacity: 0,
            duration: 0.15,
        })
        .from('.nav__link-toggle', {
            opacity: 0,
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

        toggleBtns.forEach(item => {

            let btn = item.querySelector('.nav-toggle__title-wrapper')

            let toggleTl = gsap.timeline({ paused: true, reversed: true })
            .to(item.querySelector('.nav-toggle__content'), {
                height: 'auto',
                duration: 0.6,
                ease: 'Quart.easeInOut'
            }, 0)
            .to(btn.querySelector('.toggle__button-line--vertical'), {
                scaleY: 0,
                duration: 0.3,
                ease: 'Quart.easeInOut'
            }, 0)

            btn.addEventListener('click', () => { toggleTl.reversed() ? toggleTl.play() : toggleTl.reverse() })

        })
        

    })
    
}

export default header