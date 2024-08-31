import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { SubscriptionService } from '../../services';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, CommonModule],
  providers: [SubscriptionService],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public email = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
    updateOn: 'blur',
  });
  public isLoading = signal(false);
  private readonly subscriptionService = inject(SubscriptionService);

  public async submit(e: MouseEvent) {
    e.preventDefault();
    if (!this.email.value || this.email.errors) {
      return;
    }
    this.isLoading.set(true);
    try {
      await this.subscriptionService.subcribe(this.email.value);
      this.email.reset();
    } catch {
    } finally {
      this.isLoading.set(false);
    }
  }
}
