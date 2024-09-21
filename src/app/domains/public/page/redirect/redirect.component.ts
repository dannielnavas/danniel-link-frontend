import { Component, inject, Input } from '@angular/core';
import { LinksService } from '../../../shared/services/links.service';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css',
})
export class RedirectComponent {
  @Input() identifier!: string;

  private linksService = inject(LinksService);

  ngOnInit() {
    console.log('Redirecting...');
    console.log('Identifier:', this.identifier);
    const identifier = this.identifier;
    if (identifier) {
      this.linksService.redirectLink(identifier).subscribe({
        next: (response: any) => {
          console.log('Response:', response);
          window.location.href = response.url;
        },
        error: (error: any) => {
          console.error('Error:', error);
        },
      });
    } else {
      console.error('Identifier is undefined');
    }
  }
}
