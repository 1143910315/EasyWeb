

$(function () {
    
	$('.nav .sea').click(function(){
		$(this).addClass('sea1');
		$('.nav .sea p input').val('')
	})
	$('.nav .sea').hover(function(){
		
	},function(){
		$(this).removeClass('sea1')
		$('.nav .sea p input').val('')
	})
	var e=0;
	$('.lang_col p span').click(function(){
		e=$(this).text();
		$('.language h5 span').text(e)
	})
	var t=$('.prod_para ul li span.sp').height()
	$('.prod_para ul li span.sp4').css('height',t+'px')
	$('.prod_para ul li span.sp4').css('line-height',t+'px')
	var e=0;
	$('.inf_col_list_col .to').click(function(){
		e++;
		if(e>4) e=0
			$('.inf_col_list_col ul').stop().animate({"top":-e*500+"px"},300)
	})
	$('.inf_col_list_col .bt').click(function(){
		e--;
		if(e<0) e=4
			$('.inf_col_list_col ul').stop().animate({"top":e*-500+"px"},300)
	})
	var q=0;
	$('#listimg .left-btn').click(function () {
		q++;
		if(q>3) q=0
		$(this).siblings('.wrap').find('ul').stop().animate({ "left": -q * 166 + "px" }, 300)
	})
	$('#listimg .right-btn').click(function () {
		q--;
		if(q<0) q=3
		$(this).siblings('.wrap').find('ul').stop().animate({ "left": q * -166 + "px" }, 300)
	})


	$(".hoverico").hover(function () {
	    var path_img = $(this).find('img').attr('src');
	    var new_path = path_img.replace(".", "-1.");
	    $(this).find('img').attr('src', new_path);
	}, function () {
	    var path_img = $(this).find('img').attr('src');
	    var new_path = path_img.replace("-1.", ".");
	    $(this).find('img').attr('src', new_path);
	});



	$('.details-pic li').on('click', function() {
		$(this).parents('.wrap').siblings('img').attr('src', $(this).find('img').attr('src')); 
	});
	$('.pic').delegate('li', 'click', function() {
		$(this).parents('.wrap').siblings('img').attr('src', $(this).find('img').attr('src')); 
	});

	$(".proj_list_img img").on('click', function () {
	    var path = $(this).attr('src');
	    $(this).parent().parent().parent().parent().parent().find(".proj_list_le img").attr('src', path);
	    console.info(t);
	});
})


function replaimg(obj) {//HOVER变颜色的图标 1.移上去的对象   
    
    $(obj).hover(function () {
        var path_img = $(this).find('img').attr('src');
        var new_path = path_img.replace(".", "-1.");
        $(this).find('img').attr('src', new_path);
    }, function () {
        var path_img = $(this).find('img').attr('src');
        var new_path = path_img.replace("-1.", ".");
        $(this).find('img').attr('src', new_path);
    })
}



function fade(fade){
	var dom = $(fade);
	var li = dom.children('ul').find('li');
	var control =  dom.children('.control-btn');
	var index  = 0;
	var length = dom.children('ul').find('li').length;
	var string = ''
	var active = 0;
	var time = 0;
	li.first().animate({opacity: 1, zIndex: 1}, 'ease');
	for (var i = 0; i < length; i++) {
		if (i==active) {
			string += '<span class="active"></span>';
		}else{
			string += '<span></span>';
		}
	}
	control.append(string);
	control.find('span').hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(auto,3000)
	});
	li.hover(function () {
	    clearInterval(time);
	}, function () {
	    time = setInterval(auto, 3000)
	});
	control.find('span').on('click', function() {
		li.eq($(this).index()).animate({opacity: 1, zIndex: 1}, 'ease').siblings().animate({opacity: 0, zIndex: 0}, 'ease');
		$(this).addClass('active').siblings().removeClass('active');
		index = $(this).index();
	});
	time = setInterval(auto,3000)
	function auto(){
		index===length-1?index = 0 : index ++ ;
		li.eq(index).animate({opacity: 1, zIndex: 1}, 'ease').siblings().animate({opacity: 0, zIndex: 0}, 'ease');
		control.find('span').eq(index).addClass('active').siblings().removeClass('active');
	}
}

