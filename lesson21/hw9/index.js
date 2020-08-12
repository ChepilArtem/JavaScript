export const finishForm = () => {
    const formEl = document.querySelector('.login-form');
    
    const newInput = document.createElement('input');
    
    const secondInput = document.querySelector('input');
    secondInput.setAttribute('type', 'password');
    

    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', 'login');
    formEl.append(newInput);
}