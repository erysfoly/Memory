(function () {
    let tabColors = ['red', 'darkred', 'yellow', 'green', 'grey', 'pink', 'chartreuse',
        'blueviolet', 'blue', 'darkorange', 'fuchsia', 'lightgray'];

    var memoryCLicked = null;
    function getColor() {
           return tabColors[randomize(tabColors.length, 0)];
    }

    function randomize(base, minimum) {
        return Math.floor(Math.random() * base) + minimum;
    }

    var main = document.getElementById('main');
    window.customElements.define('memory-card', Card)

    var color = getColor();
    var card = new Card(color);

    var color2 = getColor();
    var card2 = new Card(color2);

    card.addEventListener('cardClicked', function (ev) {
        console.log(ev);
        checkMemory(ev.detail);
    });
    card2.addEventListener('cardClicked', function (ev) {
        console.log(ev);
        checkMemory(ev.detail);
    });

    function checkMemory(color){
        if ( !memoryCLicked ){
            // 1er click
            memoryCLicked = color;
        }else{
            // 2iem click
            // ??????? PAIR ???????
            if ( memoryCLicked === color) {

                // PAIRE
                // ON BOUGE PAS LES CARD

            }else {
                // PAS UNE PAIRE<<<<<
                //ON CACHE LES 2
            }
            memoryCLicked = null;
        }
    }

    main.appendChild(card);
    main.appendChild(card2);

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
        value = 1;
        break;
    case 'level2':
        value = level.geek.numberTrys;
        break;
    case 'level3':
        value = level.nerd.numberTrys;
        break;
    default:
        value = level.nerd.numberTrys;
}
counter = value;
test = true;
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