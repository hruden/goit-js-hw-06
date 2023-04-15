const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (password.length === 0 || email.length === 0){
        alert('Усі поля повинні бути заповненні');}
    else {
        const formData = {
            email,
            password
        };
        console.log(formData);
        formEl.reset();
    }
}

