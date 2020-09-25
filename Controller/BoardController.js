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
            console.log(ev.detail.ref)
        });
    }
}

/* 
// Code de JB
var main = document.getElementById('main');
var cardSelected = null;
var inter;
var card1 = new MemoryCard(12, 'red', 10);
var card2 = new MemoryCard(13, 'blue', 11);
var card3 = new MemoryCard(14, 'blue', 12);
var cards = [ card1, card2, card3 ];
function cardIsClicked(ev){
    promiseMyTwin(ev)
        .then(function(result){
            cardSelected = null;
            if (result.win) {
                cards.map( function(c){
                    if (c.ref === result.cardSelected.ref || c.ref === result.cardClicked.ref) {
                        c.blocked = true;
                    }
                    return c;
                });
                console.log('GAGNE');
            }else{
                console.log('PERDU');
            }
        }).catch( function(err){ console.log(err);});
}
function promiseMyTwin(ev) {
    return new Promise(function(resolve, reject){
        if (!cardSelected) {
            cardSelected = ev.detail;
            inter = setTimeout( function(){
                resolve( { win : false } );
            }, 5000);
        } else {
            clearTimeout(inter);
            if (cardSelected.color === ev.detail.color ){
                resolve( { win : true , cardSelected: cardSelected, cardClicked : ev.detail } );
            } else {
                resolve( { win : false } );
            }
        }
    });
}
for (var i = 0; i < cards.length; i++) {
    var c = cards[i];
    main.appendChild(c);
    c.addEventListener('cardClicked', function(ev){
        cardIsClicked(ev);
    });
}
*/