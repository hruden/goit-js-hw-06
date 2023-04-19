const inputEl = document.getElementById('font-size-control')
const spanEl = document.getElementById('text')
onChangeFontSize()

inputEl.addEventListener('input', onChangeFontSize)


function onChangeFontSize(){
    const spanElGetPx = `${inputEl.valueAsNumber}px`;
    spanEl.style.fontSize = spanElGetPx;
}
