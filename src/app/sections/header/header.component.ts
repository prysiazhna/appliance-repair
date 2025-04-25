import {CommonModule} from '@angular/common';
import {Component, HostListener} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HamburgerComponent} from '../../components/hamburger/hamburger.component';
import {SocialIconsComponent} from '../../components/social-icons/social-icons.component';

export interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, HamburgerComponent, SocialIconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {isSticky = false;
  public isMenuOpen = false;
  public activeSection: string = '';

  menuItems: MenuItem[] = [
    { label: 'Home', route: 'top' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Contact', route: 'contact' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const topPanel = document.querySelector('.top-panel') as HTMLElement;
    const topPanelHeight = topPanel?.offsetHeight || 0;

    const isDesktop = window.innerWidth > 768;
    this.isSticky = isDesktop && window.scrollY >= topPanelHeight;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = id;
    }
  }
}
