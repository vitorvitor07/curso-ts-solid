import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { ShoppingCart } from "./shopping-cart";

export class Order {
  private _orderStatus: OrderStatus = "open"; // Ter classe a parte

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) return;
    this._orderStatus = "closed";
    this.messaging.sendMessage(
      "Pedido recebido, total: " + this.cart.totalWithDiscount()
    );
    this.persistency.saveOrder();
    this.cart.cleanCart();
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }
}
