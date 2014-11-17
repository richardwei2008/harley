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


    $(".view-panel").unbind("click").bind("click", function() {
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
}