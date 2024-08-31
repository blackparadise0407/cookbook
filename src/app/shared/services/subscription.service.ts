import { inject, Injectable } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable()
export class SubscriptionService {
  private firestore = inject(Firestore);

  public subcribe(email: string) {
    return setDoc(
      doc(this.firestore, 'subscriptions', email.toLowerCase().normalize()),
      {}
    );
  }
}
