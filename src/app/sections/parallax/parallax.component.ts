import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parallax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.less']
})
export class ParallaxComponent {
  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
