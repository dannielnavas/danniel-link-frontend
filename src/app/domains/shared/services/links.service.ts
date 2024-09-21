import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CreateLinkDto } from '../models/createLink.model';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  private http = inject(HttpClient);

  getLinks() {
    return this.http.get(environment.endpoint);
  }

  createLink(createLink: CreateLinkDto) {
    return this.http.post(environment.endpoint, createLink);
  }

  redirectLink(identifier: string) {
    return this.http.get(`${environment.endpoint}${identifier}`);
  }
}
