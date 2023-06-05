export default class Section {
    constructor ({items, renderer}, selector){
        this.renderer = renderer;
        this.items = items;
        this.element = document.querySelector(selector);
    }

    renderItems(){
        this.items.forEach(item => {
            this.renderer(item);
        });
        //us this.renderer to create the elements for rendering
    };

    addItem(item){
        this.element.prepend(item);
        //take the item and render it into this._element
    };
}