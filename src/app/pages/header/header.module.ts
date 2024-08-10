import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { CartComponent} from '../cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { ShopComponent } from './shop/shop.component';
import { RouterLink } from '@angular/router'



@NgModule({
  declarations: [
    AboutComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    SearchComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    CartComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
