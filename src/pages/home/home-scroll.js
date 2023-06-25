import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/all'

function homeScroll()
{

    gsap.registerPlugin(ScrollTrigger, SplitText)

    let mm = gsap.matchMedia()

    /**
     * Title parallax
     */
    gsap.to('.home-hero__title-parallax', {
        yPercent: 30,
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

    gsap.to('.home-projects__cl-image--first', {
        yPercent: 35,
        ease: 'none',
        scrollTrigger:{
            trigger: '.home-projects__cl-image--first',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
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


    mm.add("(min-width: 768px)", () => {


        /**
         * Titles animations
         */
        let homeAboutTitles = document.querySelectorAll('.home-about__title-wrapper')

        homeAboutTitles.forEach(item => {

            gsap.from(item.querySelector('.home-about__title'), {
                yPercent: 120,
                rotate: 5,
                duration: 1.4,
                ease: 'Quart.easeInOut',
                scrollTrigger: {
                    trigger: '.home-about__title-container',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            })

        })


        /**
         * Footer parallax
         */
        let footerTl = gsap.timeline({
            scrollTrigger:{
                trigger: '.home-footer__wrapper',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        })
        .fromTo('.home-footer__news-wrapper--one', {
            y: '7rem',
            ease: 'none'
        }, {
            y: '-5rem'
        }, 0)
        .fromTo('.home-footer__news-wrapper--two', {
            y: '6rem',
            ease: 'none'
        }, {
            y: '-2rem',
            ease: 'none'
        }, 0)
        .fromTo('.home-footer__news-wrapper--three', {
            y: '6rem'
        }, {
            y: '-10rem',
            ease: 'none'
        }, 0)
        .fromTo('.home-footer__news-wrapper--four', {
            y: '6rem'
        }, {
            y: '-12rem',
            ease: 'none'
        }, 0)
        .fromTo('.home-footer__news-wrapper--five', {
            y: '10rem'
        }, {
            y: '-4rem',
            ease: 'none'
        }, 0)

    
    })


}

export default homeScroll