import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, OnDestroy {
  images = [
    '/assets/images/1.jpeg',
    '/assets/images/12.jpg',
    '/assets/images/13.jpg'
  ];

  currentImageIndex = 0;
  intervalId!: any;

  ngOnInit(): void {
    this.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 7000);
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
