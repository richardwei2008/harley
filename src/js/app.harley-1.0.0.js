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

        $(".zoom-control").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);
        $(".scroll-hint").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);

        var zoom = function() {
            return (function() {
                var zoom = $(".zoom-control");
                var back = $(".back-control");
                var view = $(".harley-zoom-view");
                var slider = $(".harley-description-panel");
                if (zoom.css("background-image").indexOf("zoom-in") > 0) {
                    zoom.css("background-image", "url(images/zoom-out.png)");
                    view.animate({opacity: 0}, 500, function() {
                        $(this).removeClass("zoom-view-in").addClass("zoom-view-out");
                        $(this).css("background-image", "url(images/harley01/harley-f.png)");
                    }).animate({opacity: 1}, 500);
//                    view.css("background-image", "url(images/harley01/harley-f.png)");
                    zoom.fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);
                    slider.fadeOut();
                    back.fadeOut();
                } else {
                    zoom.css("background-image", "url(images/zoom-in.png)");
                    view.animate({opacity: 0}, 500, function() {
                        $(this).removeClass("zoom-view-out").addClass("zoom-view-in");
                        $(this).css("background-image", "url(images/harley01/harley-c.png)");
                    }).animate({opacity: 1}, 500);
                    slider.fadeIn();
                    back.fadeIn();
                }
            })();
        };
        $(".harley-fill").addSwipeEvents().
            bind('doubletap', function(evt, touch) {
                // triggered for swipe events
                zoom();
        });
        $(".harley-zoom-view").addSwipeEvents().
            bind('doubletap', function(evt, touch) {
                // triggered for swipe events
                zoom();
            });
        $(".harley-fill").bind("dblclick", function() {
            zoom();
        });


    });
})();