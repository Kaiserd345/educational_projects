window.onload = function () {
    let audio = new Audio('./sounds/SW_main.mp3');
    const switcher = document.getElementById('switch');
    switcher.addEventListener('click', () => {
        if (switcher.classList.contains('playing')) {
            audio.pause();
            switcher.textContent = 'Play Sound';
            switcher.classList.remove('playing');
        } else {
            audio.play();
            switcher.textContent = 'Stop Playing';
            switcher.classList.add('playing');
        }
    });

}