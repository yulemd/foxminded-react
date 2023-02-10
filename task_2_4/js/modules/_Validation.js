export class FormValidation {
  failedInputs;
  constructor(validationRules) {
    this.validationRules = validationRules;
  }
  validateForm() {
    this.failedInputs = [];
    this.validationRules.forEach((validationRule) => {
      if (!validationRule.validate()) {
        this.failedInputs.push(validationRule);
      }
    });
  }
}