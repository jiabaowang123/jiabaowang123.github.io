// 在全局范围内创建主动画控制器与子动画控制器
var myAC_main1 = new animateControl("main1_ani_");
var myAC_child1 = new animateControl("child1_ani_");
// 在文档结构加载完成之后，载入swiper幻灯片，并初始化所有的动画控制器
window.onload = function () {

    // 第 1 个子swiper幻灯片
    var mySwiper_child1 = new Swiper('.swiper-container-child1', {
        direction: 'horizontal',
        grabCursor: true,
        // loop: true,
        noSwiping: true,
        paginationClickable: true,
        paginationElement: 'li',
        nextButton: '.swiper-button-next-child1',
        prevButton: '.swiper-button-prev-child1',
        pagination: '.swiper-pagination-main1',

        onInit: function (swiper) {
            myAC_child1.init(swiperAnimateParam_child1, swiper);
        },
        onSlideChangeStart: function (swiper) {
            myAC_child1.play();
        },
    });

    // 主swiper幻灯片
    var mySwiper = new Swiper('.swiper-container-main1', {
        direction: 'vertical',
        grabCursor: true,
        // loop: true,
        // nextButton: '.swiper-button-next',
        onInit: function (swiper) {
            myAC_main1.init(swiperAnimateParam_main1, swiper);
            myAC_main1.addChild(1, myAC_child1);
            myAC_main1.play(); // 如果页面中未使用Loading效果，则必须取消本行代码的注释，以开启myAC_main1主动画控制器中动画的播放
        },
        onSlideChangeEnd: function (swiper) {
            myAC_main1.play();
        },
        onSlideChangeStart: function (swiper) {
            if (mySwiper.activeIndex != 0) {
                $('nav').addClass('navActive')
            } else {
                $('nav').removeClass('navActive')
            }

            $('#navUl>li').eq(mySwiper.activeIndex).addClass('activeState').siblings().removeClass("activeState");

            $('nav div.navBox>span').css('transform', 'translateX(' + mySwiper.activeIndex * 170 + 'px)')
        },
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheelControl: true,
        noSwiping: true,
        speed: 800,
    });

    $('.selectDownButtonBox').click(function(){
        mySwiper.slideNext();
    })
    $('#navUl>li').click(function (e) {
        var index=$(this).index();
        mySwiper.slideTo(index)
    });

    // news swiper幻灯片
    var newsSwiper = new Swiper('.swiper-container-news', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: 3000,
        speed: 300,
    });


    // nav top hover line
    var leverWidth = 170;
    $('nav div.navBox ul li').hover(
        function () {
            var index = $(this).index();
            $('nav div.navBox>span').css('transform', 'translateX(' + index * leverWidth + 'px)')
        }, function () {
            // $('nav div.navBox>span').css('transform', 'translateX(0px)')
        });
    $('nav div.navBox ul li').click(function (e) {
        $(this).addClass('activeState').siblings().removeClass('activeState');
        var index2 = $(this).index();
        $('nav div.navBox>span').css('transform', 'translateX(' + index2 * leverWidth + 'px)')
    });


    // ending time
    $('#countdown9').ClassyCountdown({
        end: $.now() +100000,
        labels: true,
        style: {
            element: "",
            textResponsive: .5,
            days: {
                gauge: {
                    thickness: .03,
                    bgColor: "rgba(0,0,0,0)",
                    fgColor: "#00dfb9",
                    lineCap: 'round'
                },
                textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
            },
            hours: {
                gauge: {
                    thickness: .03,
                    bgColor: "rgba(0,0,0,0)",
                    fgColor: "#00dfb9",
                    lineCap: 'round'
                },
                textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
            },
            minutes: {
                gauge: {
                    thickness: .03,
                    bgColor: "rgba(0,0,0,0)",
                    fgColor: "#00dfb9",
                    lineCap: 'round'
                },
                textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
            },
            seconds: {
                gauge: {
                    thickness: .03,
                    bgColor: "rgba(0,0,0,0)",
                    fgColor: "#00dfb9",
                    lineCap: 'round'
                },
                textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
            }

        },
        onEndCallback: function () {
            console.log("Time out!");
        }
    });



    // form submit
    $('.submitBtn').click(function (e) {
        sunland.formSubmit(e,'stPhone','stPhone',callback)
    });

    function callback() {
        $('.submitBtn').html('提交成功')
    }
};