//age check
const containsOnlyDigits = /^[0-9]*$/;

export class IsInRangeValidation {
  errorMessage = 'Error: Please, enter a valid age';
  constructor(inputField) {
    this.inputField = inputField;
  }
  validate() {
    if (!containsOnlyDigits.test(this.inputField.value)) {
      return false;
    }
    if (+this.inputField.value < 18) {
      return false;
    }
    if (+this.inputField.value > 80) {
      return false;
    }
    return true;
  }
}