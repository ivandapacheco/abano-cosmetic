import { Component, inject  } from '@angular/core';
import { IProduct, products, responsiveOptions } from '../../../models/products.model'; 
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products: IProduct[] = products;

  responsiveOptions: any[] = responsiveOptions;

  _cartService = inject(CartService);

  
  onAddToCart(product:IProduct) {
    this._cartService.addProductToCart(product);

    console.log("Recibo producto: ", product)
  }

}
