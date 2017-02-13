function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio | !key) {
	return;
	}
	audio.currentTime = 0;
	audio.play();	
	key.classList.add("playing");
	}
	
function transitionOut(e) {
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!key) {
		return;
	}
	key.classList.remove("playing");
	}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", transitionOut);
