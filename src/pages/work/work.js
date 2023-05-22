import gsap from "gsap"

function work()
{
    let mm = gsap.matchMedia()

    // Desktop
    mm.add("(min-width: 992px)", () => {

        let projectLinks = document.querySelectorAll('.work-hero__grid-link')

        projectLinks.forEach(item => {

            let images = item.querySelectorAll('.work-hero__image')
            let title = item.querySelector('.work-hero__info-title')
            let text = item.querySelector('.work-hero__info-text')

            let projectsTl = gsap.timeline({ paused: true, repeat: -1, defaults:{ ease: 'none'} })
            .to(images[0], {
                display: 'block',
                ease: 'none',
                duration: 0.2
            }, 0)
            .to([images[1], images[2], images[3], images[4]], {
                display: 'none',
                ease: 'none',
                duration: 0.2
            }, 0)
            .to(images[1], {
                display: 'block',
                ease: 'none',
                duration: 0.2
            }, 0.2)
            .to([images[0], images[2], images[3], images[4]], {
                display: 'none',
                ease: 'none',
                duration: 0.2
            }, 0.2)
            .to(images[2], {
                display: 'block',
                ease: 'none',
                duration: 0.2
            }, 0.4)
            .to([images[0], images[1], images[3], images[4]], {
                display: 'none',
                ease: 'none',
                duration: 0.2
            }, 0.4)
            .to(images[3], {
                display: 'block',
                ease: 'none',
                duration: 0.2
            }, 0.6)
            .to([images[0], images[1], images[2], images[4]], {
                display: 'none',
                ease: 'none',
                duration: 0.2
            }, 0.6)
            .to(images[4], {
                display: 'block',
                ease: 'none',
                duration: 0.2
            }, 0.8)
            .to([images[0], images[1], images[2], images[3]], {
                display: 'none',
                ease: 'none',
                duration: 0.2
            }, 0.8)


            item.addEventListener('mouseenter', () => { projectsTl.restart() })
            item.addEventListener('mouseleave', () => {
                projectsTl.pause()
                images.forEach(image => {
                    image.style.display = 'none'
                    title.style.opacity = '1'
                    text.style.opacity = '1'
                })
                item.querySelector('.work-hero__image').style.display = 'block'
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