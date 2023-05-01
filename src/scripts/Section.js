class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    renderItems() {
        this._items.forEach(item => {
            this._renderer(item);
          });
    }

    addItem(item) {
        this._containerSelector.prepend(item);
        console.log(item);
    }

    removeItem(item) {
        this._containerSelector.removeChild(item);
      }
}

export default Section;