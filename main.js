/*** creation of the Card webcomponent ***/
(function () {
    var main = document.getElementById('main');
    window.customElements.define('memory-card', Card)
    var card = new Card();
    main.appendChild(card);
})();

/*** level parameters ***/
const level = {
    noobie : {
        numberCards: 6,
        numberTrys: 2
    },
    geek: {
        numberCards: 12,
        numberTrys: 4
    },
    nerd: {
        numberCards: 24,
        numberTrys: 8
    }
}

/*** counterTrys management ***/
var value, counter, test, target, restart;
switch(level){
    case 'level1':
        value = level.noobie.numberTrys;
        break;
    case 'level2':
        value = level.geek.numberTrys;
        break;
    case 'level3':
        value = level.nerd.numberTrys;
        break;
    default:
        value = level.noobie.numberTrys;
}
counter = value;
test = false;
target = document.getElementById('target');
restart = document.getElementById('restart');

target.innerHTML = "Nombre d'essais restant : "+ counter;
restart.innerHTML = "Reset";

(function DecrementationCounter() {
    if(test == true) {
        restart.style.display = 'none';
        counter--;
        target.innerHTML = "Nombre d'essais restant : "+ counter;
            if (counter == 0) {
                target.innerHTML = "Game over !";
                restart.style.display = 'block';
                test = false;
            }
    } else if(test == false && counter > 0) {
        restart.style.display = 'block';
        target.innerHTML = "Bravo ! Une autre partie ?";
    }
    console.log(test);
})();

/*** reset button click management ***/
restart.onclick = function() {
    test = true;
    counter = value;
    target.innerHTML = "Nombre d'essais restant : "+ counter;
    restart.style.display = 'none';
}