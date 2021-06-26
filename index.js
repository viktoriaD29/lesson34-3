const formElem = document.querySelector('.login-form');
const emailElem = document.querySelector('#email');
const nameElem = document.querySelector('#name');
const passElem = document.querySelector('#password');
const errorElem = document.querySelector('.error-text');
const buttunElem = document.querySelector('.submit-button');

const formDate = new FormData(formElem);

const onFormClick = (e) => {
  e.preventDefault();
  const baseUrl = 'https://60d5f912943aa60017768d3c.mockapi.io/api/v1/forms';

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: JSON.stringify(formDate),
  }).then((responce) => {
    try {
      alert(JSON.stringify(responce));
    } catch {
      errorElem.innerHTML = 'Failed to create user';
    }
  });

  /*const formDate = [...new FormData(formElem)]
    .reduce((acc, [field, value]) => ({...acc, [field]: value}), {})

  alert(JSON.stringify(formDate))*/

  emailElem.innerHTML = '';
  nameElem.innerHTML = '';
  passElem.innerHTML = '';

  const statusInput = formElem.reportValidity();
  if (!statusInput) {
    buttunElem === disabled;
  }
};

formElem.addEventListener('submit', onFormClick);

/*const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value 
  ? undefined
  : 'Required'

const isEmail = value => value.includes('@')
  ? undefined
  : 'Should be an email'

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
}

const onEmailChange = event => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText
}

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange)
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault()
  const formData = [...new FormData(formElem)]
    .reduce((acc, [field, value]) => ({...acc, [field]: value}), {})

  alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);*/
