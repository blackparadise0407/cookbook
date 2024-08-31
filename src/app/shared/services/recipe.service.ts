import { inject, Injectable, signal } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  limit,
  orderBy,
  query,
} from '@angular/fire/firestore';

import { Recipe } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private readonly firestore = inject(Firestore);
  private latestRecipes = signal<Recipe[] | undefined>(undefined);

  public getLatest() {
    if (!this.latestRecipes()) {
      const q = query(
        collection(this.firestore, 'recipes'),
        orderBy('publishedAt', 'desc'),
        limit(9)
      );
      collectionData(q).subscribe(this.latestRecipes.set);
    }
    return this.latestRecipes.asReadonly();
  }
}
