
(function () {
	if (document.addEventListener) {
		document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
	} else if (document.attachEvent) {
		document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
		document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
	}
    function onBridgeReady() {
        // 发送给好友;
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', makeContext(), function (res) {});
        });
        // 分享到朋友圈;
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', makeContext(), function (res) {});
        });
        WeixinJSBridge.call('showOptionMenu');
    };
    makeContext = function() {
        return (function() {
            var context = {
                "img_url" : "http://so1699.qiniudn.com/share.jpg",
                "img_width" : "128",
                "img_height" : "128",
                "link" : window.location.href.substring(0, window.location.href.lastIndexOf('/')) + "/index.html",
                "desc" : "抛开一切，畅快骑行 SCREW IT LET'S RIDE",
                "title" : "2015 哈雷戴维森新产品发布会"
            };
            return context;
        })();
    };
})();

function isWeiXin() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	};

function addWxContact(wxid) {      
	if (typeof WeixinJSBridge == 'undefined') return false;          
		WeixinJSBridge.invoke('addContact', {              
		webtype: '1',              
		username: 'gh_e5430c6431e7'          
	},  function(d) {             
		 // 返回d.err_msg取值，d还有一个属性是err_desc
            // add_contact:cancel 用户取消
            // add_contact:fail　关注失败
            // add_contact:ok 关注成功
            // add_contact:added 已经关注
            WeixinJSBridge.log(d.err_msg);
            cb && cb(d.err_msg);
			});
};
