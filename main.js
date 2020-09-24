(function () {
	
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
	var card = new Card();

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

		card.setAttribute("class","rounded-lg");
		card.addEventListener('cardClicked', function(ev){
			console.log(ev);
		});
		screenGame.appendChild(card);
		
		btnEndGame.onclick = function(){
			screenGame.setAttribute("style","display:none");
			victory = true;
			endGame();
		};
	}
	
	function endGame() {
		screenGame.removeChild(card);
		screenEnd.setAttribute("style","display:block");

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