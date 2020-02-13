/*
* @Author: Louieye
* @Date:   2019-12-27 13:32:19
* @Last Modified by:   Louieye
* @Last Modified time: 2019-12-27 21:09:36
*/
var game = document.getElementById('game');
var bird = document.getElementById('bird');
var running = true;		//判断是否gameover


var bgSpeed = 5;	//背景移动速度
var x = 0;
setInterval(function(){		//背景运动
	if (running) {
		x -= bgSpeed;
		game.style.backgroundPositionX = x + 'px';
		if (bird.offsetTop > 580 || bird.offsetTop < 0) {	//超出边界停止运动
			running = false;
			alert('game over');
		}
	}
},30)
var speed = 0;
setInterval(function(){		//bird自由落体
	if (running) {
		speed += 0.8;	//模仿加速度
		bird.style.top = bird.offsetTop + speed + 'px';
		if (bird.offsetTop > 580 || bird.offsetTop < 0) {
		running = false;
		alert('game over');
		}
	}
},30)
document.onclick = function(){		//鼠标点击向上运动
	speed = -10;
}
function createPipe(position){		//创建水管
	var pipe = {};
	pipe.x = position
	pipe.upHeight = 150 + parseInt(Math.random() * 150);
	pipe.downPipe = 600 - pipe.upHeight - 150;
	pipe.downTop = pipe.upHeight +150;
	//创建上管道
	var upPipe = document.createElement('div');
	upPipe.style.width = '50px';
	upPipe.style.height = pipe.upHeight + 'px';
	upPipe.style.position = 'absolute';
	upPipe.style.background = 'url(uppipe.png) no-repeat center bottom';
	upPipe.style.left = pipe.x + 'px';
	upPipe.style.top = 0;
	game.appendChild(upPipe);
	//创建下管道
	var downPipe = document.createElement('div');
	downPipe.style.width = '50px';
	downPipe.style.height = pipe.downPipe + 'px';
	downPipe.style.position = 'absolute';
	downPipe.style.background = 'url(downpipe.png) no-repeat center top';
	downPipe.style.left = pipe.x + 'px';
	downPipe.style.bottom = 0;
	game.appendChild(downPipe);
	//管道运动
	var pos = pipe.x;
	setInterval(function(){
		if (running) {
			if (pos < -50) {
				pos = 800;
			}
			//判断是否gameover
		var upCheck = bird.offsetLeft + 30 >pos && bird.offsetLeft < pos +50 && bird.offsetTop < pipe.upHeight - 30;
		var downCheck = bird.offsetLeft + 30 >pos && bird.offsetLeft < pos +50 && bird.offsetTop > pipe.downTop - 25;
		if(upCheck || downCheck){
			running = false;
			alert('game over');
		}
		pos -= 5;
		upPipe.style.left = pos + 'px';
		downPipe.style.left = pos + 'px';
		}
		
	},30)
}
createPipe(400);
createPipe(600);
createPipe(800);
createPipe(1000);
