type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";

// God class
export class ShoppingCartLegacy {
  private readonly _itens: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._itens.push(item);
  }

  removeItem(index: number) {
    this._itens.splice(index, 1);
  }

  totalSum(): number {
    // +Transforma this._itens em number novamente
    return +this._itens
      .reduce((sum, value) => (sum += value.price), 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) return;
    this._orderStatus = "closed";
    this.sendMessage("Pedido recebido, total: " + this.totalSum());
    this.saveOrder();
    this.cleanCart();
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }

  cleanCart(): void {
    this._itens.length = 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  // Readonly para não => cart.itens[0] = { ... };
  get itens(): Readonly<CartItem[]> {
    return this._itens;
  }
}

const cart = new ShoppingCartLegacy();

// Add itens
cart.addItem({ name: "Katchup", price: 5 });
cart.addItem({ name: "Mostarda", price: 8 });
cart.addItem({ name: "Maionese", price: 10 });

cart.checkout();

console.log(cart);
