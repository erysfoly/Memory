class Card extends HTMLElement{
    defaultColor = 'black';
    color;
    isVisible = false;


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

    show(){
        var me = this;
        this.isVisible = true;
        this.setAttribute('style', 'background:' + this.color);
        // setTimeout(function(){
        //     me.hide();
        // }, 2000);
    }

    hide() {
        this.isVisible = false;
        this.setAttribute('style', 'background:' + this.defaultColor);
    }
}

