class Card {
    color;
    isVisible = false;
    tabColors = ['red','darkred','yellow','green','grey','pink'];
    el;

    constructor() {
        this.el = document.createElement('div');
        this.initializeAttributes();
    }

    initializeAttributes() {
        this.color = this.tabColors[this.randomize(this.tabColors.length, 0)];
    }

    randomize(base, minimum){
        return Math.floor(Math.random()*base) + minimum;
    }


    flipCard(){

    }
}

