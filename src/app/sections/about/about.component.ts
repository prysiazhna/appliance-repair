import { Component} from '@angular/core';
import {CounterComponent} from '../../components/counter/counter.component';
import {ScrollSpyDirective} from '../../directives/scroll-spy.directive';
import {CommonModule} from '@angular/common';

interface Counter {
  value: number;
  label: string;
}
@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [
    CounterComponent,
    ScrollSpyDirective,
    CommonModule
  ],
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  counters: Counter[] = [
    { value: 6, label: 'Years of Experience' },
    { value: 4000, label: 'Appliances Repaired' },
    { value: 2000, label: 'Happy Clients' }
  ];

  triggerAnimation: boolean = false;
}
