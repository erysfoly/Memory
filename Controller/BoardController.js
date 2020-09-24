var main = document.getElementById('main');
window.customElements.define('memory-card', Card)

var cards = generateCards();
cards = shuffle(cards);

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        main.appendChild(card);
        card.addEventListener('cardClicked', function (ev) {
            console.log(ev);
        });
    }
}
