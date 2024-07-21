const contactExport = 'Contact content export';
export default contactExport;

const formAdvancedOptions = document.querySelectorAll('.contact__form-box');

const formCheckboxes = document.querySelectorAll(
  '.contact__form-box--checkbox'
);

const formClauseCheckbox = document.querySelector(
  '.contact__form-clause--checkbox'
);

const formCheckBoxesTxt = document.querySelectorAll('.contact__form-box--text');

const formTextArea = document.querySelector('.contact__form-option--textarea');

const formInputs = document.querySelectorAll('.contact__form-option--input');

formAdvancedOptions.forEach((option) => {
  option.addEventListener('click', () => {
    console.log(option.closest('input'));
  });
});

formCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {});
});

const clearScreen = () => {
  formInputs.forEach((input) => {
    input.value = '';
  });
  formTextArea.value = '';

  formCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  formClauseCheckbox.checked = false;
};

window.addEventListener('DOMContentLoaded', () => {
  clearScreen();
});
