function mobile()
{
    
    let mobileBreakMax = parseInt(document.getElementById('mobile-breakpoint-max').value)
    let mobileFontMax = parseInt(document.getElementById('mobile-font-max').value)
    let mobileValueMax = parseInt(document.getElementById('mobile-rem-max').value)
    let mobileRemMax = mobileFontMax / mobileValueMax
    let mobileBreakMin = parseInt(document.getElementById('mobile-breakpoint-min').value)
    let mobileFontMin = parseInt(document.getElementById('mobile-font-min').value)


    if (isNaN(mobileBreakMax)){
        mobileBreakMax = 0
    }
    if (isNaN(mobileFontMax)){
        mobileFontMax = 0
    }
    if (isNaN(mobileRemMax)){
        mobileRemMax = 0
    }
    if (isNaN(mobileBreakMin)){
        mobileBreakMin = 0
    }
    if (isNaN(mobileFontMin)){
        mobileFontMin = 0
    }

    let rMobileBreakMinMax = document.getElementById('c-mobile-breakpoint-min-max').innerHTML = mobileBreakMax - mobileBreakMin
    let mobileRemMin = document.getElementById('mobile-rem-min').innerHTML = Math.round((mobileFontMin / mobileRemMax) * 100) / 100
    
    if (isNaN(mobileRemMin)){
        mobileRemMin = 0
    }

    document.getElementById("c-mobile-breakpoint-min").innerHTML = mobileBreakMin
    let rMobileValueMinMax = document.getElementById('c-mobile-value-min-max').innerHTML = Math.round((mobileValueMax - mobileRemMin) * 100) / 100

    let rMobileValueMin = document.querySelectorAll('.c-mobile-value-min')
    rMobileValueMin.forEach(function(item){
            item.innerHTML = mobileRemMin
        })

    let rMobileBreakMin = document.querySelectorAll('.c-mobile-breakpoint-min')
    rMobileBreakMin.forEach(function(item){
        item.innerHTML = mobileBreakMin
    })



}

export default mobile