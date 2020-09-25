class Card extends HTMLElement{
    defaultColor = 'black';
    color;
    isVisible = false;
	ref;
	isBlocked = false;


    constructor(color, ref) {
        super();
        this.color = color;
		this.ref = ref+1;
        this.initializeAttributes();
        this.initListeners();
    }

    initializeAttributes() {
        this.initializeColor();
        this.setAttribute("class", "rounded-lg");
    }

    initListeners(){
        this.onclick = function() {
            this.show();
            var event = new CustomEvent('cardClicked', {
			  detail: {
				color: this.color,
				ref: this.ref
			  }
			});

            this.dispatchEvent(event);
        }
    }

    initializeColor(){
        this.hide();
    }

    blockMe(isBlocked){
      this.isBlocked = isBlocked;
    }
    show(){
		var me = this;
        this.isVisible = true;
        this.setAttribute('style', 'background:' + this.color);
		 setTimeout(function() {
		 	me.hide();
        }, 4000);
    }

    hide() {
        if (this.isBlocked) { return false };
        this.isVisible = false;
        this.setAttribute('style', 'background:' + this.defaultColor);
    }
}
window.customElements.define('memory-card', Card);
