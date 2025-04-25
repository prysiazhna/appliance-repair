import {Component, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})
export class SlideComponent implements AfterViewInit {
  @Input() src!: string;
  @Input() active!: boolean;

  zoom = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.active) {
      this.zoom = true;
      this.cdr.detectChanges();
    }
  }
}
