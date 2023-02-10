//password check
const containsLetters = /^.*[a-zA-Z]+.*$/;
const containsLettersInUpperCase = /^.*[A-Z]+.*$/;
const containsDigits = /[0-9]/;
const minimum8Chars = /^.{8,}$/;
const withoutSpaces = /^[^"();:<>\s]+$/;

export class PasswordValidation {
  errorMessage = 'Error: password should contain at least 8 characters, contains letters, at least one letter in upper case, contains digits and should not contains spaces';
  constructor(inputField) {
    this.inputField = inputField;
  }
  validate() {
    if (!containsLetters.test(this.inputField.value)) {
      return false;
    }
    if (!containsLettersInUpperCase.test(this.inputField.value)) {
      return false;
    }
    if (!containsDigits.test(this.inputField.value)) {
      return false;
    }
    if (!withoutSpaces.test(this.inputField.value)) {
      return false;
    }
    if (!minimum8Chars.test(this.inputField.value)) {
      return false;
    }
    return true;
  }
}