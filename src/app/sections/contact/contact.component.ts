import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {CustomSelectComponent} from '../../components/custom-select/custom-select.component';
import {TelegramService} from '../../services/telegram.service';
import {ToastComponent} from '../../components/toast/toast.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, CustomSelectComponent, ToastComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {
  public form: FormGroup;
  public showToast = false;
  public toastMessage = '';
  public toastType: 'success' | 'error' = 'success';

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
          this.showToastMessage('Your request has been submitted successfully!', 'success');
          this.form.reset();
        },
        error: (err) => {
          console.error('Telegram error:', err);
          this.showToastMessage('An error occurred while submitting your request.', 'error');
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  private showToastMessage(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
