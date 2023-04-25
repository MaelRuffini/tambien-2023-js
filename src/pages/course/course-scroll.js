import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function courseScroll()
{

    gsap.registerPlugin(ScrollTrigger)

    /**
     * Title parallax
     */
    gsap.to('.course-hero__video-wrapper', {
        yPercent: -40,
        ease: 'none',
        scrollTrigger:{
            trigger: '.course-hero__wrapper',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    })

    
    /**
     * Instructor parallax
     */
        gsap.to('.course-instructor__image', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger:{
                trigger: '.course-instructor__image-wrapper',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })

}

export default courseScroll