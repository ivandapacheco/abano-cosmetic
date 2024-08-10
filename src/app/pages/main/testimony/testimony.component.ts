import { Component } from '@angular/core';
import { ITestimony, testimonies,responsiveOptions } from '../../../models/testimony.model'; 

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.scss'
})
export class TestimonyComponent {

  testimonies: ITestimony[] = testimonies;

  responsiveOptions: any[] = responsiveOptions;

}
