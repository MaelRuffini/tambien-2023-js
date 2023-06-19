function cs()
{
    
    let videos = document.querySelectorAll('.cs-hero__video')
    
    videos.forEach(item => {
        item.play()
    })


}

export default cs