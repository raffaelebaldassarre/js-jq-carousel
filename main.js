$(document).ready(function () {

    var next = $(".next");
    var prev = $(".prev");
    var imgFirst = $(".slider-wrapper .images img.first");
    var imgLast = $(".slider-wrapper .images img.last");
    var circleFirst = $(".nav > i.first");
    var circleLast = $(".nav > i.last");
    

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

    $("body").keydown(function (e) { 
        var code = e.keyCode;
        if( code == 39 ) {
            $(".next").trigger( "click" );
        }
        if( code == 37 ) {
            $(".prev").trigger( "click" );
        }
    });
    
});