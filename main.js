$(document).ready(function () {

    var next = $(".next");
    var prev = $(".prev");
    var imgFirst = $(".slider-wrapper .images img.first");
    var imgLast = $(".slider-wrapper .images img.last");
    var circleFirst = $(".nav > i.first");
    var circleLast = $(".nav > i.last");
    
//Cambiare immagie cliccando sulle freccie
    next.click(function(){

        if(($(".slider-wrapper .images img.active").hasClass("last"))){
            imgLast.removeClass("active");
            imgFirst.addClass("active");
            circleLast.removeClass("active");
            circleFirst.addClass("active");
        
        }else{
            $(".slider-wrapper .images img.active").next().addClass("active");
            $(".slider-wrapper .images img.active").prev("img.active").removeClass("active");
            $(".nav > i.active").next().addClass("active");
            $(".nav > i.active").prev(".active").removeClass("active");
        }
    });

    prev.click(function(){  
        
        if(($(".slider-wrapper .images img.active").hasClass("first"))){
            imgLast.addClass("active"); 
            imgFirst.removeClass("active");
            circleLast.addClass("active");
            circleFirst.removeClass("active");;

        }else{
            $(".slider-wrapper .images img.active").prev("img").addClass("active");
            $(".slider-wrapper .images img.active").next().removeClass("active");
            $(".nav > i.active").prev(".nav > i").addClass("active");
            $(".nav > i.active").next().removeClass("active");
           
        }
    });

//Cambiare le immagini con i tasti freccia
    $(document).on("keydown",function (e) { 
        var code = e.keyCode || e.wich;
        if( code == 39 ) {
            next.trigger( "click" );
        }
        if( code == 37 ) {
            prev.trigger( "click" );
        }
        e.preventDefault()
    });



    //BONUS//Selezione le foto con i pallini
    var dots = $(".nav > i");
    var immaginiArray = $("img").siblings().get(); //crea array immagini

   dots.click(function(){
    //Trova l'indice dell'elemento
    var dotIndex = $(this).index();
    //Selezione dot corrente
    var currentDot = $(this);
    //console.log(currentDot , dotIndex );
    
    dots.removeClass("active");
    currentDot.addClass("active");
    console.log(immaginiArray[dotIndex]);
    $("img.active").removeClass("active");
    $(immaginiArray[dotIndex]).addClass("active");
   });

});