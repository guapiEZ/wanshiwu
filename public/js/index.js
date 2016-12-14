/**
 * Created by Administrator on 2016/12/7 0007.
 */

var startX,
	startY,
	moveX,
	moveY,
	times= 0,
	timeOut;

var dom =document.getElementsByClassName('md')[0]
	dom.addEventListener('touchstart',function(e){
		console.log('touchstart')
		times=0;
		timeOut = setInterval(function(){
			times += 100;
		},100)
	var th = e.touches[0];
		startX = th.clientX;
		startY = th.clientY;
})


dom.addEventListener('touchmove',function(e){
	var th = e.touches[0];
	moveX = th.clientX;
	moveY = th.clientY;
})


dom.addEventListener('touchend',function(e){
	console.log('touchend')
	console.log(startX,startY,moveX,moveY)

	if (moveY -startY>=30){
		dom.style.color='blue'
	}else if(startY -moveY>=30){
		dom.style.color='white'
	}

	var fontSize = parseInt(window.getComputedStyle(dom).fontSize);

	console.log(fontSize)

	if(moveX - startX >= 30){
		fontSize += 2;
		dom.style.fontSize = fontSize +'px'
	}else if(startX - moveX>=30){
		if(fontSize>=14){fontSize -= 2;
			dom.style.fontSize = fontSize +'px'}

	}
	clearInterval(timeOut);
	console.log(times);
	if(times >=1000){
		dom.style.color='red'
	}
});


var xhr = new XMLHttpRequest();


