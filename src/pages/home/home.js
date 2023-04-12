import gsap from 'gsap'

function home()
{

    /**
     * Cursor
     */
    // Cursor position
    const cursor = document.querySelector('.cursor')

    window.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        duration: 0.65,
        })
    })

    // Cursor hover animation
    let homeProjectsSection = document.querySelector('.section--home-projects')
    
    let homeProjectsHoverTl = gsap.timeline({ paused: true })
    .to('.cursor', {
        opacity: 1,
        ease: 'easeInOut',
        duration: 0.2,
    })

    homeProjectsSection.addEventListener('mouseenter', () => { homeProjectsHoverTl.play() })
    homeProjectsSection.addEventListener('mouseleave', () => { homeProjectsHoverTl.reverse() })

    /**
     * Video player
     */
    const videos = document.querySelectorAll('.home-projects__video')
    videos.forEach(item => {
        item.play()
    })

}

export default home