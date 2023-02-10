import { NameValidation } from "./modules/_NameValidation.js";
import { EmailValidation } from "./modules/_EmailValidation.js";
import { PasswordValidation } from "./modules/_PasswordValidation.js";
import { ConfirmValidation } from "./modules/_ConfirmValidation.js";
import { IsInRangeValidation } from "./modules/_IsInRangeValidation.js";
import { IsRequiredValidation } from "./modules/_IsRequiredValidation.js";
import { FormValidation } from "./modules/_Validation.js";

//присвоюємо інпути відповідним змінним

const firstnameInput = document.querySelector('input[name="first_name"]');
const lastnameInput = document.querySelector('input[name="last_name"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmInput = document.querySelector('input[name="confirm"]');
const ageInput = document.querySelector('input[name="age"]');

//для валідації інпутів створюємо масив екземплярів об'єктів відповідних класів валідації

const validationRules = [
  new IsRequiredValidation(firstnameInput),
  new NameValidation(firstnameInput), 
  new NameValidation(lastnameInput),
  new IsRequiredValidation(emailInput),
  new EmailValidation(emailInput), 
  new IsRequiredValidation(passwordInput),
  new PasswordValidation(passwordInput), 
  new IsRequiredValidation(confirmInput),
  new ConfirmValidation(confirmInput, passwordInput), 
  new IsInRangeValidation(ageInput)
];

//створюємо об'єкт валідації форми

const formValid = new FormValidation(validationRules);

//отримуємо кнопку "сабміт"

const createBtn = document.querySelector('input[type="submit"]');

//валідуємо форму

createBtn.addEventListener('click', () => {
  if (document.getElementById('error')) {
    hideErrorMessage();
  }
  formValid.validateForm();
  if (formValid.failedInputs.length) {
    showErrorMessage(formValid.failedInputs[0]);
  };
});

//функція відображення повідомлення про помилку заповнення поля форми

function showErrorMessage(inputElement) { 
  inputElement.inputField.insertAdjacentHTML(
    'afterend',
    `<div id= "error" class="error-message">
    ${inputElement.errorMessage}
    </div>`
  );
}

//функція приховування повідомлення про помилку

function hideErrorMessage() {
  if (document.getElementById('error')) {
    document.getElementById('error').remove();
  }
}