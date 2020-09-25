var main = document.getElementById('main');

var screenMenu = document.getElementById('screen-menu');
var screenGame = document.getElementById('screen-game');
var screenEnd = document.getElementById('screen-end');

var btnStartGame = document.getElementById("start");

var btnEndGame = document.getElementById("end");

var msgResult = document.getElementById('result');
var resultTitle = document.getElementById('result-title')
var btnRetry = document.getElementById('retry');
window.customElements.define('memory-card', Card);

var cards = generateCards();
cards = shuffle(cards);

var card;

function createBoard() {

    for (var i = 0; i < cards.length; i++) {
        card = cards[i];
        card.setAttribute("class", "rounded-lg");
        screenGame.appendChild(card);
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
