//email check
const isEmailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export class EmailValidation {
  errorMessage = 'Error: The entered email adress does not exist';
  constructor(inputField) {
    this.inputField = inputField;
  }
  validate() {
    return isEmailFormat.test(this.inputField.value);
  }
}