(function () {
    var main = document.getElementById('main');
    window.customElements.define('memory-card', Card)
    var card = new Card();
    card.addEventListener('cardClicked', function(ev){
        console.log(ev);
    });

    main.appendChild(card);

})();


