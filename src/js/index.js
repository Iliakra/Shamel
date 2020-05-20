let kopon = document.getElementsByClassName('down-title-container__text-word-kopon')[0];
let eLetter = document.getElementsByClassName('down-title-container__text-letter-e')[0];
let nLetter = document.getElementsByClassName('down-title-container__text-letter-n')[0];
let suviWord = document.getElementsByClassName('upper-title-container__text-content')[0];

let newPosition = 100;
let mover = () => {
    if (window.scrollY > 80) {
        let currentPosition = window.scrollY;
        if (currentPosition > newPosition) {
            kopon.classList.add('_move-right');
            eLetter.classList.add('_move-up');
            nLetter.classList.add('_move-up');
            suviWord.classList.add('_move-left');
        } else if (currentPosition < newPosition) {
            kopon.classList.remove('_move-right');
            eLetter.classList.remove('_move-up');
            nLetter.classList.remove('_move-up');
            suviWord.classList.remove('_move-left');
        } 
        newPosition = currentPosition;
    }
}
window.addEventListener('scroll', mover);
