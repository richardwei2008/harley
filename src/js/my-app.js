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

    },
    // custom
    scrollTapped : false
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
    contentEffect("harley01");
});
myApp.onPageAfterAnimation('harley02', function(page){
    console.log("harley02 loaded");
    contentEffect("harley02");
});
myApp.onPageAfterAnimation('harley03', function(page){
    console.log("harley03 loaded");
    contentEffect("harley03");
});
myApp.onPageAfterAnimation('harley04', function(page){
    console.log("harley04 loaded");
    contentEffect("harley04");
});
myApp.onPageAfterAnimation('harley05', function(page){
    console.log("harley05 loaded");
    contentEffect("harley05");
});
myApp.onPageAfterAnimation('harley06', function(page){
    console.log("harley06 loaded");
    contentEffect("harley06");
});
myApp.onPageAfterAnimation('harley07', function(page){
    console.log("harley07 loaded");
    contentEffect("harley07");
});
myApp.onPageAfterAnimation('harley08', function(page){
    console.log("harley08 loaded");
    contentEffect("harley08");
});
myApp.onPageAfterAnimation('harley09', function(page){
    console.log("harley09 loaded");
    contentEffect("harley09");
});
myApp.onPageAfterAnimation('harley10', function(page){
    console.log("harley10 loaded");
    contentEffect("harley10");
});
myApp.onPageAfterAnimation('harley11', function(page){
    console.log("harley11 loaded");
    contentEffect("harley11");
});
myApp.onPageAfterAnimation('harley12', function(page){
    console.log("harley12 loaded");
    contentEffect("harley12");
});
myApp.onPageAfterAnimation('harley13', function(page){
    console.log("harley13 loaded");
    contentEffect("harley13");
});
myApp.onPageAfterAnimation('harley14', function(page){
    console.log("harley14 loaded");
    contentEffect("harley14");
});
myApp.onPageAfterAnimation('harley15', function(page){
    console.log("harley15 loaded");
    contentEffect("harley15");
});
myApp.onPageAfterAnimation('harley16', function(page){
    console.log("harley16 loaded");
    contentEffect("harley16");
});
myApp.onPageAfterAnimation('harley17', function(page){
    console.log("harley17 loaded");
    contentEffect("harley17");
});
myApp.onPageAfterAnimation('harley18', function(page){
    console.log("harley18 loaded");
    contentEffect("harley18");
});
myApp.onPageAfterAnimation('harley19', function(page){
    console.log("harley19 loaded");
    contentEffect("harley19");
});
myApp.onPageAfterAnimation('harley20', function(page){
    console.log("harley20 loaded");
    contentEffect("harley20");
});
myApp.onPageAfterAnimation('harley21', function(page){
    console.log("harley21 loaded");
    contentEffect("harley21");
});
myApp.onPageAfterAnimation('harley22', function(page){
    console.log("harley22 loaded");
    contentEffect("harley22");
});
myApp.onPageAfterAnimation('harley23', function(page){
    console.log("harley23 loaded");
    contentEffect("harley23");
});
myApp.onPageAfterAnimation('harley24', function(page){
    console.log("harley24 loaded");
    contentEffect("harley24");
});
myApp.onPageAfterAnimation('harley25', function(page){
    console.log("harley25 loaded");
    contentEffect("harley25");
});
myApp.onP

var contentEffect = function(pageId) {
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

    if (myApp.scrollTapped) {
        $(".swiper-mask").fadeOut();
    }
    $(".swiper-mask").bind("click", function() {
        myApp.scrollTapped = true;
        $(this).fadeOut();
    });
//    $(".zoom-control").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);
    $(".zoom-control").animate({opacity: 1}, 500).animate({opacity: 0.01}, 500).animate({opacity: 1}, 500).animate({opacity: 0.01}, 500);
//    $(".scroll-hint").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);


    var zoom = function() {
        return (function(pageId) {
            var zoom = $(".zoom-control");
            var back = $(".back-control");
            var view = $(".harley-zoom-view");
            var slider = $(".harley-description-panel");
            if (view.hasClass("zoom-view-in")) {
//                zoom.css("background-image", "url(images/zoom-out.png)");
                view.animate({opacity: 0}, 500, function() {
                    $(this).removeClass("zoom-view-in").addClass("zoom-view-out");
                    $(this).css("background-image", "url(images/" + pageId + "/harley-f.png)"); //  "url(images/harley01/harley-f.png)"
                }).animate({opacity: 1}, 500);
//                zoom.fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);
//                zoom.animate({opacity: 1}, 500).animate({opacity: 0.01}, 500).animate({opacity: 1}, 500).animate({opacity: 0.01}, 500);
                slider.fadeOut();
                back.fadeOut();
            } else {
//                zoom.css("background-image", "url(images/zoom-in.png)");
                view.animate({opacity: 0}, 500, function() {
                    $(this).removeClass("zoom-view-out").addClass("zoom-view-in");
                    $(this).css("background-image", "url(images/" + pageId + "/harley-c.png)"); //  "url(images/harley01/harley-c.png)"
                }).animate({opacity: 1}, 500);
                slider.fadeIn();
                back.fadeIn();
            }
        })(pageId);
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