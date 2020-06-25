function button1(but){
	let img1 = document.querySelector('#img1');
	let img2 = document.querySelector('#img2');
	let img3 = document.querySelector('#img3');
	let stop = document.querySelector('#stop');
	but.disabled = true
	stop.disabled = false;
	window.timerId = setInterval(function(){
		let tmp = img1.src;
		img1.src = img2.src;
		img2.src = img3.src;
		img3.src = tmp;
	}, 1000);
};

function button2(but){
	let start = document.querySelector('#start');
	but.disabled = true;
	start.disabled = false;
	clearInterval(timerId);
};