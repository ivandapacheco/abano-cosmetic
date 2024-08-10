import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    MainSectionComponent,
    ProductsComponent,
    MainComponent,
    TestimonyComponent
    
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule
  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
