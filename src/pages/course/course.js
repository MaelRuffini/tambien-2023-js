import gsap from 'gsap'

function course()
{

    let mm = gsap.matchMedia()

    // Mobile
    mm.add("(max-width: 768px)", () => {

        let chaptersRows = document.querySelectorAll('.course-chapters__row')

        chaptersRows.forEach(item => {

            let chapterWrapper = item.querySelector('.course-chapters__chapter-wrapper')
            let chaptersBtn = item.querySelector('.course-chapters__card')
            let chapterLine = item.querySelector('.course-toggle__button-line--vertical')

            let chaptersRowTl = gsap.timeline({ paused: true, reversed: true })
            .to(chapterWrapper, {
                height: 'auto',
                duration: 0.8,
                ease: 'Quart.easeInOut'
            },0 )
            .to(chapterLine, {
                scaleY: 0,
                duration: 0.8,
                ease: 'Quart.easeInOut'
            },0 )

            chaptersRowTl.reverse(-1)
            chaptersBtn.addEventListener('click', () => { chaptersRowTl.reversed() ? chaptersRowTl.play() : chaptersRowTl.reverse() })

        })
 
    })


    /**
     * Video player
     */
    let video = document.querySelector('video')
    video.play()


    let videoBottom = document.querySelector('.course-video')

    if(videoBottom){
        videoBottom.forEach(item => {

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

export default course