$(".container").animate({"width":"100%"},2000).animate({"height":"100vh"},3050,function () {
    $("h2").slideDown(1000,function(){
        

        elements=$(".col-md-4")
        for (let i=0; elements.length>i;i++){
           elements.eq(i).slideDown(1000)
        }
    
    })
    
})


