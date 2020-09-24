var main = document.getElementById('main');
window.customElements.define('memory-card', Card)

var cards = generateCards();
cards = shuffle(cards);

function createBoard() {

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.setAttribute("class", "rounded-lg");
        main.appendChild(card);
        card.addEventListener('cardClicked', function (ev) {
            console.log(ev)
        });
    }
}

    /**
     * récupère les cartes non trouvées puis cherche si une carte est déjà retourné
     * si oui elle est trouvé et reste visible
     * @param {Card} card
     */
    function matchCard(card) {
        let cardsNotFound = cards.filter(card => !card.found());

        let firstCard = cardsNotFound.find(card => card.isVisible);
        // for (let i = 0; i < cardsNotFound.length; i++){
        //     var card = cardsNotFound[i];
        //     if (card.isVisible){
        //         firstCard = card;
        //         break;
        //     }
        // }
        if (firstCard === undefined)
            return;

        if (firstCard.color === card.color) {
            card.found();
            firstCard.found();
        } else {
            setTimeout(card.hide, 1000);
        }

        cardsNotFound = cards.filter(card => !card.isFound);
        if (cardsNotFound.length === 0) {
            // endgame();
        }


}
