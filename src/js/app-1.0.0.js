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
    init : function() {
        $(".item-title").bind("click", function() {
            var rollback =  $(".item-title-active").children(".menuitem-harley");
            var rollLayer = $(rollback).children(".menuitem-detail");
            $(rollback).children(".menuitem-shadow").fadeIn(500);
//            $(rollLayer).css("visibility", "hidden");
            $(rollLayer).css("opacity", "0");


            $(this).addClass("item-title-active");
            var layer =  $(this).children(".menuitem-harley");
            var activeLayer = $(layer).children(".menuitem-detail");
            $(activeLayer).css("opacity", "1");
            var maskLayer = $(activeLayer).children("a").children(".item-inner").children(".menuitem-mask");
            $(maskLayer).css("left", "auto");
            $(layer).children(".menuitem-shadow").fadeOut(500);
            $(maskLayer).animate({left:'-320px'}, 500);

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
