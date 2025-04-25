import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-work-process',
  imports: [CommonModule],
  templateUrl: './work-process.component.html',
  styleUrls: ['./work-process.component.less']
})
export class WorkProcessComponent {
  steps = [
    {
      number: 1,
      title: 'You Give Us a Call',
      text: 'We are available 7 days a week to answer your questions and schedule an appointment.',
      image: 'assets/images/call.jpg'
    },
    {
      number: 2,
      title: 'We Schedule a Repair',
      text: 'We’ll book a convenient time - same day or next day - to visit your location.',
      image: 'assets/images/schedule.jpg'
    },
    {
      number: 3,
      title: 'We Diagnose the Issue',
      text: 'Once onsite, we will inspect your appliance and explain what’s going wrong.',
      image: 'assets/images/3.jpg'
    },
    {
      number: 4,
      title: 'We Fix Your Appliance',
      text: 'We complete the repair efficiently and offer a 90-day warranty on all parts and labor.',
      image: 'assets/images/2.jpg'
    }
  ];
}
