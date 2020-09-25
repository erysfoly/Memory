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

var cards;

var card;
var cardSelected = null;
var interval;

function createBoard() {
	cards = generateCards();
	cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        card = cards[i];
        card.setAttribute("class", "rounded-lg");
        screenGame.appendChild(card);
		if(card.blocked === false || cardSelected.blocked === false) {
			card.addEventListener('cardClicked', function (ev) {
				console.log(ev.detail.blocked);
				cardIsClicked(ev);
			});
		}
    }
}

function cardIsClicked(ev){
    promiseMyTwin(ev)
	.then(function(result){
		cardSelected = null;
		if (result.win) {
			cards.map( function(c){
				if (c.ref === result.cardSelected.ref || c.ref === result.cardClicked.ref) {
					c.blocked = true;
				}
				console.log("c.blocked = " + c.blocked);
				return c;
			});
			//card.blocked = true;
			console.log(card.blocked + ' GAGNE');
		}else{
			//card.hide();
			//card.blocked = false;
			console.log(card.blocked + ' PERDU');
		}
	}).catch( function(err){ console.log(err);});
}

function promiseMyTwin(ev) {
    return new Promise(function(resolve, reject){
        if (!cardSelected) {
            cardSelected = ev.detail;
			console.log(cardSelected);
            interval = setTimeout( function(){
                resolve( { win : false } );
            }, 5000);
        } else {
            clearTimeout(interval);
            if (cardSelected.color === ev.detail.color ){
                resolve( { win : true , cardSelected: cardSelected, cardClicked : ev.detail } );
            } else {
                resolve( { win : false } );
            }
        }
    });
}

// Code de JB
/*var cardSelected = null;
var inter;
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
				card.hide();
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
}*/
