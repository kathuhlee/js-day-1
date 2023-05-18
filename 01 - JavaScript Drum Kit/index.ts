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

<!-- 
1. Add type annotations to variables and parameters
2. Update event listeners with explicit event types

In the updated code, 'TransitionEvent' and 'KeyboardEvent' are used as type annotations for the event parameters. The 'as' keyword is used to perform type assertions for 'querySelector' results to specify the correct element types.
By adding these type annotations, the javascript code is transformed into typescript code
 -->
