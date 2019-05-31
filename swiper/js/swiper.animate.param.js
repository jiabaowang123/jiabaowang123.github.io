// 主swiper对象的动画参数
var swiperAnimateParam_main1 = {
	
	// 第 1 张幻灯片
	slide_1:{
		animate_01:{element:'main1_ani_01', animation:'selectKeyframe',timing:'ease',finish:'backwards',count:'infinite',duration:'1.2s'},
	},
	
	// 第 2 张幻灯片
	slide_2:{
		// 在此为幻灯片中的动画元素进行动画设置

        animate_01:{element:'main1_ani_02', animation:'fadeInDown',timing:'linear',finish:'forwards',duration:'.5s',type:'0'},
        animate_02:{element:'main1_ani_03', animation:'fadeInDown',timing:'linear',finish:'forwards',duration:'.5s',type:'0',delay:'0s'},

        animate_03:{element:'main1_ani_04', animation:'flipInX',timing:'ease',finish:'forwards',duration:'.7s',type:'0',delay:'0.2s'},
        animate_04:{element:'main1_ani_05', animation:'flipInX',timing:'ease',finish:'forwards',duration:'.7s',type:'0',delay:'0.2s'},
        animate_05:{element:'main1_ani_06', animation:'flipInX',timing:'ease',finish:'forwards',duration:'.7s',type:'0',delay:'0.2s'},
        animate_06:{element:'main1_ani_07', animation:'flipInX',timing:'ease',finish:'forwards',duration:'.7s',type:'0',delay:'0.2s'},

        animate_07:{element:'main1_ani_08', animation:'fadeInUp',timing:'ease-out',finish:'both',duration:'.3s',type:'0',delay:'0.3s'},
        animate_08:{element:'main1_ani_09', animation:'fadeInUp',timing:'ease-out',finish:'both',duration:'.3s',type:'0',delay:'0.4s'},
        animate_09:{element:'main1_ani_10', animation:'fadeInUp',timing:'ease-out',finish:'both',duration:'.3s',type:'0',delay:'0.5s'},
        animate_10:{element:'main1_ani_11', animation:'fadeInUp',timing:'ease-out',finish:'both',duration:'.3s',type:'0',delay:'0.6s'},

        animate_11:{element:'main1_ani_12', animation:'fadeInUp',timing:'ease-out',finish:'both',duration:'.4s',type:'0',delay:'0.2s'},
        animate_12:{element:'main1_ani_13', animation:'fadeInUp',timing:'ease-out',finish:'both',duration:'.4s',type:'0',delay:'0.3s'},
        animate_13:{element:'main1_ani_14', animation:'fadeInUp',timing:'ease-out',finish:'both',duration:'.4s',type:'0',delay:'0.4s'},
        animate_14:{element:'main1_ani_15', animation:'fadeInUp',timing:'ease-out',finish:'both',duration:'.4s',type:'0',delay:'0.5s'},

        animate_15:{element:'main1_ani_16', animation:'flipInX',finish:'both',timing:'ease-out',duration:'1s',type:'0',delay:'0.8s',},

    },

// 第 3 张幻灯片
    slide_3:{
        // 在此为幻灯片中的动画元素进行动画设置

        animate_01:{element:'main1_ani_17', animation:'flipInX',timing:'linear',finish:'forwards',duration:'.5s',type:'0'},
        animate_02:{element:'main1_ani_18', animation:'flipInX',timing:'linear',finish:'forwards',duration:'.5s',type:'0',delay:'0.2s'},
        animate_03:{element:'main1_ani_19', animation:'flipInX',timing:'linear',finish:'forwards',duration:'.5s',type:'0',delay:'0.4s'},
        animate_04:{element:'main1_ani_20', animation:'addWidthHeight2',duration:'.6s',delay:'0.5s',type:'0',finish:'both',count:1},

        animate_05:{element:'main1_ani_21', animation:'fadeInUp',duration:'.5s',delay:'1s',type:'0',finish:'both',count:1},
        animate_06:{element:'main1_ani_22', animation:'fadeInUp',duration:'.8s',delay:'1.2s',type:'0',finish:'both',count:1},
        animate_07:{element:'main1_ani_23', animation:'fadeInUp',duration:'.8s',delay:'1.6s',type:'0',finish:'both',count:1},
        animate_08:{element:'main1_ani_24', animation:'flipInX',duration:'.8s',delay:'1.8s',type:'0',finish:'both',count:1},
    },
// 第 4 张幻灯片
    slide_4:{
        // 在此为幻灯片中的动画元素进行动画设置
        animate_01:{element:'main1_ani_25', animation:'flipInX',timing:'linear',finish:'forwards',duration:'.8s',type:'0'},
        animate_02:{element:'main1_ani_26', animation:'flipInX',timing:'linear',finish:'forwards',duration:'.8s',type:'0',delay:'0.2s'},
        animate_03:{element:'main1_ani_27', animation:'flipInX',timing:'linear',finish:'forwards',duration:'.8s',type:'0',delay:'0.4s'},
        animate_04:{element:'main1_ani_28', animation:'flipInX',timing:'linear',finish:'forwards',duration:'.8s',type:'0',delay:'0.6s'},
        animate_05:{element:'main1_ani_29', animation:'fadeInUp',timing:'linear',finish:'forwards',duration:'.5s',type:'0',delay:'0.7s'},
    },

};

