(function () {
	
	var main = document.getElementById('main');
	window.customElements.define('memory-card', Card);
	
	initGame();
	
	function initGame() {
		var btnStartGame = document.getElementById("start");
		btnStartGame.onclick = function(){
			var screenMenu = document.getElementById('screen-menu');
			screenMenu.setAttribute("style","display:none");
			inGame();
		};
	}
	
	function inGame() {
		var screenGame = document.getElementById('screen-game');
		screenGame.setAttribute("style","display:block");
		var card = new Card();
		card.setAttribute("class","rounded-lg");
		card.addEventListener('cardClicked', function(ev){
			console.log(ev);
		});
		main.appendChild(card);
		
		/*var btnEndGame = document.getElementById("end");
		btnEndGame.onclick = function(){
			var screenGame = document.getElementById('screen-game');
			screenGame.setAttribute("style","display:none");
			endGame();
		};*/
	}
	
	function endGame() {
		var screenEnd = document.getElementById('screen-end');
		screenEnd.setAttribute("style","display:block");
	}

})();