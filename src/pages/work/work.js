import gsap from "gsap"

function work()
{
    let mm = gsap.matchMedia()

    // Desktop
    mm.add("(min-width: 992px)", () => {

        let projectLinks = document.querySelectorAll('.work-hero__grid-link')

        projectLinks.forEach(item => {

            let images = item.querySelectorAll('.work-hero__image--animation')
            let title = item.querySelector('.work-hero__info-title')
            let text = item.querySelector('.work-hero__info-text')

            let projectsTl = gsap.timeline({ paused: true })
            .to(images, {
                display: 'block',
                stagger: 0.2,
                ease: 'none'
            }, 0)
            .to([title, text], {
                opacity: 0.3,
                duration: 0,
                ease: 'Quart.easeInOut'
            }, 0)

            item.addEventListener('mouseenter', () => { projectsTl.restart() })
            item.addEventListener('mouseleave', () => {
                projectsTl.pause()
                images.forEach(image => {
                    image.style.display = 'none'
                    title.style.opacity = '1'
                    text.style.opacity = '1'
                })
            })

        })


        let projects = document.querySelectorAll('.work-hero__grid-element')
        projects.forEach(item => {

            let cursor = item.querySelector('.work-hero__cursor')

            item.addEventListener('mouseenter', () => { cursor.style.display = 'flex' })
            item.addEventListener('mouseleave', () => { cursor.style.display = 'none' })
        })

    })
    
}

export default work