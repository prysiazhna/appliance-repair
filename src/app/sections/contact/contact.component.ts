import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {CustomSelectComponent} from '../../components/custom-select/custom-select.component';
import {TelegramService} from '../../services/telegram.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, CustomSelectComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private telegramService: TelegramService) {
  this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      preferredContact: ['', Validators.required],
      message: ['']
    });
  }

  hasError(controlName: string, errorType?: string): boolean {
    const control = this.form.get(controlName);
    if (!control || !control.touched) return false;
    return errorType ? control.hasError(errorType) : control.invalid;
  }

  onSubmit() {
    if (this.form.valid) {
      this.telegramService.sendMessage(this.form.value).subscribe({
        next: () => {
          alert('Заявку надіслано в Telegram!');
          this.form.reset();
        },
        error: (err) => {
          console.error('Telegram error:', err);
          alert('Помилка при надсиланні 😢');
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
