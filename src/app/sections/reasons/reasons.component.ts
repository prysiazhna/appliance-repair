import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reasons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.less'],
})
export class ReasonsComponent {
  reasons = [
    {
      icon: 'icon-coin-dollar',
      title: 'Fair Pricing',
      description: 'We offer affordable rates with no hidden fees.',
    },
    {
      icon: 'icon-calendar',
      title: 'Flexible Scheduling',
      description: 'Call us anytime — we’ll work around your schedule.',
    },
    {
      icon: 'icon-user-check',
      title: 'Licensed & Experienced',
      description: 'Over 6 years of hands-on appliance repair experience.',
    },
    {
      icon: 'icon-clipboard',
      title: 'Reliable Repairs',
      description: 'We fix it right the first time — guaranteed.',
    },
    {
      icon: 'icon-wrench',
      title: 'All Major Brands',
      description: 'We service all major household appliances.',
    },
    {
      icon: 'icon-bookmark',
      title: 'Trusted Service',
      description: 'Thousands of satisfied customers and growing.',
    },
  ];
}
