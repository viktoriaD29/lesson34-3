const formElem = document.querySelector('.login-form');
const emailElem = document.querySelector('#email');
const nameElem = document.querySelector('#name');
const passElem = document.querySelector('#password');
const errorElem = document.querySelector('.error-text');
const buttunElem = document.querySelector('.submit-button');

const baseUrl = 'https://60d5f912943aa60017768d3c.mockapi.io/api/v1/forms';

const createUser = (newUser) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  });
};

const getUsers = () => {
  return fetch(baseUrl).then((responce) => responce.json());
};

const onSubmitClick = (e) => {
  e.preventDefault();

  if (formElem.reportValidity()) {
    buttunElem.disabled = true;
  }

  const emailText = emailElem.value;
  const nameText = nameElem.value;
  const passText = passElem.value;

  emailElem.value = '';
  nameElem.value = '';
  passElem.value = '';

  const newUser = {
    email: emailText,
    name: nameText,
    password: passText,
  };

  return createUser(newUser)
    .then(() => getUsers())
    .then((responce) => {
      if (!responce.ok) {
        errorElem.textContent = 'Failed to create user';
      } else {
        errorElem.value = '';
      }
      alert(JSON.stringify(responce));
    });
};

formElem.addEventListener('submit', onSubmitClick);

/*const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

if (!responce.ok) {
        errorElem.textContent = 'Failed to create user';
      } else {
        errorElem.value = '';
      }
      alert(JSON.stringify(responce));

 try {
        alert(JSON.stringify(responce))
      } catch {
        errorElem.textContent = 'Failed to create user';
      }

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
