var minutes=document.getElementById('timer_minutes');
var seconds=document.getElementById('timer_seconds');
var modalTimer = document.getElementById('modal_timer');
var modalTimerContent = document.getElementById('modal_timer_content');
var modalTimerClose = document.getElementById('close');
var modalHello = document.getElementById('modal_hello');
var closeHello = document.getElementById('close_hello');

window.onload = function(){
	setTimeout(timer,1000);
}

function timer(){
	if (seconds.innerHTML == 00 && minutes.innerHTML == 0){
		secondWindowOpen();
	}
	else
	{
		if (seconds.innerHTML == 00)
		{
			seconds.innerHTML = 59;
			minutes.innerHTML--;
			check();
		} 
		else
		{	
			seconds.innerHTML--;	
			check();
		}
		
		if(seconds.innerHTML <10 && seconds.innerHTML != "00")
		{
			seconds.innerHTML = "0" + seconds.innerHTML;
		}
	}
}

function check(){
	if (seconds.innerHTML == 00 && minutes.innerHTML == 0)
	{
		secondWindowOpen();
	}
	else
	{
		setTimeout(timer,1000);
	}
}

modalTimerClose.addEventListener("click",closeContent);
function closeContent(){
	modalTimerContent.style.top = "-150vh";
	setTimeout(close, 300);
}

function close(){
	modalTimer.style.display = "none";
}

closeHello.addEventListener("click", closeModalHello);

function closeModalHello(){
	modalHello.style.opacity = "0";
	modalHello.style.visibility = "hidden";
}

function secondWindowOpen(){
	seconds.innerHTML="00";
	minutes.innerHTML="0";
	modalHello.style.visibility = "visible";
 	modalHello.style.opacity = "1";
}

var open = document.getElementById('open');
open.addEventListener("click", secondWindowOpen);

