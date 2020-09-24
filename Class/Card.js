class Card extends HTMLElement{
    color;
    isVisible = false;
    tabColors = ['red','darkred','yellow','green','grey','pink'];

    constructor() {
        super();
        this.initializeAttributes();
        this.initListeners();
    }

    initializeAttributes() {
        this.initializeColor();
    }

    initListeners(){
        this.onclick = function() {
            this.initializeColor();
            var event = new CustomEvent('cardClicked', { 'detail' : this.color });
            this.dispatchEvent(event);
        }
    }

    initializeColor(){
        this.color = this.getRandomColor();
        this.setAttribute('style','background:'+ this.color);
    }

    getRandomColor(){
        return this.tabColors[this.randomize(this.tabColors.length, 0)];
    }
    randomize(base, minimum){
        return Math.floor(Math.random()*base) + minimum;
    }


}

