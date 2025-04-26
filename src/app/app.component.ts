import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './sections/header/header.component';
import {MainComponent} from './sections/main/main.component';
import {AboutComponent} from './sections/about/about.component';
import {ServicesComponent} from './sections/services/services.component';
import {BrandsComponent} from './sections/brands/brands.component';
import {ContactComponent} from './sections/contact/contact.component';
import {WorkProcessComponent} from './sections/work-process/work-process.component';
import {FooterComponent} from './sections/footer/footer.component';
import {ReasonsComponent} from './sections/reasons/reasons.component';
import {ParallaxComponent} from './sections/parallax/parallax.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    BrandsComponent,
    ContactComponent,
    WorkProcessComponent,
    FooterComponent,
    ReasonsComponent,
    ParallaxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
}
