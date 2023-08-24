/*
Interface segregation principie (Principio da segregação de Interface)
Os clientes não devem ser forçados a depender de interfaces que não utilizam
*/
import { EnterpriseCustomer } from "./classes/customer";
import { NoDiscount } from "./classes/discount";
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
const order = new Order(cart, messaging, persistency, customer);

// Add itens
cart.addItem(new Product("Katchup", 5));
cart.addItem(new Product("Mostarda", 8));
cart.addItem(new Product("Maionese", 10));

console.log(cart);
console.log(cart.totalWithDiscount());
order.checkout();
