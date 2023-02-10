//date check
const isDate = /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/;

export class IsDateValidation {
  errorMessage = 'Error: entered date format is not allowed';
  constructor(inputField) {
    this.inputField = inputField;
  }
  validate() {
    return isDate.test(this.inputField.value);
  }
}