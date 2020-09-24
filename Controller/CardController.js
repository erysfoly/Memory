var niv1 = 3;
var niv2 = 6;
var niv3 = 12;

function generateCards() {
    var cards = [];
    for (var i = 0; i < niv2; i++) {
        var color = getColor();
        cards.push(new Card(color), new Card(color));
    }
    return cards
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
