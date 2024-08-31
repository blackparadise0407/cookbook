import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';

import { RecipeCardComponent } from '@/app/shared/components';
import { RecipeService, SubscriptionService } from '@/app/shared/services';

@Component({
  standalone: true,
  selector: 'app-landing',
  imports: [NgOptimizedImage, RecipeCardComponent],
  providers: [SubscriptionService],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  readonly recipeService = inject(RecipeService);
  recipes = this.recipeService.getLatest();
}
