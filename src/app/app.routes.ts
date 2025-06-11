import { Routes } from '@angular/router';
import { userRoutes } from './views/pages/users/users.routes';

export const routes: Routes = [
  {
    path: '',
    children: userRoutes,
  },
];
