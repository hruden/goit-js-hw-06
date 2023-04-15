const inputEl = document.getElementById('name-input')
const nameEl = document.getElementById('name-output')
inputEl.addEventListener('input', onNameChange)
function onNameChange (){
    inputEl.value.trim().length === 0 ? nameEl.textContent = "Anonymous" : nameEl.textContent = inputEl.value
}

