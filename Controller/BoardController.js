function createBoard() {
    cards = generateCards();
    cards = shuffle(cards);

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        screenGame.appendChild(card);
        card.addEventListener('cardClicked', function (ev) {
            cardIsClicked(ev);
        });
    }
}
var cardSelected = null;
function cardIsClicked(ev) {
    promiseMyTwin(ev)
        .then(function (result) {
            cardSelected = null;
            if (result.win) {
                cards.map(function (card) {
                    if (card.ref === result.cardSelected.ref || card.ref === result.cardClicked.ref) {
                        card.blockMe(true);
                    }
                    return card;
                });
                console.log('GAGNE');
            } else {
                // DECREASE LIFE
                console.log('PERDU');
            }
            checkGameState();
        }).catch(function (err) {
            console.log(err);
        });
}

function checkGameState() {
    // LOOK THE NUMBER OF LIFE To PLAY

    // LOOK THE CARDS NOT BLOCKED
    var cb = cards.filter( function(c){ return c.isBlocked === true; });
    console.log(cb);
    if (cb.length === cards.length ) {
        console.log('PARTIE WIN');
    }
}
function promiseMyTwin(ev) {
    return new Promise(function (resolve, reject) {
        if (!cardSelected) {
            cardSelected = ev.detail;
            inter = setTimeout(function () {


                resolve({win: false});
            }, 4000);
        } else {
            clearTimeout(inter);
            if (cardSelected.color === ev.detail.color) {
                resolve({win: true, cardSelected: cardSelected, cardClicked: ev.detail});
            } else {
                resolve({win: false, cardSelected: cardSelected, cardClicked: ev.detail});
            }
        }
    });
}

