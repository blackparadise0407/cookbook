import { Component, Input } from '@angular/core';

import { Recipe } from '@/app/shared/interfaces';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-recipe-card',
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './recipe-card.component.html',
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe: Recipe;
}
