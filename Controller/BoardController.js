var main = document.getElementById('main');
window.customElements.define('memory-card', Card)


var cards = generateCards();
cards = shuffle(cards);

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.setAttribute("class","rounded-lg");
        main.appendChild(card);
        card.addEventListener('cardClicked', function (ev) {
            console.log(ev);
        });
    }
}
