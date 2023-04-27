function desktop()
{
    
    let desktopBreakMax = parseInt(document.getElementById('desktop-breakpoint-max').value)
    let desktopFontMax = parseInt(document.getElementById('desktop-font-max').value)
    let desktopValueMax = 16
    let desktopRemMax = desktopFontMax / desktopValueMax
    
    let desktopBreakMin = parseInt(document.getElementById('desktop-breakpoint-min').value)
    let desktopFontMin = parseInt(document.getElementById('desktop-font-min').value)
    let desktopRemMin = Math.round((desktopFontMin / desktopRemMax) * 100) / 100

    let largeBreakMax = parseInt(document.getElementById('large-breakpoint-max').value)
    let largeFontMax = parseInt(document.getElementById('large-font-max').value)
    let largeRemMax = largeFontMax / desktopValueMax
    let largeValueMax = largeFontMax / desktopRemMax
    
    if (isNaN(desktopBreakMax)){
        desktopBreakMax = 0
    }
    if (isNaN(desktopFontMax)){
        desktopFontMax = 0
    }
    if (isNaN(desktopValueMax)){
        desktopValueMax = 0
    }
    if (isNaN(desktopRemMax)){
        desktopRemMax = 0
    }
    if (isNaN(desktopBreakMin)){
        desktopBreakMin = 0
    }
    if (isNaN(desktopFontMin)){
        desktopFontMin = 0
    }
    if (isNaN(desktopRemMin)){
        desktopRemMin = 0
    }
    
    document.querySelector('.c-desktop-breakpoint-max').innerHTML = desktopBreakMax    
    document.getElementById("c-desktop-font-max").innerHTML = desktopValueMax
        
    let rdesktopBreakMin = document.querySelectorAll('.c-desktop-breakpoint-min')
    rdesktopBreakMin.forEach(function(item){
        item.innerHTML = desktopBreakMin
    })
    let rdesktopBreakMinMax = document.getElementById('c-desktop-breakpoint-min-max').innerHTML = desktopBreakMax - desktopBreakMin
    let rValueMinMax = document.getElementById('c-desktop-value-min-max').innerHTML = Math.round((desktopValueMax - desktopRemMin) * 100) / 100
    let rValueMin = document.querySelectorAll('.c-desktop-value-min')
    rValueMin.forEach(function(item){
        item.innerHTML = desktopRemMin
    })

    let remMax = document.getElementById('desktop-rem-max').innerHTML = desktopValueMax
    let remMin = document.getElementById('desktop-rem-min').innerHTML = Math.round((desktopFontMin / desktopRemMax) * 100) / 100

    if (isNaN(remMax)){
        remMax = 0
    }
    if (isNaN(remMin)){
        remMin = 0
    }



    if (isNaN(largeBreakMax)){
        largeBreakMax = 0
    }
    if (isNaN(largeFontMax)){
        largeFontMax = 0
    }
    if (isNaN(largeValueMax)){
        largeValueMax = 0
    }
    if (isNaN(largeRemMax)){
        largeRemMax = 0
    }


    // let rlargeBreakMax = document.querySelector('.large-rBreakpoint-max').innerHTML = largeBreakMax
    let rlargeBreakMin = document.querySelectorAll('.c-large-breakpoint-min')
    rlargeBreakMin.forEach(function(item){
        item.innerHTML = desktopBreakMax
    })

    document.querySelector('.c-large-value-min').innerHTML = desktopValueMax
    document.getElementById('c-large-value-min-max').innerHTML = Math.round((largeValueMax - desktopValueMax) * 100) / 100
    document.getElementById('c-large-breakpoint-min-max').innerHTML = largeBreakMax - desktopBreakMax

    document.getElementById('large-rem-max').innerHTML = Math.round((largeValueMax) * 100) / 100
    document.getElementById('c-large-breakpoint-max').innerHTML = largeBreakMax
    document.getElementById('c-large-font-max').innerHTML = Math.round((largeValueMax) * 100) / 100


    document.getElementById('c-desktop-container-max').innerHTML = desktopBreakMax / desktopValueMax
    document.getElementById('c-large-container-max').innerHTML = largeBreakMax / largeValueMax

          

        

}

export default desktop