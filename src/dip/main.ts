/*
Módulos de alto nível não devem depender de módulos de baixo nível.
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.

Interfaces são classes de alto nível
Classes concretas (realiza alguma tarefa) são de baixo nível
*/
import { EnterpriseCustomer } from "./classes/customer";
import { NoDiscount } from "./classes/discount";
import { MessagingProtocol } from "./classes/interfaces/messaging-protocol";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { Messaging } from "./classes/services/messaging";
import { Persistency } from "./classes/services/persistency";
import { ShoppingCart } from "./classes/shopping-cart";

// const discount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new EnterpriseCustomer("03491303000142", "Krolik");

// Classe para testar a classe sem fazer o envio real da mensagem
class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log("Enviado, mas não de verdade, com sucesso");
  }
}

const messagingMock = new MessagingMock();

const order = new Order(cart, messagingMock, persistency, customer);

// Add itens
cart.addItem(new Product("Katchup", 5));
cart.addItem(new Product("Mostarda", 8));
cart.addItem(new Product("Maionese", 10));

console.log(cart);
console.log(cart.totalWithDiscount());
order.checkout();
