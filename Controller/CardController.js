var niv1 = 3;
var niv2 = 6;
var niv3 = 12;

function generateCards() {
    var cards = [];
    for (var i = 0; i < niv1; i++) {
        var color = getColor();
        cards.push(new Card(color,i), new Card(color,i));
    }
	
    return cards;
}

function shuffle(cards) {
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    return cards;
}
