import { Component, inject  } from '@angular/core';
import { CartService } from '../../services/cart.service'
import { IProduct } from '../../models/products.model'; 
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {

  _cartService = inject(CartService);
  
  cartProducts: IProduct[] = [];
  numberProduct:number = 1;

  llenarArrayProduct(){
    this.cartProducts = this._cartService.getCartProducts(); 
    console.log("obtengo la lista de productos en sear.ts: ", this.cartProducts ); 
  }
}
