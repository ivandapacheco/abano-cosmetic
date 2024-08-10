import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];
