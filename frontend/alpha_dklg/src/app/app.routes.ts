import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Portfolio - Alpha DKLG'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
