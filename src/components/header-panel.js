import gsap from 'gsap'

function headerPanel()
{

    /**
     * Session storage
     */
    sessionStorage.setItem('scroll', 'play')

    let mm = gsap.matchMedia()

    // Desktop
    mm.add("(min-width: 767px)", () => {

        /**
        * Buttons animation
        */
        const buttons = document.querySelectorAll('.button')

        buttons.forEach(item => {

            let buttonsTl = gsap.timeline({ paused: true, repeat: 3, repeatDelay: 0.075 })
            .to(item.querySelector('.button__text'), {
                opacity: 0,
                duration: 0,
            })
            .to(item.querySelector('.button__text'), {
                opacity: 1,
                duration: 0,
                delay: 0.075
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
                duration: 0.3,
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


}

export default headerPanel