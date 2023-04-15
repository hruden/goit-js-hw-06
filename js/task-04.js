const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const valueEl = document.getElementById('value')


const counterValue = {
    value: 0,
    increment(){
        this.value +=1
    },
    decrement(){
        this.value -=1
    },
}
incrementBtn.addEventListener('click', function(){
    counterValue.increment(),
    valueEl.textContent = counterValue.value
})
decrementBtn.addEventListener('click', function(){
    counterValue.decrement(),
    valueEl.textContent = counterValue.value
})