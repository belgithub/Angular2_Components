import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static price(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value !== undefined && (Number.isNaN(c.value) || c.value < 1 || c.value > 5000)) {
      return {
        'price': true
      };
    }
    return null;
  }
}
