class Card extends HTMLElement{
    color;
    isVisible = false;
    tabColors = ['red','darkred','yellow','green','grey','pink'];

    constructor() {
        super();
        this.initializeAttributes();
    }

    initializeAttributes() {
        this.color = this.tabColors[this.randomize(this.tabColors.length, 0)];
    }

    randomize(base, minimum){
        return Math.floor(Math.random()*base) + minimum;
    }
}
