import { Discount } from "./discount";
import { CartItem } from "./interfaces/cart-item";

export class ShoppingCart {
  private readonly _itens: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._itens.push(item);
  }

  removeItem(index: number) {
    this._itens.splice(index, 1);
  }

  totalSum(): number {
    return +this._itens
      .reduce((sum, value) => (sum += value.price), 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.totalSum());
  }

  cleanCart(): void {
    this._itens.length = 0;
  }

  // Suspeito porém só temos que validar uma coisa
  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  // Readonly para não => cart.itens[0] = { ... };
  get itens(): Readonly<CartItem[]> {
    return this._itens;
  }
}