// 第 1 个子swiper对象的动画参数
var swiperAnimateParam_child1 = {
	
	// 第 1 张幻灯片
	slide_1:{
		animate_01:{element:'child1_ani_01', animation:'fadeInLeft',type:0,},
		animate_02:{element:'child1_ani_02', animation:'fadeInLeft',type:0,delay:'0.1s'},
		animate_03:{element:'child1_ani_03', animation:'fadeInLeft',delay:'0.3s'},
		animate_04:{element:'child1_ani_04', animation:'fadeInRight', type:0,delay:'0.4s'},
		animate_07:{element:'child1_ani_07', animation:'fadeInRightBottomBig',duration:'0.6s',delay:'.6s',type:1,timing:'ease-in',finish:'backwards'},
		animate_08:{element:'child1_ani_08', animation:'addWidthHeight',duration:'0.3s',type:1,delay:'1.2s',timing:'ease-out',finish:'backwards'},
	},

        // 第 2 张幻灯片
	slide_2:{
		animate_01:{element:'child1_ani_09', animation:'fadeInDown', duration:'1s', type:0,},
		animate_02:{element:'child1_ani_10', animation:'fadeInDown', duration:'1s', type:0,delay:'.2s',},
		animate_03:{element:'child1_ani_11', animation:'fadeInLeft', duration:'1s', type:0,delay:'.4s',},
        animate_04:{element:'child1_ani_12', animation:'fadeInRight', duration:'1s', type:0,delay:'.7s',finish:'both'},
		animate_05:{element:'child1_ani_13', animation:'fadeInRight', duration:'1s', type:0,delay:'.9s',finish:'both'},
		animate_06:{element:'child1_ani_14', animation:'fadeInRight', duration:'1s', type:0,delay:'1.1s',finish:'both'},
        animate_07:{element:'child1_ani_15', animation:'fadeInUp', duration:'1s', type:0,delay:'1.5s',finish:"both"},
    },
    // 第 3 张幻灯片
    slide_3:{
        animate_01:{element:'child1_ani_15', animation:'bounceInDown', duration:'1s', type:1,finish:"backwards"},
        animate_02:{element:'child1_ani_16', animation:'bounceInDown', duration:'0.8s', type:1,delay:'0.2s',finish:'both'},
        animate_03:{element:'child1_ani_17', animation:'zoomIn', duration:'.7s', type:1,delay:'.6s',finish:'both'},
        animate_04:{element:'child1_ani_18', animation:'fadeInRight', duration:'1s', type:1,delay:'1s',finish:'both'},
        animate_05:{element:'child1_ani_19', animation:'fadeInRight', duration:'.9s', type:1,delay:'1.1s',finish:'both'},
        animate_06:{element:'child1_ani_20', animation:'fadeInRight', duration:'.8s', type:1,delay:'1.2s',finish:'both'},
        animate_07:{element:'child1_ani_21', animation:'fadeInRight', duration:'.7s', type:1,delay:'1.3s',finish:'both'},
        animate_08:{element:'child1_ani_22', animation:'fadeInUp', duration:'.7s', type:1,delay:'1.7s',finish:'both'},
        animate_09:{element:'child1_ani_23', animation:'fadeInUp', duration:'.7s', type:1,delay:'1.8s',finish:'both'},
        animate_10:{element:'child1_ani_24', animation:'bounceInUp', duration:'.7s', type:1,delay:'2s',finish:'both'},
    },
    // 第 4 张幻灯片T
    slide_4:{
        animate_01:{element:'child1_ani_25', animation:'flipInX', duration:'2s', type:1,},
        animate_02:{element:'child1_ani_26', animation:'flipInX', duration:'1s', type:1,delay:'0.2s',finish:'both'},
        animate_03:{element:'child1_ani_27', animation:'fourBig', duration:'.8s', type:1,delay:'0.4s',finish:'both',timing:'ease-out'},
        animate_04:{element:'child1_ani_28', animation:'flipInX', duration:'1s', type:1,delay:'1s',finish:'both',timing:'ease-in'},
        animate_05:{element:'child1_ani_29', animation:'flipInX', duration:'1s', type:1,delay:'1.2s',finish:'both',timing:'ease-in'},
        animate_06:{element:'child1_ani_30', animation:'flipInX', duration:'1s', type:1,delay:'1.4s',finish:'both',timing:'ease-in'},
        animate_07:{element:'child1_ani_31', animation:'flipInX', duration:'1s', type:1,delay:'1.6s',finish:'both',timing:'ease-in'},
    },
};
