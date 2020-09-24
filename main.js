(function () {
    let tabColors = ['red', 'darkred', 'yellow', 'green', 'grey', 'pink', 'chartreuse',
        'blueviolet', 'blue', 'darkorange', 'fuchsia', 'lightgray'];

    let memoryCLicked = null;
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


