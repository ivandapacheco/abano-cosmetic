import { Injectable, signal  } from '@angular/core';
import { IProduct } from '../models/products.model'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
    // Signal para manejar la lista de productos en el carrito
  cartProducts = signal<IProduct[]>([]);

  

  addToCartCount = signal(0);
  
  // Método para incrementar el contador
  incrementCartCount() {
    this.addToCartCount.update(count => count + 1);
  }

  // Método para obtener el valor actual del contador
  getCartCount() {
    return this.addToCartCount();
  }





  // Método para agregar un producto al carrito
  addProductToCart(product: IProduct) {
    this.cartProducts.update(products => [...products, product]);
    this.incrementCartCount(); // Incrementar el contador también
  }

  // Método para obtener los productos en el carrito
  getCartProducts() {
    console.log("desde servicio: ", this.cartProducts)
    return this.cartProducts();
  }
}
