import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialIconsComponent} from '../../components/social-icons/social-icons.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialIconsComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent {

  contact = {
    city: 'Seattle, WA, USA',
    phone: '(206) 724-5561',
    email: 'info@example.com',
  };

  hours = [
    { day: 'Mon–Fri', time: '9:00 AM – 5:00 PM' },
    { day: 'Sat–Sun', time: '9:00 AM – 3:00 PM' }
  ];

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
