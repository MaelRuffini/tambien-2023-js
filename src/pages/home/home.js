import gsap from 'gsap'

function home()
{

    /**
     * Cursor
     */
    // Cursor position Projects
    const cursor = document.querySelector('.cursor')

    window.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        duration: 0.65,
        })
    })

    // Cursor hover animation Projects
    let homeProjectsSection = document.querySelector('.section--home-projects')
    
    let homeProjectsHoverTl = gsap.timeline({ paused: true })
    .to('.cursor', {
        opacity: 1,
        scale: 1,
        ease: 'easeInOut',
        duration: 0.2,
    })

    // Cursor position showreel
    const cursorShowreel = document.querySelector('.cursor--showreel')

    window.addEventListener('mousemove', (e) => {
      gsap.to(cursorShowreel, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        duration: 0.65,
        })
    })
    
    // Cursor hover animation
    const showreel = document.querySelector('.home-showreel')
    
    let showreelTl = gsap.timeline({ paused: true })
    .to('.cursor--showreel', {
        opacity: 1,
        scale: 1,
        ease: 'easeInOut',
        duration: 0.2,
    })

    showreel.addEventListener('mouseenter', () => { showreelTl.play() })
    showreel.addEventListener('mouseleave', () => { showreelTl.reverse() })


    // Cursor position showreel
    const cursorProject = document.querySelector('.cursor__project-wrapper')
    
    window.addEventListener('mousemove', (e) => {
      gsap.to(cursorProject, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        duration: 0.65,
        })
    })
        

    // Cursor hover animation Projects
    let cursorHoverProject = document.querySelector('.home-projects__cl-link--first')

    let cursorProjectTl = gsap.timeline({ paused: true })
    .to('.cursor__project-wrapper', {
        opacity: 1,
        scale: 1,
        ease: 'easeInOut',
        duration: 0.1,
    })

    cursorHoverProject.addEventListener('mouseenter', () => { cursorProjectTl.play() })
    cursorHoverProject.addEventListener('mouseleave', () => { cursorProjectTl.reverse() })

    /**
     * Video player
     */
    if(showreel){
        let playPromise = showreel.play()
        
        if (playPromise !== undefined) {
                playPromise.then(_ => {
                })
                .catch(error => {
                });
              }
    } else {
    }

    showreel.addEventListener('click', () => {

        if(showreel.classList.contains('home-showreel--sound')){
            showreel.muted = true
            showreel.classList.remove('home-showreel--sound')
        } else {
            showreel.muted = false
            showreel.classList.add('home-showreel--sound')
        }

    })


    const videos = document.querySelectorAll('.home-projects__video')

    if(videos){
        videos.forEach(item => {

            let playPromise = item.play()
    
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                })
                .catch(error => {
                });
              }
        })
    } else {

    }

}

export default home