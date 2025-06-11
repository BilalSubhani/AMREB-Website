import { Routes } from '@angular/router';

export const userRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./services/services.component').then((c) => c.ServicesComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((c) => c.ContactComponent),
  },
  {
    path: 'listings',
    loadComponent: () =>
      import('./listings/listings.component').then((c) => c.ListingsComponent),
  },
  {
    path: 'listings/:id',
    loadComponent: () =>
      import('./listings/property/property.component').then(
        (c) => c.PropertyComponent
      ),
  },
] as Routes;
