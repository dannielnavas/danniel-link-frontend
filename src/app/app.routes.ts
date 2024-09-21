import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./domains/public/page/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: ':identifier',
    loadComponent: () =>
      import('./domains/public/page/redirect/redirect.component').then(
        (m) => m.RedirectComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./domains/public/page/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
