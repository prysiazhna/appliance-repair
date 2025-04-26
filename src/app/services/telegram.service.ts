import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private apiUrl = 'https://telegram-api-sar.vercel.app/send-telegram';
  constructor(private http: HttpClient) {}

  sendMessage(formData: {
    fullName: string;
    phone: string;
    email: string;
    preferredContact: string;
    message?: string;
  }) {
    return this.http.post(this.apiUrl, formData);
  }
}
