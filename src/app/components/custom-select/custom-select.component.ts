import { Component, Input, forwardRef, HostListener, ElementRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, ControlContainer, FormGroupDirective} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.less'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() options: { label: string; value: string }[] = [];
  @Input() placeholder = 'Select an option';

  isOpen = false;
  selectedLabel: string | null = null;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: { label: string; value: string }, event: Event) {
    event.stopPropagation();
    this.selectedLabel = option.label;
    this.onChange(option.value);
    this.onTouched();
    this.isOpen = false;
  }

  writeValue(value: string) {
    const found = this.options.find(o => o.value === value);
    this.selectedLabel = found ? found.label : null;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    if (!this.eRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }
}
