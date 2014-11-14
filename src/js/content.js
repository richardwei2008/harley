(function() {
    $(".zoom-control").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);
    $(".scroll-hint").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);


    $(".view-panel").bind("click", function() {
        var control = $($(this).children(".zoom-control")[0]);
        if (control.css("background-image").indexOf("zoom-in") > 0) {
            control.css("background-image", "url(images/zoom-out.png)");
            $("#zoom-view").removeClass("zoom-view-in").addClass("zoom-view-out");
            $(".zoom-control").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);
        } else {
            control.css("background-image", "url(images/zoom-in.png)");
            $("#zoom-view").removeClass("zoom-view-out").addClass("zoom-view-in");
        }
    });
    var imgload = function (img, callback) {
        var timer = setInterval(function() {
            if (img.complete) {
                callback(img)
                clearInterval(timer)
            }
        }, 50)
    };
    var fadeIn = function(that){
        $(that).fadeIn("slow");
        $(that).attr("width", "100%");
    };
    var  lazyload = function() {
        return function(that) {
            var lazys = $(".lazy");

            $(lazys).each(function(i) {
                $(this).addClass("lazy-fade");
                $(this).removeClass("lazy-placerholder");
                this.src = $(this).attr("data-original");
                imgload(this, fadeIn);
//                        $(that).fadeIn("slow");
//                        $(that).attr("width", "100%");
            }, this);
        }(this);
    };

    $(".description-panel").scroll(function(){

        var boxTop = $(".description-panel").scrollTop(), docHeight  = $("#images").height(), boxHeight = $(".description-panel").height();
        var  scrolltrigger = 0.2;
        console.log("Box Top: " + boxTop);
        console.log("Box Height: " + boxHeight);
        console.log("Doc Height: " + docHeight );
        if  ((boxTop/(docHeight - boxHeight)) > scrolltrigger) {
            console.log('scroll trigger');
            lazyload();
        }
    });

    $(".back-control").bind("click", function() {
        $(".zoom-control").css("background-image", "url(images/zoom-in.png)");
        $("#zoom-view").removeClass("zoom-view-out").addClass("zoom-view-in");
        $(".description-panel").animate({ scrollTop: 0 }, "slow");
    });
})();