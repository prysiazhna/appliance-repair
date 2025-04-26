import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-brands',
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.less']
})
export class BrandsComponent {
  brands: string[] = [
    'assets/brands/amana.png',
    'assets/brands/bosch.png',
    'assets/brands/dacor.webp',
    'assets/brands/frigidaire.webp',
    'assets/brands/ge.webp',
    'assets/brands/jun.png',
    'assets/brands/ka.webp',
    'assets/brands/ken.jpeg',
    'assets/brands/lg.webp',
    'assets/brands/may.png',
    'assets/brands/miele.webp',
    'assets/brands/samsung.webp',
    'assets/brands/sq.png',
    'assets/brands/subzero.webp',
    'assets/brands/therma.png',
    'assets/brands/vik.jpeg',
    'assets/brands/whirlpool.webp',
    'assets/brands/wolf.jpeg'
  ];
}
