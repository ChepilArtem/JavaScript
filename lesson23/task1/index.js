const emailInputElem = document.querySelector("#email");
const passInputElem = document.querySelector("#password");
const emailErrorElem = document.querySelector(".error-text_email");
const passErrorElem = document.querySelector(".error-text_password");


const isRequired = value => value ?
    undefined :
    'Required';
const isEmail = value => value.includes('@') ?
    undefined :
    'Should be an email';

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
}
const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map(i => i(value))
        .filter(errorText => errorText)
        .join(', ');
}

const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrorElem.textContent = errorText;

}
const onPassChange = event => {
    const errorText = validate('password', event.target.value);
    passErrorElem.textContent = errorText;

}

emailInputElem.addEventListener('input', onEmailChange);
passInputElem.addEventListener('input', onPassChange);

const formElem = document.querySelector(".login-form");
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});
    alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);