import { Component, inject, signal } from '@angular/core';
import { CreateLinkDto } from '@domain/shared/models/createLink.model';
import { LinksService } from '../../../shared/services/links.service';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent {
  links = signal<CreateLinkDto[]>([]);

  private linksService = inject(LinksService);

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.linksService.getLinks().subscribe({
      next: (links: CreateLinkDto[]) => {
        this.links.set(links);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
