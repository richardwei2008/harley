(function() {
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop: false,
        grabCursor: true,
        paginationClickable: true,
        mode: 'horizontal'
//            onSlideClick: function(){
//                fileSelected( mySwiper.clickedSlideIndex );
//            }
    });

    $(document).ready(function() {

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


    });
})();