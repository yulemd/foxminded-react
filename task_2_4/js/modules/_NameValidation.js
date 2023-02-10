//name check
const beginWithLetter = /^[A-Za-z]*[A-Za-z][A-Za-z0-9-. _]*$/; 

export class NameValidation {
  errorMessage = 'Error: Please, enter a valid name';
  constructor(inputField) {
    this.inputField = inputField;
  }
  validate() {
    return beginWithLetter.test(this.inputField.value);
  }
}