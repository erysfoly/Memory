(function () {
	

	/*window.customElements.define('memory-card', Card);
	var card = new Card();*/

	var victory; //bool
	
	initGame();
	
	function initGame() {
		screenMenu.setAttribute("style","display:block");

		btnStartGame.onclick = function(){
			screenMenu.setAttribute("style","display:none");
			inGame();
		};
	}
	
	function inGame() {
		screenGame.setAttribute("style","display:block");

		/*card.setAttribute("class","rounded-lg");
		card.addEventListener('cardClicked', function(ev){
			console.log(ev);
		});
		screenGame.appendChild(card);*/

		createBoard();
		
		btnEndGame.onclick = function(){
			screenGame.setAttribute("style","display:none");
			victory = false;
			endGame();
		};
	}
	
	function endGame() {
		for (var i = 0; i < cards.length; i++) {
        card = cards[i];
        screenGame.removeChild(card);
    }
	
		
		screenEnd.setAttribute("style","display:block");
		console.log(victory);
		if (victory == true) {
			resultTitle.innerText = "Congrats!";
			btnRetry.innerText = "Play again";

		} else {
			resultTitle.innerText = "Game Over!";
			btnRetry.innerText = "Retry";
		}

		btnRetry.onclick = function(){
			screenEnd.setAttribute("style","display:none");
			initGame();
		};
	}

})();