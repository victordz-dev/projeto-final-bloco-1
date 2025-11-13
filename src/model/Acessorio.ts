import { Produto } from "./Produto";

export class Acessorio extends Produto{
      private _type: string;

      constructor(id: number, price: number, name: string, inStock: number, category: string, type: string, material: string) {
            super(id, price, name, inStock, "Acessório", material);
            this._type = type;
      };

      get type() {return this._type;};
      set type(type: string) {this._type = type;};

      detailProduct(): string {
            return `${super.detailProduct()}\nTipo de acessório: ${this._type}`;
      };
};