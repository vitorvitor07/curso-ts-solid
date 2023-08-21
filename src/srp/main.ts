import { Order } from "./entities/order";
import { Product } from "./entities/product";
import { Messaging } from "./entities/services/messaging";
import { Persistency } from "./entities/services/persistency";
import { ShoppingCart } from "./entities/shopping-cart";

const cart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

// Add itens
cart.addItem(new Product("Katchup", 5));
cart.addItem(new Product("Mostarda", 8));
cart.addItem(new Product("Maionese", 10));

order.checkout();
console.log(cart);
