var disy = 0;
var showOff = false;
var showt = $('#show').offset().top;
    var num=-1;
    var onOff = false;
    var numT = 0;
    var h = 0;
    var disY;
    var fontSize = parseFloat($('html').css('fontSize'));
    var divs = $('.goods_content section');
    var iH = window.innerHeight;//1136
     $('html,body').css('overflow','hidden');
     var arr = [divs[0],divs[2]];
     $(arr[numT]).css({
     	position:'absolute',
     	top:0,
     	left:0
     });

    var start = 0;
    var move = 0;
    var prev = 0;
    var iSpeed = 0;
    var timer = null;
    var bB = false;
    document.addEventListener('touchstart',function(ev){
    	ev.preventDefault();
    });
    function touchSatrtFunc(e) {
        var touch = e.changedTouches[0];
        disy = touch.clientY - $(arr[numT]).position().top;
        start = touch.clientY;
        prev = touch.clientY;
        clearInterval(timer);
    }


	function touchmove(e){
		var touchM = e.changedTouches[0];
		disY = disy - touchM.clientY;
		move = touchM.clientY;
		iSpeed = touchM.clientY - prev;
		prev = touchM.clientY;

		$(arr[numT]).css('top',(touchM.clientY - disy)+'px');
		if(move-start<0){
			//1154;     100:tiao   1254:window.innerHeight   $('#goods').height()1434 - 375
			var tiao = 2*fontSize;
			h = iH - $(arr[numT]).height() -  tiao - 1.8*fontSize;
			if(Math.abs($(arr[numT]).position().top) >= Math.abs(h)){
				onOff = true;
			}
		}else{
			onOff = false;
		}
	}
	function touchendFunc(e) {
		//console.log(move - start);
		bB = false;
		function startMo(){
			clearInterval(timer);
			timer = setInterval(function(){
				if(bB){
					return;
				}
				if(Math.abs($(arr[numT]).position().top) >= Math.abs(h)){
					clearInterval(timer);
					$(arr[numT]).stop().animate({top:h+'px'},500,function(){
					if(numT == 1){
							//加载
							console.log('加载');
						}
					});
					bB = false;
				}
				if(parseInt($(arr[numT]).css('top')) >=iH/5){
					clearInterval(timer);
					if(numT == 1){
						$(arr[numT]).stop().animate({top:iH},function(){
							numT = 0;
							$(arr[numT]).stop().animate({top:0},function(){
								bBt = true;
							});
						});
					}else{
						$(arr[numT]).stop().animate({top:0});
					}
				}else if(parseInt($(arr[numT]).css('top')) >=0){
					clearInterval(timer);
					$(arr[numT]).stop().animate({top:0});
				}
				if(Math.abs(iSpeed)<=1){
					clearInterval(timer);
					bB = false;
				}
				if(!bB){
					iSpeed*=0.95;
					$(arr[numT]).css('top',parseFloat($(arr[numT]).css('top'))+iSpeed+'px');
				}
			},13);

		}
		startMo();
		if(move - start < 0){
			if(onOff){
				if(numT == 0){
					if(Math.abs($(arr[numT]).position().top) > Math.abs(h)+iH/4){
						//回到顶部
						bB = true;
						$(arr[numT]).stop().animate({top:-iH-(2*fontSize)-(1.8*fontSize)+'px'},500,function(){
							numT++;
							if(numT == arr.length){
								numT = 0;
								return;
							};
							$(arr[numT]).css({display:"block",top:iH+'px',position:'absolute',margin:0});
							$(arr[numT]).stop().animate({top:0},300,function(){
								onOff = false;
							});
						});
					}
				}
			}

		}
	}
    ////绑定事件
    function bindEvent() {
        document.addEventListener('touchstart', touchSatrtFunc, false);
        document.addEventListener('touchmove', touchmove, false);
        document.addEventListener('touchend', touchendFunc, false);
    }
    bindEvent();
    //console.log(disy+','+$(window).height()+','+$(document).height());




























//var disy = 0;
//function touchSatrtFunc(e) {
//  var touch = e.changedTouches[0];
//  disy = touch.clientY;
////  console.log(touch.pageY);
//}
//function touchendFunc(e) {
//  var touch = e.changedTouches[0];
//	disy = Math.abs(touch.clientY-disy);
//	console.log(Math.abs(disy));
//}
//////绑定事件
//function bindEvent() {
//  document.addEventListener('touchstart', touchSatrtFunc, false);
//  document.addEventListener('touchend', touchendFunc, false);
//}
//bindEvent();
//
//
//
//
//
//function getScrollTop() {
//  //滚动条在Y轴上的滚动距离
//  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
//  if (document.body) {
//      bodyScrollTop = document.body.scrollTop;
//  }
//  if (document.documentElement) {
//      documentScrollTop = document.documentElement.scrollTop;
//  }
//  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
//  return scrollTop;
//}
//
////浏览器视口的高度
//function getWindowHeight() {
//  var windowHeight = 0;
//  if (document.compatMode == "CSS1Compat") {
//      windowHeight = document.documentElement.clientHeight;
//  } else {
//      windowHeight = document.body.clientHeight;
//  }
//  return windowHeight;
//}
//
////文档的总高度
//function getScrollHeight() {
//  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
//  if (document.body) {
//      bodyScrollHeight = document.body.scrollHeight;
//  }
//  if (document.documentElement) {
//      documentScrollHeight = document.documentElement.scrollHeight;
//  }
//  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
//  return scrollHeight;
//}
//
//console.log(getScrollTop()+','+getWindowHeight()+','+getScrollHeight());
//var oshow = $('#show');
//$(window).on("scroll", function(){
//  //函数内判断，距离底部50px的时候则进行数据加载
//  console.log(getScrollTop() + getWindowHeight())
//  if (getScrollTop() + getWindowHeight() + disy >= getScrollHeight()) {
//      oshow.css('display','block');
//  }
//});