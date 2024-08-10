import { Component } from '@angular/core';
import { MainModule } from '../main/main.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainModule, HeaderModule, FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
