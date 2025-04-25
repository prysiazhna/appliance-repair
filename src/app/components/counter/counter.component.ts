import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnChanges {
  @Input() value = 0;
  @Input() label = '';
  @Input() narrow = false;
  @Input() animate = false;

  currentValue = 0;
  private animated = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['animate'] && this.animate && !this.animated) {
      this.animateCounter();
    }
  }

  private animateCounter(): void {
    const step = Math.ceil(this.value / 70);
    const update = () => {
      this.currentValue += step;
      if (this.currentValue < this.value) {
        setTimeout(update, 20);
      } else {
        this.currentValue = this.value;
      }
    };
    update();
    this.animated = true;
  }
}
