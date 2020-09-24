(function () {
    var main = document.getElementById('main');
    window.customElements.define('memory-card', Card)

    let tabColors = ['red', 'darkred', 'yellow', 'green', 'grey', 'pink', 'chartreuse',
        'blueviolet', 'blue', 'darkorange', 'fuchsia', 'lightgray'];

    let memoryCLicked = null;

    function getColor() {
        return tabColors[randomize(tabColors.length, 0)];
    }

    function randomize(base, minimum) {
        return Math.floor(Math.random() * base) + minimum;
    }

    var niv1 = 6;
    var niv2 = 12;
    var niv3 = 24;
    var cards = [];
    
    for (var i = 0; i < niv2 / 2; i++) {
        var color = getColor();
        cards.push(new Card(color), new Card(color));
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        main.appendChild(card);
        card.addEventListener('cardClicked', function (ev) {
            console.log(ev);
        });
    }


})();


