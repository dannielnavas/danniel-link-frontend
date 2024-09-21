import { Component } from '@angular/core';
import { FormComponent } from '@domain/public/components/form/form.component';
import { LinksComponent } from '@domain/public/components/links/links.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, LinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
