import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective {
  @Output() visible = new EventEmitter<void>();
  private triggered = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.triggered) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      this.visible.emit();
      this.triggered = true;
    }
  }
}
