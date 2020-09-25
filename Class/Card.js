class Card extends HTMLElement{
    defaultColor = 'black';
    color;
    isVisible = false;
	ref;


    constructor(color, ref) {
        super();
        this.color = color;
		this.ref = ref;
        this.initializeAttributes();
        this.initListeners();
    }

    initializeAttributes() {
        this.initializeColor();
    }

    initListeners(){
        this.onclick = function() {
            this.show();
            var event = new CustomEvent('cardClicked', { 'detail': this.color}, {'ref': this.ref });
            this.dispatchEvent(event);
        }
    }

    initializeColor(){
        this.hide();
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

