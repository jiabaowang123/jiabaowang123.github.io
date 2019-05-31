(function () {
    var utils = {};
    // UA 判断  提供了全局对象netease.ua， 如：netease.ua.ios 即可调用
    utils.parseUA = function () {
        var u = navigator.userAgent;
        var u2 = navigator.userAgent.toLowerCase();
        return { //移动终端版本信息
            mobile: !!u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为移动终端
            pc: !u.match(/(iPhone|iPod|Android|ios|Mobile)/i), //是否为pc终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //是否为ios终端
            android: u.indexOf('Android') > -1, //是否为android终端
            weixin: u2.match(/MicroMessenger/i) == "micromessenger", //是否为微信客户端
        };
    };

    //判断手机横竖屏状态, 如需屏蔽掉横屏提示，在body上自定义声明 landscape = "no" 属性;
    utils.landscape = function () {
        var orienter_tip = document.createElement("div");
        orienter_tip.style.cssText = "width:100%;height:100%;position:fixed;left:0px;top:0px;z-index:999999999;background:#000 url(http://go.163.com/2015/public/common/image/tip.png) no-repeat center center;display:none;";
        setTimeout(function () {
            document.body.appendChild(orienter_tip);
        }, 200);

        function updateOrientation() {
            if (document.body.getAttribute("landscape") == "no") {
                return
            }
            if (window.orientation === 180 || window.orientation === 0) {
                setTimeout(function () {
                    orienter_tip.style.display = "none";
                }, 250);
            }
            if (window.orientation === 90 || window.orientation === -90) {
                setTimeout(function () {
                    orienter_tip.style.display = "block";
                }, 250);
            }
        }
        updateOrientation();
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", updateOrientation, false);
    };


    // 动态加载js文件方法
    utils.jsLoad = function (_files, success) {
        var FileArray = _files;
        var cacheArray = [];
        var loadFile = function (url, success) {
            if (!FileIsExt(cacheArray, url)) {
                var fileObj = document.createElement("script");
                fileObj.type = "text/javascript";
                fileObj.src = url;
                success = success || function () {
                };
                fileObj.onload = fileObj.onreadystatechange = function () {
                    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                        success();
                        cacheArray.push(url);
                    }
                };
                document.body.appendChild(fileObj);
            } else {
                success();
            }
        };
        var FileIsExt = function (FileArray, _url) {
            if (FileArray != null && FileArray.length > 0) {
                var len = FileArray.length;
                for (var i = 0; i < len; i++) {
                    if (FileArray[i] == _url) {
                        return true;
                    }
                }
            }
            return false;
        };
        if (FileArray.length > 0) {
            var LoadedCount = 0;
            for (var i = 0; i < FileArray.length; i++) {
                loadFile(FileArray[i], function () {
                    LoadedCount++;
                    if (LoadedCount == FileArray.length) {
                        if (typeof success == "function") {
                            success();
                        }
                    }
                });
            }
        }
    };
    //移动端分享
    utils.share = function () {
        var ua = utils.parseUA();

        window.NeteaseShareInit = function () {
            if (ua.weixin) NeteasesShareInit_weixin();
        };

        window.NeteaseShare = function (popupCallBack, noSina) {
            if (ua.weixin) {
                if (popupCallBack) popupCallBack();
            } else {
                if (noSina) {
                    if (popupCallBack) popupCallBack();
                }
            }
        };

        //微信
        var NeteasesShareInit_weixin = function () {
            var onBridgeReady = function () {
                WeixinJSBridge.call('showOptionMenu');
                WeixinJSBridge.call('hideToolbar');
                // 发送给好友;
                WeixinJSBridge.on('menu:share:appmessage', function (argv) {
                    WeixinJSBridge.invoke('sendAppMessage', {
                        "appid": window.shareData.appId,
                        "img_url": window.shareData.MsgImg,
                        "img_width": "120",
                        "img_height": "120",
                        "link": window.shareData.link,
                        "desc": window.shareData.desc,
                        "title": window.shareData.title
                    }, window.shareData.callback);
                });
                // 分享到朋友圈;
                WeixinJSBridge.on('menu:share:timeline', function (argv) {
                    (shareData.callback)();
                    WeixinJSBridge.invoke('shareTimeline', {
                        "img_url": window.shareData.MsgImg,
                        "img_width": "120",
                        "img_height": "120",
                        "link": window.shareData.link,
                        "desc": window.shareData.fText,
                        "title": window.shareData.fText
                    }, window.shareData.callback);
                });
            };
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        };
    };

    //获取链接参数方法   getPara("参数名");
    utils.getPara = function (paraName) {
        var urlPara = location.search;
        var reg = new RegExp("[&|?]" + paraName + "=([^&$]*)", "gi");
        var a = reg.test(urlPara);
        return a ? RegExp.$1 : "";
    };

    // 自动播放音乐视频 传入参数id即可
    utils.autoPlay = function (id) {
        var audio = document.getElementById(id);
        var play = function () {
            audio.play();
            document.removeEventListener("touchstart", play, false);
        };
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function () {
            play();
        }, false);
        document.addEventListener("touchstart", play, false);
    };
	//sunland.autoPlay('')
	





    //手机号格式检测 传入参数input id
    utils.phoneTest = function (id) {
        var phoneInput = document.getElementById(id);
        var inputValue = phoneInput.value;
        // console.log(inputValue)
        var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        //if逻辑
        if (!myreg.test(inputValue))
            return false;
        else {
            return inputValue
        }
    };

	//sunland.phoneTast('')
	utils.autoSubmit=function(e,id){
        if(utils.phoneTest(id)){
            utils.formSubmit(e,id,'stPhone')
        }else{
            utils.formSubmit(e,id,'wechat')
        }
    };
	

    //15天循环倒计时
    utils.lastTime = function (id) {
        var getLastDay= Math.ceil((60 * 60 * 24 * 1000 * 15 - (new Date().getTime()) % (60 * 60 * 24 * 1000 * 15)) / (60 * 60 * 24 * 1000));
        for(var r=0;r<document.getElementsByClassName(id).length;r++){
            document.getElementsByClassName(id)[r].innerHTML =getLastDay
        }
    };
	//sunland.lastTime('span的id')





    //表单留言提交
    utils.formSubmit = function (e, id, submitType,callback) {
        // var bool=submitType=='stPhone'||'wechat';
        // console.log(bool)
        if (submitType !== 'stPhone' && submitType !== 'wechat' && submitType !== 'wechat') {
            alert('提交方式错误，请选择stPhone或wechat');
            return false;
        } else {
            switch (submitType) {
                case 'stPhone':
                    if (utils.phoneTest(id)) {
                        alert('恭喜您提交成功');
                        interactive.submitMsg(e, 'stPhone', utils.phoneTest(id), '手机留言发起');
                        callback();
                        document.getElementById(id).value = '';
                    } else {
                        alert('请输入有效手机号码');
                    }
                    break;
                case 'wechat':
                    var wechatValue = document.getElementById(id).value;
                    if (wechatValue !== "") {
                        alert('恭喜您提交成功');
                        interactive.submitMsg(e, 'wechat', wechatValue, '微信留言发起');
                        callback();

                        document.getElementById(id).value = '';
                    } else {
                        alert('请输入您的微信号');
                    }
                    break;
            }
        }
    };
	//sunland.formSubmit(e,'input','wechat/stPhone')
	
	
	

    //倒计时 起始和截止倒计时
    utils.endTime = function () {
        var mayDate = new Date();//获取日期
        var curMonth = mayDate.getMonth();//获取月份(0-11,0代表1月)
        var curDate = mayDate.getDate();  //获取日期
        var mytime = mayDate.toLocaleTimeString();// //获取当前时间
        var week = mayDate.getDay();
        weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        curMonth += 1;
        /*取得当前月份有几天*/
        var date = new Date();
        //获取年份
        var year = date.getFullYear();
        //获取当前月份
        var mouth = date.getMonth() + 1;
        //定义当月的天数；
        var days;
        //当月份为二月时，根据闰年还是非闰年判断天数
        if (mouth == 2) {
            days = year % 4 == 0 ? 29 : 28;
        }
        else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
            //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
            days = 31;
        }
        else {
            //其他月份，天数为：30.
            days = 30;
        }
        //+-------修改时间规律
        if (weekDay[week] === "星期一") {
            curDate += 2
        }
        else if (weekDay[week] === "星期二") {
            curDate += 1;
        }
        else if (weekDay[week] === "星期三") {
            curDate += 0;
            //curDate = days;
        }
        else if (weekDay[week] === "星期四") {
            curDate += 1;
        }
        else if (weekDay[week] === "星期五") {
            curDate += 0;
        }
        else if (weekDay[week] === "星期六") {
            curDate += 1;
        }
        //当月是30天
        if (days == 30 || days == 31) {
            if (days - curDate < 0) {//超过当月天数
                curDate -= days;
                curMonth += 1;//把月份调到下个月份
                if (curMonth == 13) {
                    curMonth = 1;
                    year += 1;
                }
            } else {
                curDate;
                curMonth;
            }
        }
        var curYear = year;
		//设置活动时间段的起始时间
        var curDate_start = 1;//固定设置1日
        var curMonth_start;
        var curYear_start = curYear;
        if (curMonth == 1) {
            curMonth_start = 12;
            curYear_start--;
        } else {
            curMonth_start = curMonth - 1;
        }

        var nowTime=new Date(curYear_start, curMonth_start, curDate_start, 18, 0, 0);
        var nowGetTime=nowTime.getTime();
        var endTime=new Date(curYear, curMonth, curDate, 18, 0, 0);
        var endGetTime=endTime.getTime();
        var arr=[nowGetTime,endGetTime-nowGetTime];
        return arr;

    };
	//sunland.endTime('kong','')
    //倒计时 现在截止 倒计时前三天
    utils.nowTimeStop = function (startYear, startMonth, startDay, endYear, endMonth, endDay) {
        var mayDate = new Date();//获取日期
        var curMonth = mayDate.getMonth();//获取月份(0-11,0代表1月)
        var curDate = mayDate.getDate();  //获取日期
        var mytime = mayDate.toLocaleTimeString();// //获取当前时间
        var week = mayDate.getDay();
        weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        curMonth += 1;
        /*取得当前月份有几天*/
        var date = new Date();
        //获取年份
        var year = date.getFullYear();
        //获取当前月份
        var mouth = date.getMonth() + 1;
        //定义当月的天数；
        var days;
        //当月份为二月时，根据闰年还是非闰年判断天数
        if (mouth == 2) {
            days = year % 4 == 0 ? 29 : 28;
        }
        else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
            //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
            days = 31;
        }
        else {
            //其他月份，天数为：30.
            days = 30;
        }
        //+-------修改时间规律
        if (weekDay[week] === "星期一") {
            curDate += 2
        }
        else if (weekDay[week] === "星期二") {
            curDate += 1;
        }
        else if (weekDay[week] === "星期三") {
            // curDate += 3;
            //curDate = days;
        }
        else if (weekDay[week] === "星期四") {
            curDate += 1;
        }
        else if (weekDay[week] === "星期五") {
            // curDate += 3;
        }
        else if (weekDay[week] === "星期六") {
            curDate += 1;
        }
        //当月是30天
        if (days == 30 || days == 31) {
            if (days - curDate < 0) {//超过当月天数
                curDate -= days;
                curMonth += 1;//把月份调到下个月份
                if (curMonth == 13) {
                    curMonth = 1;
                    year += 1;
                }
            } else {
                curDate;
                curMonth;
            }
        }
        var curYear = year;

        var curMonth_start;
        var curYear_start = curYear;
        if (curMonth == 1) {
            curMonth_start = 12;
            curYear_start--;
        } else {
            curMonth_start = curMonth - 1;
        }
        

        //设置活动时间段的起始时间
        if(curDate-3<0){
            if(curMonth_start==1||curMonth_start==3||curMonth_start==5||curMonth_start==7||curMonth_start==8||curMonth_start==10||curMonth_start==12){
                var curDate_start = 31-(2-curDate) ;//固定设置1日
            }else if (curMonth_start==2) {
                 var curDate_start = 28-(2-curDate) ;//固定设置1日
            }else{
                var curDate_start = 30-(2-curDate) ;//固定设置1日
            }
        }else{
                var curDate_start = curDate-2 ;//固定设置1日
                curMonth_start = curMonth;

        }
            console.log(curDate_start)


        for(var i=0;i<document.getElementsByClassName(startYear).length;i++){
            document.getElementsByClassName(startYear)[i].innerHTML=curYear_start;
        }
        for(var o=0;o<document.getElementsByClassName(startMonth).length;o++){
            document.getElementsByClassName(startMonth)[o].innerHTML=curMonth_start;
        }
        for(var p=0;p<document.getElementsByClassName(startDay).length;p++){
            document.getElementsByClassName(startDay)[p].innerHTML=curDate_start;
        }
        for(var u=0;u<document.getElementsByClassName(endYear).length;u++){
            document.getElementsByClassName(endYear)[u].innerHTML= curYear;
        }
        for(var y=0;y<document.getElementsByClassName(endMonth).length;y++){
            document.getElementsByClassName(endMonth)[y].innerHTML=curMonth;
        }
        for(var t=0;t<document.getElementsByClassName(endDay).length;t++){
            document.getElementsByClassName(endDay)[t].innerHTML=curDate;
        }

    };
	
	
    //小能发起
    utils.xiaoneng = function (e, desc) {
        desc == undefined ? desc = '小能发起' : desc;
        interactive.openNtkf(e, desc);
        console.log(desc)
    };
	//sunland.xiaoneng
	
    //大熊发起
    utils.daxiong = function (e, desc) {
        desc == undefined ? desc = '大熊发起' : desc;
        interactive.openGreatBear(e, desc);
    };
    // 初始化方法
    utils.init = function () {
        window.sunland = utils; // 对外提供netease对象
        window.sunland.ua = utils.parseUA(); //对外提供了UA方法
        utils.landscape(); // 横屏提示
        utils.share(); // 分享代码
    };
    utils.init();
})();