class Card extends HTMLElement{
    defaultColor = 'black';
    color;
    isVisible = false;
    isFound = false;


    constructor(color) {
        super();
        this.color = color;
        this.initializeAttributes();
        this.initListeners();
    }

    initializeAttributes() {
        this.initializeColor();
    }

    initListeners(){
        this.onclick = function() {
            this.show();
            var event = new CustomEvent('cardClicked', { 'detail': this.color });
            this.dispatchEvent(event);
        }
    }

    initializeColor(){
        this.hide();
    }

    found(){
        this.isFound = true;
    }

    show(){
        this.isVisible = true;
        this.setAttribute('style', 'background:' + this.color);
    }

    hide() {
        this.isVisible = false;
        this.setAttribute('style', 'background:' + this.defaultColor);
    }
}

