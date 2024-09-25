import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@domain/shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <section class="container mx-auto">
      <router-outlet />
    </section>
  `,
  styles: '',
})
export class AppComponent {}
