class Section {
  constructor({items, renderer}, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this._containerSelector = containerSelector;
}

renderItems() {
    this.items.forEach(item => {
        this.renderer(item);
      });
}

addItem(item) {
    this._containerSelector.prepend(item);

}


}

export default Section;