function removeTransition(e: TransitionEvent) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playSound(e: KeyboardEvent) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`) as HTMLAudioElement;
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) as HTMLElement;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitioned', removeTransition));

window.addEventListener('keydown', playSound);
