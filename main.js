(function () {
    var main = document.getElementById('main');

	window.customElements.define("memory-card", Card);
    var card = new Card();

	
	main.appendChild(card);



})();


