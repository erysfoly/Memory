(function () {
	
	var main = document.getElementById('main');
	window.customElements.define('memory-card', Card);
	init();
	
	function init () {
		var btnStartGame = document.getElementById("start");
		btnStartGame.onclick = function(){
			var screenMenu = document.getElementById('screen-menu');
			screenMenu.setAttribute("style","display:none");
			ingame();
		};
	}
	
	function ingame() {
		var screenGame = document.getElementById('screen-game');
		screenGame.setAttribute("style","display:block");
		var card = new Card();
		main.appendChild(card);
	}
	
	function end() {
		var screenEnd = document.getElementById('screen-end');
		screenEnd.setAttribute("style","display:block");
	}
	

})();


