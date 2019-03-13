const stickBox = document.querySelector('.stick-box');
stickBox.addEventListener('click', openClose);
function openClose(){
	if (stickBox.classList.contains('close')) {
		stickBox.classList.replace('close', 'open');
	}else if(stickBox.classList.contains('open')){
		stickBox.classList.replace('open', 'close');
	}else{
		stickBox.classList.add('open');
	}
}