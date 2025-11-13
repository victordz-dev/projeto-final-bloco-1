export abstract class Produto{
      private _id: number;
      private _price: number;
      private _name: string;
      private _inStock: number;
      private _category: string;
      private _material: string;

      constructor(id: number, price: number, name: string, inStock: number, category: string, material: string) {
            this._id = id;
            this._price = price;
            this._name = name;
            this._inStock = inStock;
            this._category = category;
            this._material = material;
      };

      get id() {return this._id;};

      set id(id: number) {this._id = id;};

      get price() {return this._price;};

      set price(price: number) {this._price = price;};

      get name() {return this._name;};

      set name(name: string) {this._name = name;};

      get inStock() {return this._inStock;};

      set inStock(inStock: number) {this._inStock = inStock;};

      get category() {return this._category;};

      set category(category: string) {this._category = category;};

      get material() {return this._material;};

      set material(material: string) {this._material = material;};

      isInStock(quantity: number): boolean {
            return this._inStock >= quantity;
      }

      reduceStock(quantity: number): void {
            if (this.isInStock(quantity)) {
                  this._inStock -= quantity;
            };
      };

      increaseStock(quantity: number): void {
            this._inStock += quantity;
      };

      changePrice(newPrice: number): void {
            this._price = newPrice;
      };

      detailProduct(): string {
            return `ID do produto: ${this._id}\nNome: ${this._name}\nPreço: R$${this._price.toFixed(2)}\nCategoria: ${this._category}\nEm estoque: ${this._inStock} unidade(s).`;
      };
};