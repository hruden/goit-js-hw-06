const inputEl = document.getElementById('validation-input')



inputEl.addEventListener('blur', onInputBlur)
const dataSet = inputEl.getAttribute('data-length')


function onInputBlur(event){
    const inputText = event.target.value.trim().length
    if((Number(dataSet)) === inputText){
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
}
else{
    inputEl.classList.remove('valid')
    inputEl.classList.add('invalid')
}
}

