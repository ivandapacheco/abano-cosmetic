import { Component, inject, OnInit  } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../models/products.model'; 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent  {

  // addToCartCount:number = 0;

  _cartService = inject(CartService);
  


  cartProducts: IProduct[] = [];

  // ngOnInit() {
  //   // Obtener los productos del carrito y asignarlos a la propiedad del componente
  //   this.cartProducts = this._cartService.getCartProducts();

  //    
  // }

  constructor() {
    // Asignar el valor del signal a la propiedad cartProducts
    // this.cartProducts = this._cartService.cartProducts();
    

    
  }

  llenarArrayProduct(){
    this.cartProducts = this._cartService.getCartProducts(); 
    console.log("obtengo la lista de productos en sear.ts: ", this.cartProducts ); 
  }

}
