function tablet()
{
    
    let tabletBreakMax = parseInt(document.getElementById('tablet-breakpoint-max').value)
    let tabletFontMax = parseInt(document.getElementById('tablet-font-max').value)
    let tabletValueMax = parseInt(document.getElementById('tablet-rem-max').value)
    let tabletRemMax = tabletFontMax / tabletValueMax
    let tabletBreakMin = parseInt(document.getElementById('tablet-breakpoint-min').value)
    let tabletFontMin = parseInt(document.getElementById('tablet-font-min').value)


    if (isNaN(tabletBreakMax)){
        tabletBreakMax = 0
    }
    if (isNaN(tabletFontMax)){
        tabletFontMax = 0
    }
    if (isNaN(tabletRemMax)){
        tabletRemMax = 0
    }
    if (isNaN(tabletBreakMin)){
        tabletBreakMin = 0
    }
    if (isNaN(tabletFontMin)){
        tabletFontMin = 0
    }

    let rTabletBreakMinMax = document.getElementById('c-tablet-breakpoint-min-max').innerHTML = tabletBreakMax - tabletBreakMin
    let tabletRemMin = document.getElementById('tablet-rem-min').innerHTML = Math.round((tabletFontMin / tabletRemMax) * 100) / 100
    
    if (isNaN(tabletRemMin)){
        tabletRemMin = 0
    }

    document.getElementById("c-tablet-breakpoint-min").innerHTML = tabletBreakMin
    let rTabletValueMinMax = document.getElementById('c-tablet-value-min-max').innerHTML = Math.round((tabletValueMax - tabletRemMin) * 100) / 100

    let rTabletValueMin = document.querySelectorAll('.c-tablet-value-min')
    rTabletValueMin.forEach(function(item){
            item.innerHTML = tabletRemMin
        })

    let rTabletBreakMin = document.querySelectorAll('.c-tablet-breakpoint-min')
    rTabletBreakMin.forEach(function(item){
        item.innerHTML = tabletBreakMin
    })



}

export default tablet