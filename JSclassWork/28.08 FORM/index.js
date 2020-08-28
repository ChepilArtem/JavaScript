const emailInput = document.querySelector('#email');
const emailErrorText = document.querySelector('.error-text_email');
const passwordInput = document.querySelector('#password');
const passwordErrorText = document.querySelector('.error-text_password');
const EmailErrorText = document.querySelector('.error-text_password');

const formElem = document.querySelector('.login-form');

//algo
//1. read form data after submit+++
//2. validate email
//3. validate password

const handleSubmit = (event) => {
    event.preventDefault();
    // event.stopPrapogation();
    const formData = 
        JSON.stringify(Object.fromEntries(new FormData(formElem)));
    alert(formData);
}
formElem.addEventListener('submit', handleSubmit);

const validateEmail = (email) => {
    email.includes('@') ? null : 'incorrect email';
}

const handleEmail = (event) => {
    const email = event.target.value;
    const error = email ? validateEmail(email) : 'incorrect email';
    emailErrorText.textContent = error;
}


// const handleEmail = (event) => {
//     let error = event.target.value ? null : 'email requured';

//     // if(!error) {
//     //     error = event.target.value.includes('@')
//     //      ? null
//     //      : 'incorrect email';
//     // }


//     EmailErrorText.textContent = error;
// }

emailInput.addEventListener('.input', handleEmail);



const handlePassword = (event) => {
    const error = event.target.value ? null : 'password requured';
    passwordErrorText.textContent = error;
}

passwordInput.addEventListener('.input', handlePassword);


























// // так можно получить данные формы
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]
// const formData = formFields.reduce(function(acc, formField) {
//     const prop = formField[0]; // здесь "name" инпута
//     const value = formField[0]; // здесь "value" инпута
//     // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//     // const [prop, value] = formField;
//     return {
//         // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//         ...acc,
//         // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//         [prop]: value,
//     };
// }, {});

