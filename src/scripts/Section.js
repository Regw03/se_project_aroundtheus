import Card from "./scripts/Card.js";
export default class Section {
    constructor ({item, renderer}, selector){
        this.rederItems = renderItems;
        this.addItem = addItem;
        this.renderer = renderer;
        this.item = item;
        this.element = document.querySelector(selector);
    }

    renderItems(data){
        //us this.renderer to create the elements for rendering
    };

    addItem(item){
        //take the item and render it into this._element
    };
}