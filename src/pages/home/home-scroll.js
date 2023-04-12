import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function homeScroll()
{

    gsap.registerPlugin(ScrollTrigger)

    /**
     * Title parallax
     */
    gsap.to('.home-hero__title-parallax', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger:{
            trigger: '.home-hero__wrapper',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    })


    /**
     * Projects parallax
     */
    let homeProjects = document.querySelectorAll('.home-projects__cl-item')

    homeProjects.forEach(item => {

        gsap.to(item.querySelector('.home-projects__cl-image'), {
            yPercent: 35,
            ease: 'none',
            scrollTrigger:{
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

    })


    /**
     * Team picture parallax
     */
    gsap.to('.home-cta__image', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger:{
            trigger: '.home-cta__image-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    })

}

export default homeScroll