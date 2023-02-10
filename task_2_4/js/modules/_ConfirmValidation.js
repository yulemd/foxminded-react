export class ConfirmValidation {
  errorMessage = 'Error: Passwords does not match';
  constructor(inputField, passwordField) {
    this.inputField = inputField;
    this.passwordField = passwordField;
  }
  validate() {
    return this.inputField.value == this.passwordField.value;
  }
}