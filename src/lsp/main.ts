/*
Liskov substitution principie (principio da substituição de Liskov) -
Se fi(x) é uma propriedade demonstrável dos objetos x de tipo T. Então fi(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
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
