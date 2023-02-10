export class IsRequiredValidation {
  errorMessage = 'Error: Fields "First name", "Email", "Password" and "Confirm password" must be filled';
  constructor(inputField) {
    this.inputField = inputField;
  }
  validate() {
    return (this.inputField.value) ? true : false;
  }
}