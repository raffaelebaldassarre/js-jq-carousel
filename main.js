$(document).ready(function () {

    /*$(".next").click(function(){

        $("img.active").addClass("disactive");
        $("img.active + img").addClass("active");
        $("img.disactive").removeClass("active");   
    });

    $(".prev").click(function(){       
        $("img.active").prev("img.disactive").addClass("active").removeClass("disactive");
        $("img.active + img").removeClass("active");
        
    }); */

var next = $(".next");
var prev = $(".prev");

    next.click(function(){

        if(($(".slider-wrapper .images img.active").hasClass("last"))){
 
            $(".slider-wrapper .images img.last").removeClass("active");
            $(".slider-wrapper .images img.first").addClass("active"); 
          
        }else{

            $(".slider-wrapper .images img.active").next().addClass("active");
            $(".slider-wrapper .images img.active").prev("img.active").removeClass("active");
        }

    });

    

    prev.click(function(){  
        
        if(($(".slider-wrapper .images img.active").hasClass("first"))){

            $(".slider-wrapper .images img.last").addClass("active"); 
            $(".slider-wrapper .images img.first").removeClass("active");

        }else{

            $(".slider-wrapper .images img.active").prev("img").addClass("active");
            $(".slider-wrapper .images img.active").next().removeClass("active");
           
        }

    });


});

