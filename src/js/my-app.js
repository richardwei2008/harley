// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
    template7Data: {

    }
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    domCache: true //enable inline pages
});
myApp.onPageAfterAnimation('harley01', function(page){
    console.log("harley01 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley02', function(page){
    console.log("harley02 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley03', function(page){
    console.log("harley03 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley04', function(page){
    console.log("harley04 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley05', function(page){
    console.log("harley05 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley06', function(page){
    console.log("harley06 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley07', function(page){
    console.log("harley07 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley08', function(page){
    console.log("harley08 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley09', function(page){
    console.log("harley09 loaded");
    contentEffect();
});
myApp.onPageAfterAnimation('harley10', function(page){
    console.log("harley10 loaded");
    contentEffect();
});

var contentEffect = function() {
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

    $(".zoom-control").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);
    $(".scroll-hint").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);


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
}