import { Produto } from "./Produto";

export class Roupa extends Produto{
      private _size: string;
      private _color: string;

      constructor(id: number, price: number, name: string, inStock: number, category: string, size: string, color: string, material: string) {
            super(id, price, name, inStock, "Roupa", material);
            this._size = size;
            this._color = color;
      };

      get size() {return this._size;};
      set size(size: string) {this._size = size;};

      get color() {return this._color;};
      set color(color: string) {this._color = color;};

      detailProduct(): string {
            return `${super.detailProduct()}\nTamanho: ${this._size}\nCor: ${this._color}`;
      };
      
};