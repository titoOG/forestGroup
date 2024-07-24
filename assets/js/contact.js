const contactExport = 'Contact content export';
export default contactExport;

const pageID = document.querySelector('body');
const formBtns = document.querySelectorAll('.contact__form-btns--btn ');
const formCheckboxes = document.querySelectorAll(
  '.contact__form-box--checkbox'
);
const formClauseCheckbox = document.querySelector(
  '.contact__form-clause--checkbox'
);

const formClauseText = document.getElementById('formClauseText');
const formTextArea = document.querySelector('.contact__form-option--textarea');

const formInputs = document.querySelectorAll('.contact__form-option--input');

let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let regexNumbersOnly = /[0-9]|\. /;
let regexLettersOnly = /^[A-Za-z]+$/;

let formPhone = document.getElementById('formPhone');
let optionOne = document.getElementById('optionOne');
let optionTwo = document.getElementById('optionTwo');
let optionThree = document.getElementById('optionThree');
let clauseErrorText = document.getElementById('clauseErrorText');

const formValidation = () => {
  let formPerson = document.getElementById('formPerson');
  let formMail = document.getElementById('formMail');
  let formMsg = document.getElementById('formMsg');

  if (formPerson.value === '') {
    formPerson.placeholder = 'Wprowadź prawidłowe dane!';
    formPerson.classList.add('formError');
  } else {
    formPerson.classList.remove('formError');
  }

  if (formMail.value === '' || !regexEmail.test(formMail.value)) {
    formMail.placeholder = 'Wprowadź poprawny email!';
    formMail.classList.add('formError');
  } else {
    formMail.classList.remove('formError');
  }

  if (formPhone.value.length < 9 && formPhone.value.length >= 1) {
    formPhone.classList.add('formError');
  } else if (formPhone.value.length >= 9) {
    formPhone.classList.remove('formError');
  }

  if (formMsg.value === '') {
    formMsg.placeholder = 'Uzupełnij treść wiadomości!';
    formMsg.classList.add('formError');
  } else {
    formMsg.classList.remove('formError');
  }

  if (formClauseCheckbox.checked === false) {
    formClauseText.classList.add('formErrorText');
  } else {
    formClauseText.classList.remove('formErrorText');
  }

  if (
    optionOne.checked === false &&
    optionTwo.checked === false &&
    optionThree.checked === false
  ) {
    clauseErrorText.textContent = 'Wybierz jedną z powyższych opcji!';
  } else {
    clauseErrorText.textContent = '';
  }
};

formCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    if (e.target.ariaChecked == 'false') {
      e.target.ariaChecked = 'true';
    } else if (e.target.ariaChecked == 'true') {
      e.target.ariaChecked = 'false';
    }

    if (optionOne.checked === true) {
      optionTwo.setAttribute('disabled', 'disabled');
      optionThree.setAttribute('disabled', 'disabled');
    } else if (optionTwo.checked === true) {
      optionOne.setAttribute('disabled', 'disabled');
      optionThree.setAttribute('disabled', 'disabled');
    } else if (optionThree.checked === true) {
      optionOne.setAttribute('disabled', 'disabled');
      optionTwo.setAttribute('disabled', 'disabled');
    }

    if (e.target.checked === false) {
      optionOne.removeAttribute('disabled');
      optionTwo.removeAttribute('disabled');
      optionThree.removeAttribute('disabled');
    }
  });
});

const clearScreen = () => {
  formInputs.forEach((input) => {
    input.value = '';
  });
  formTextArea.value = '';

  formCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.ariaChecked = false;
  });

  formPerson.placeholder = 'Imię i nazwisko';
  formMail.placeholder = 'Email';
  formPhone.placeholder = 'Telefon (opcjonalne)';
  formMsg.placeholder = 'Twoja wiadomość';

  formPerson.classList.remove('formError');
  formMail.classList.remove('formError');
  formPhone.classList.remove('formError');
  formMsg.classList.remove('formError');

  optionOne.removeAttribute('disabled');
  optionTwo.removeAttribute('disabled');
  optionThree.removeAttribute('disabled');

  clauseErrorText.textContent = '';

  formClauseCheckbox.checked = false;
  formClauseCheckbox.ariaChecked = false;
  formClauseText.classList.remove('formErrorText');
};

formBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (btn.id === 'formSubmitBtn') {
      formValidation();
    } else if (btn.id === 'formClearBtn') {
      clearScreen();
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if (pageID.id == 'contactPage') {
    clearScreen();
  }
});

formPhone.addEventListener('keypress', (e) => {
  const event = e || window.event;
  let key = event.keyCode || event.which;
  key = String.fromCharCode(key);
  if (!regexNumbersOnly.test(key)) {
    event.returnValue = false;
    if (event.preventDefault) event.preventDefault();
  }
  if (formPhone.value.length >= 9) {
    event.preventDefault();
  }
});
