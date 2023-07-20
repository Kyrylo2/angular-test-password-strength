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
    // No need to perform calculations here, the strength is determined by CSS classes
    console.log('Password:', this.password);
    console.log('Hide Password:', this.hidePassword);
    console.log('Password Strength:', this.passwordStrength);
    this.getPasswordStrengthPercentage();
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  getPasswordStrengthPercentage() {
    if (!this.password) {
      this.passwordStrength = 0;
    }

    // Use regular expressions to check the password for letters, digits, and symbols
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/\-|=]/.test(this.password);

    console.log('hasLetters:', hasLetters);
    console.log('hasDigits:', hasDigits);
    console.log('hasSymbols:', hasSymbols);

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

  getProgressBarColor() {
    if (this.passwordStrength === 100) {
      return 'green';
    } else if (this.passwordStrength >= 66) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  getProgressBarClass() {
    if (!this.password) {
      return 'lightgrey-progress';
    } else if (this.passwordStrength === 100) {
      return 'green-progress';
    } else if (this.passwordStrength >= 66) {
      return 'yellow-progress';
    } else {
      return 'red-progress';
    }
  }
}
