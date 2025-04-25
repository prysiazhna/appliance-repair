import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
export interface ServiceItem {
  title: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent {
  public services: ServiceItem[] = [
    { title: 'Refrigerator', image: 'assets/icons/002.png' },
    { title: 'Stovetop', image: 'assets/icons/005.png' },
    { title: 'Dryer', image: 'assets/icons/003.png' },
    { title: 'Oven', image: 'assets/icons/004.png' },
    { title: 'Washing Machine', image: 'assets/icons/006.png' },
    { title: 'Dishwasher', image: 'assets/icons/001.png' },
  ];
}
