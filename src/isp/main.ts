/*
Interface segregation principie (Principio da segregação de Interface)
Os clientes não devem ser forçados a depender de interfaces que não utilizam
*/
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
const order = new Order(cart, messaging, persistency);

// Add itens
cart.addItem(new Product("Katchup", 5));
cart.addItem(new Product("Mostarda", 8));
cart.addItem(new Product("Maionese", 10));

console.log(cart);
console.log(cart.totalSum(), cart.totalWithDiscount());
order.checkout();
