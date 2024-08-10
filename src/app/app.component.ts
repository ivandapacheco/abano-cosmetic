import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './main/main.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainModule, HeaderModule, FooterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AbanoCosmeticProject';
}
