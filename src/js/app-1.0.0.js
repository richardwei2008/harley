App = {
    DEBUG : true,
    debug : function(obj) {
        return function() {
            if (App.DEBUG) {
                window.alert(obj);
            }
        }(obj);
    },

    checkMobile : function(sMobile) {
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){
            return false;
        }
        return true;
    },
    redirectTo : function(relativeTargetUri, openid) {
        return (function() {
//            var redirectToUrl = App.formatRedirectUriWithGlobalUserParam(globalUser, relativeTargetUri);
            var redirectToUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + "/" + relativeTargetUri;
            if (!$.isEmptyObject(openid)) {
                redirectToUrl = redirectToUrl + "?openid=" + openid;
            }
            App.debug("Redirect: " + redirectToUrl);
            window.location.href = redirectToUrl;
            window.event.returnValue = false;
            return false;
        }());

    },
    contentEffect : function() {
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

//        $(".back-control").bind("click", function() {
//            $(".zoom-control").css("background-image", "url(images/zoom-in.png)");
//            $("#zoom-view").removeClass("zoom-view-out").addClass("zoom-view-in");
//            $(".description-panel").animate({ scrollTop: 0 }, "slow");
//        });
    },
    init : function() {
        $(".item-link").bind("click", function() {
            setTimeout(function() {
                App.contentEffect();
            },  50);
        });

        $(".item-title").bind("click", function() {
            var rollback =  $(".item-title-active").children(".menuitem-harley");
            var activeLayer = $(rollback).children(".menuitem-detail");
            $(activeLayer).children("a").children(".item-inner").children(".menuitem-mask").css("left", "auto");
            $(activeLayer).css("visibility", "hidden");
            $(rollback).children(".menuitem-shadow").fadeIn(500);

            $(this).addClass("item-title-active");
            var layer =  $(this).children(".menuitem-harley");
            $(layer).children(".menuitem-shadow").fadeOut(500);
            var activeLayer = $(layer).children(".menuitem-detail");
            $(activeLayer).css("visibility", "visible");
            $(activeLayer).children("a").children(".item-inner").children(".menuitem-mask").animate({left:'-320px'}, 500);


        });
    }
};


(function () {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }

    function onBridgeReady() {

    };
})();


$(document).ready(function() {
    App.init();

    $(".loader").fadeOut("slow");
});
