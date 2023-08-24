import { CustomerOrder } from "./interfaces/customer-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { OrderStatus } from "./interfaces/order-status";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";

// Order alto nível por depende da ShoppingCart
// Order alto nível - ShoppingCart baixo nível
// Order não sabe fazer as tarefas de ShoppingCart
// Aclopamento - não funciona sem as dependências
export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder // Depende de uma abstração - Alto nível
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
    console.log(
      `O cliente é: ${this.customer.getName()}, ${this.customer.getIDN()}`
    );
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }
}
