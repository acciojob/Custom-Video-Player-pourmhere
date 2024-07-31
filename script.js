/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

player.addEventListner("click",()=>{
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
})

video.addEventListener('play',()=>{
	toggle.textContent = '❚❚';
});
video.addEventListener('pause',()=>{
	toggle.textContent ='►';
});

video.addEventListner('timeupdate',()=>{
	const progress = (video.currentTime/video.duration)*100;
	progressBar.style.flexBasis = ${progress}%;
});

ranges[1].addEventListener('input',()=>{
	video.playbackRate = ranges[1].value;
});

skipButtons.forEach(button =>{
	button.addEventListener('click',()=>{
		video.currentTime += parseFloat(button.dataset.skip)
	});
});