import desktop from './features/desktop'
import tablet from './features/tablet'
import mobile from './features/mobile'

function fluent()
{

    function initFluent(){

        Webflow.push(function() {
        
          document.getElementById('desktop-breakpoint-max').value = 1440;
          document.getElementById('desktop-font-max').value = 120;
          document.getElementById('desktop-breakpoint-min').value = 992;
          document.getElementById('desktop-font-min').value = 80;
        
          document.getElementById('tablet-breakpoint-max').value = 991;
          document.getElementById('tablet-font-max').value = 80;
          document.getElementById('tablet-breakpoint-min').value = 768;
          document.getElementById('tablet-font-min').value = 60;
          document.getElementById('tablet-rem-max').value = 16;
        
          document.getElementById('mobile-breakpoint-max').value = 479;
          document.getElementById('mobile-font-max').value = 40;
          document.getElementById('mobile-breakpoint-min').value = 240;
          document.getElementById('mobile-font-min').value = 20;
          document.getElementById('mobile-rem-max').value = 16;
        
          document.getElementById('large-breakpoint-max').value = 1920;
          document.getElementById('large-font-max').value = 150;
        
        })
    
    }

    function media() {
      desktop()
      tablet()
      mobile()
    }

    initFluent()
    setTimeout(() => { media() }, 250)
      
      
    document.addEventListener('keyup', media);
    
    function disableTablet()
    {
         
      this.x = ((this.x || 0) + 1)%2; 
        if(this.x){ 
          document.querySelector('.form__card-content--tablet').classList.add('disable')
          document.querySelector('.code--tablet').classList.add('hide')
          document.querySelector('.form__card--tablet').classList.add('form__card--disabled')
          }
          else{ 
          document.querySelector('.form__card-content--tablet').classList.remove('disable')
          document.querySelector('.code--tablet').classList.remove('hide')
          document.querySelector('.form__card--tablet').classList.remove('form__card--disabled')
          } 
    }
    
    function disableMobile()
    {
         
      this.x = ((this.x || 0) + 1)%2; 
        if(this.x){ 
          document.querySelector('.form__card-content--mobile').classList.add('disable')
          document.querySelector('.code--mobile').classList.add('hide')
          document.querySelector('.form__card--mobile').classList.add('form__card--disabled')
          }
          else{ 
          document.querySelector('.form__card-content--mobile').classList.remove('disable')
          document.querySelector('.code--mobile').classList.remove('hide')
          document.querySelector('.form__card--mobile').classList.remove('form__card--disabled')
          } 
    }
    
    function addLargeCard()
    {
       
        this.x = ((this.x || 0) + 1)%2; 
          if(this.x){ 
            document.querySelector('.code--max-desktop').classList.add('hide')
            document.querySelector('.code--max-large').classList.remove('hide')
            document.querySelector('.form__card--desktop').classList.add('form__card--desktop-large')
            }
            else{ 
            document.querySelector('.code--max-desktop').classList.remove('hide')
            document.querySelector('.code--max-large').classList.add('hide')
            document.querySelector('.form__card--desktop').classList.remove('form__card--desktop-large')
            } 
    }

    
    let fluentButton = document.querySelector('.button--fluent')
    let fluentImage = document.querySelector('.fluent__image')
    document.querySelector('.fluent__image').addEventListener("click", () => {

          document.querySelector('.fluent__video-container').classList.toggle('fluent__video-container--show')

    })
    fluentButton.addEventListener('click', () => { fluentImage.click() })
            
    // Click animation
    document.querySelector('.form__card__box-wrapper--tablet').addEventListener("click", disableTablet)
    document.querySelector('.form__card__box-wrapper--mobile').addEventListener("click", disableMobile)
    document.querySelector('.add-card__wrapper').addEventListener("click", addLargeCard)


}

export default fluent
