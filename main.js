(function () {
	
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