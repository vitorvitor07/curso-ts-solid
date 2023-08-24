import { CartItem } from "./cart-item";

export interface ShoppingCartProtocol {
  itens: Readonly<CartItem[]>;

  addItem(item: CartItem): void;

  removeItem(index: number): void;

  totalSum(): number;

  totalWithDiscount(): number;

  cleanCart(): void;

  isEmpty(): boolean;
}
