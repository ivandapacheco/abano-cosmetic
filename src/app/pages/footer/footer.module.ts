import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { InputGroupModule } from 'primeng/inputgroup';



@NgModule({
  declarations: [
    FooterComponent,
    FooterLinksComponent,
    NewsLetterComponent
  ],
  imports: [
    CommonModule,
    InputGroupModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
