import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  hidePassword: boolean = true;
  passwordStrength: number = 0;

  calculateStrength() {
    this.getPasswordStrengthPercentage();
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  getPasswordStrengthPercentage() {
    if (!this.password) {
      this.passwordStrength = 0;
    }

    if (this.password.length < 8) {
      this.passwordStrength = 0;
    }

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/\-|=]/.test(this.password);

    if (this.password.length >= 8) {
      // Strong password: has letters, digits, and symbols
      if (hasLetters && hasDigits && hasSymbols) {
        this.passwordStrength = 100;
      } else if (
        !(hasLetters && hasDigits && hasSymbols) &&
        ((hasLetters && hasDigits) ||
          (hasLetters && hasSymbols) ||
          (hasDigits && hasSymbols))
      ) {
        // Medium password: combination of letters-digits, letters-symbols, or digits-symbols
        this.passwordStrength = 66;
      } else if (hasLetters || hasDigits || hasSymbols) {
        // Easy password: only letters, digits, or symbols
        this.passwordStrength = 33;
      }
    }
  }

  getProgressBarClass() {
    if (this.password.length >= 8) {
      if (this.passwordStrength === 100) {
        return 'green-progress';
      } else if (this.passwordStrength >= 66) {
        return 'yellow-progress';
      } else {
        return 'red-progress';
      }
    } else {
      return 'lightgrey-progress';
    }
  }
}