function bannerscroll(banner,fun){
	var count = 0;
	var length = banner.find('li').length;
	if (length == 0)
	    return;
	var width = banner.find('li').width();
	var time = ''
	var str = '';

	for (var i = 0; i < length; i++) {
		str += '<span></span>' ;
	}
	banner.find('.console-btn').append(str)
	banner.find('ul').append(banner.find('li').clone().addClass('clone'));
	banner.find('ul').width((length*2)*width);
	banner.find('.console-btn span').eq(count).addClass('active');
	time = setInterval(function(){
		autoscroll()
	},3000)
	banner.find('.console-btn').hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(function(){
			autoscroll()
		},3000)
	});
	banner.find('.console-btn span').click(function() {
		banner.find('ul').stop(true, true).animate({'left': -$(this).index()*width},'ease');
		$(this).addClass('active').siblings().removeClass('active');
	});



	function autoscroll(){
		count++;
		if (count>=length) {
			count=0;
		}
		banner.find('.console-btn span').eq(count).addClass('active').siblings().removeClass('active');
		banner.find('ul').stop(true, true).animate({left: '-='+width}, 'ease',function(){
			if (parseInt(banner.find('ul').css('left'))<=width*(-length)) {
				banner.find('ul').css('left',0);
			}
		});
	}
	banner.find('.left-btn').click(function() {
		autoscroll()
	});
	banner.find('.left-btn').hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(function(){
			autoscroll()
		},3000)
	});
	banner.find('.right-btn').click(function() {
		if (count ==0) {
			if (!(parseInt(banner.find('ul').css('left'))==-width*length)) {
				banner.find('ul').css('left', -width*length+parseInt(banner.find('ul').css('left')));
			}
		}
		count--;
		if (count<0) {
			count=length-1;
		}
		banner.find('.console-btn span').eq(count).addClass('active').siblings().removeClass('active');
		banner.find('.console-btn span').eq(count).addClass('active').siblings().removeClass('active');
		banner.find('ul').stop(true, true).animate({left: '+='+width}, 'ease',function(){
			if (parseInt(banner.find('ul').css('left'))>=0) {
				banner.find('ul').css('left', -width*length+parseInt(banner.find('ul').css('left')));
			}
		});

	});
	banner.find('.right-btn').hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(function(){
			autoscroll()
		},3000)
	});
	
}

function bannerscroll22(banner, fun) {
	var count = 0;
	var length = banner.find('li').length;
	console.log(length);
	var width = banner.find('li').width();
	var time = ''
	var str = '';

	for (var i = 0; i < length; i++) {
		str += '<span></span>' ;
	}
	banner.find('.console-btn').append(str)
	banner.find('ul').append(banner.find('li').clone().addClass('clone'));
	banner.find('ul').width((length*2)*width);
	banner.find('.console-btn span').eq(count).addClass('active');
	fun&&fun();

	function autoscroll(){
		count++;
		if (count>=length) {
			count=0;
		}
		banner.find('.console-btn span').eq(count).addClass('active').siblings().removeClass('active');
		banner.find('ul').stop(true, true).animate({left: '-='+width}, 'ease',function(){
			if (parseInt(banner.find('ul').css('left'))<=width*(-length)) {
				banner.find('ul').css('left',0);
			}
		});
	}
	banner.find('.left-btn').click(function() {
		autoscroll()
		// console.log(parseInt(banner.find('ul').css('left'))/width);
		 // $('.pic-layout p span').eq(0).html((-parseInt(banner.find('ul').css('left'))/width)+1);
	});

	banner.find('.right-btn').click(function() {
		 // $('.pic-layout p span').eq(0).html(-parseInt(banner.find('ul').css('left'))/width);

		if (count ==0) {
			if (!(parseInt(banner.find('ul').css('left'))==-width*length)) {
				banner.find('ul').css('left', -width*length+parseInt(banner.find('ul').css('left')));
			}
		}
		count--;
		if (count<0) {
			count=length-1;
		}
		banner.find('.console-btn span').eq(count).addClass('active').siblings().removeClass('active');
		banner.find('.console-btn span').eq(count).addClass('active').siblings().removeClass('active');
		banner.find('ul').stop(true, true).animate({left: '+='+width}, 'ease',function(){
			if (parseInt(banner.find('ul').css('left'))>=0) {
				banner.find('ul').css('left', -width*length+parseInt(banner.find('ul').css('left')));
			}
		});

	});
	
}










