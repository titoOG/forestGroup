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

  if (formMsg.value === '') {
    formMsg.placeholder = 'Uzupełnij treść wiadomości!';
    formMsg.classList.add('formError');
  } else {
    formMsg.classList.remove('formError');
  }

  if (formClauseCheckbox.checked === false) {
    formClauseText.classList.add('formError');
  } else {
    formClauseText.classList.remove('formError');
  }
};

// formClauseCheckbox.addEventListener('click', (e) => {
//   if (pageID.id == 'contactPage') {
//     if (e.target.ariaChecked == 'false') {
//       e.target.ariaChecked = 'true';
//     } else if (e.target.ariaChecked == 'true') {
//       e.target.ariaChecked = 'false';
//     }
//   }
// });

formCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    if (e.target.ariaChecked == 'false') {
      e.target.ariaChecked = 'true';
    } else if (e.target.ariaChecked == 'true') {
      e.target.ariaChecked = 'false';
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
  formMsg.placeholder = 'Twoja wiadomość';

  formPerson.classList.remove('formError');
  formMail.classList.remove('formError');
  formMsg.classList.remove('formError');

  formClauseCheckbox.checked = false;
  formClauseCheckbox.ariaChecked = false;
  formClauseText.classList.remove('formError');
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
