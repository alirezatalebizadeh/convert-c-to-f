'use strict'
let resultValue = 0, $ = document

let convertBtn = $.querySelector('.convertButton')
let resetBtn = $.querySelector('.resetButton')
let changeBtn = $.querySelector('.changeButton')
let CElem = $.querySelector('.C');
let FElem = $.querySelector('.F')
let inputElem = $.querySelector('#converter')
let resElem = $.querySelector('.result')


function convertFunc() {

    if (inputElem.value === '' || isNaN(inputElem.value)) {
        resElem.innerHTML = 'please insert correct value !'
        resElem.style.color = 'yellow'
    } else {
        if (CElem.innerHTML === '°C') {
            resultValue = ((inputElem.value * 18 / 10) + 32)
            resElem.innerHTML = `${inputElem.value} °C TO ${resultValue.toFixed(2)} °F`
            resElem.style.color = 'green'
        } else {
            resultValue = ((inputElem.value - 32) * 5 / 9)
            resElem.innerHTML = `${inputElem.value} °F TO ${resultValue.toFixed(2)} °C`
            resElem.style.color = 'green'
        }
    }
    inputElem.value = ''

}


function resetFunc() {
    inputElem.value = ''
    resElem.innerHTML = ''
}



function changeFunc() {

    if (CElem.innerHTML === '°C') {
        CElem.innerHTML = '°F'
        FElem.innerHTML = '°C'
        inputElem.setAttribute('placeholder', '°F')
        $.title = 'convert °F to °C'
    } else {
        CElem.innerHTML = '°C'
        FElem.innerHTML = '°F'
        inputElem.setAttribute('placeholder', '°C')
        $.title = 'convert °C to °F'
    }

}


convertBtn.addEventListener('click', convertFunc)
resetBtn.addEventListener('click', resetFunc)
changeBtn.addEventListener('click', changeFunc)