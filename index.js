const formElem = document.querySelector('.login-form');
const emailElem = document.querySelector('#email');
const nameElem = document.querySelector('#name');
const passElem = document.querySelector('#password');
const errorElem = document.querySelector('.error-text');
const buttonElem = document.querySelector('.submit-button');

const onSubmitClick = (e) => {
  e.preventDefault();

  const baseUrl = 'https://60d5f912943aa60017768d3c.mockapi.io/api/v1/form';

  const createUser = (newUser) => {
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(newUser),
    });
  };

  const formData = JSON.stringify(Object.fromEntries(new FormData(formElem)));

  const newUser = {
    formData,
  };

  return createUser(newUser)
    .then((response) => response.json())
    .then((result) => {
      alert(JSON.stringify(result));
      emailElem.value = '';
      nameElem.value = '';
      passElem.value = '';
    })
    .catch((error) => {
      errorElem.textContent = 'Failed to create user';
    });
};

const onInputChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    buttonElem.removeAttribute('disabled');
    //errorElem.textContent = 'Failed to create user';
  } else {
    buttonElem.setAttribute('disabled', true);
    //errorElem.textContent = 'Failed to create user';
  }
};
formElem.addEventListener('submit', onSubmitClick);
formElem.addEventListener('input', onInputChange);
