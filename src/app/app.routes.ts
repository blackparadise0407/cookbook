import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'recipes/:slug',
    component: RecipeDetailComponent,
  },
];
