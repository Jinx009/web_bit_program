$(function(){
	var pos_01={'width':160,'height':160,'left':170,'top':280,'z-index':100 };
	var pos_02={'width':130,'height':130,'left':80,'top':300,'z-index':80 };
	var pos_03={'width':100,'height':100,'left':50,'top':320,'z-index':60 };
	var pos_04={'width':90,'height':90,'left':410,'top':330,'z-index':50 };
	var pos_05={'width':110,'height':110,'left':360,'top':310,'z-index':60 };
	var pos_06={'width':130,'height':130,'left':290,'top':290,'z-index':80 };
	
	var pos=[pos_01,pos_02,pos_03,pos_04,pos_05,pos_06];
	var timer;
	$tolimg=$('#carousel').find('img');

	$tolimg.each(function(i){
		$tolimg.eq(i).css({width:pos[i]['width'],height:pos[i]['height'],left:pos[i]['left'],top:pos[i]['top'],'z-index':pos[i]['z-index']});
		var index=$(this).index();
	
	})

	timer = {};
	//自动播放
	// timer=setInterval(function(){
	// 	moving();
	// },2000);
	// //鼠标移上去停止播放
	// $tolimg.hover(function(){
	// 	clearInterval(timer);
	// },function(){
	// 	timer=setInterval(function(){
	// 		moving();
	// 	},3000);
	// });

	//移动事件
	function moving(){
		$tolimg=$tolimg.parent();
		$tolimg.eq(0).appendTo('#imglist');
		$tolimg=$('#carousel').find('img');
		$tolimg.each(function(i){
			$tolimg.eq(i).stop(true,true).animate({width:pos[i]['width'],height:pos[i]['height'],left:pos[i]['left'],top:pos[i]['top'],'z-index':pos[i]['z-index']},600,function(){
				$('#carousel  img').each(function(){
					var width = $(this).css('width');
					if('160px'==width){
						$('#top').attr('src',$(this).attr('src'));
					}
				})
			})
		})
	}

	/**
	 * 向左滑动
	 */
	function goLeft() {
		$tolimg=$tolimg.parent();
		$tolimg.eq(5).prependTo('#imglist');
		$tolimg=$('#carousel').find('img');
		$tolimg.each(function(i){
			$tolimg.eq(i).stop(true,true).animate({width:pos[i]['width'],height:pos[i]['height'],left:pos[i]['left'],top:pos[i]['top'],'z-index':pos[i]['z-index']},600)
			var element = $tolimg.eq(i);
			var width = $(element).css('width');
			if('160px'==width){
				element = $tolimg.eq(i-1);
				$('#top').attr('src',$(element).attr('src'));
			}
		})
	}

	var startX,x,aboveX=0;
	/**
	 * 开始滑动
	 * @param e
     */
	function touchSatrt(e){//触摸
		e.preventDefault();
		var touch=e.touches[0];
		startX = touch.pageX;   //刚触摸时的坐标
	}

	/**
	 * 滑动过程中
	 * @param e
     */
	function touchMove(e){//滑动
		e.preventDefault();
		var  touch = e.touches[0];
		x = touch.pageX - startX;//滑动的距离
	}

	/**
	 * 滑动结束
	 * @param e
     */
	function touchEnd(e){//手指离开屏幕
		if(x<0){
			goLeft();
			console.log('goLeft');
		}else{
			moving();
			console.log('moving');
		}
		aboveX = 0;
		e.preventDefault();
	}

	/**
	 * 绑定监听事件
	 */
	document.getElementById("imglist").addEventListener('touchstart', touchSatrt,false);
	document.getElementById("imglist").addEventListener('touchmove', touchMove,false);
	document.getElementById("imglist").addEventListener('touchend', touchEnd,false);
})
