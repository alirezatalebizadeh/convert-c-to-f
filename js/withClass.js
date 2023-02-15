"use strict"
let $ = document;

class convertCToF {
    constructor() {
        this.convertBtn = $.querySelector('.convertButton')
        this.resetBtn = $.querySelector('.resetButton')
        this.changeBtn = $.querySelector('.changeButton')
        this.CElem = $.querySelector('.C');
        this.FElem = $.querySelector('.F')
        this.inputElem = $.querySelector('#converter')
        this.resElem = $.querySelector('.result')


        this.render()
    }


    render() {
        console.log('rendering');
        this.convertBtn.addEventListener('click', () => {
            this.convertFunc()
        })

        this.resetBtn.addEventListener('click', () => {
            this.resetFunc()
        })

        this.changeBtn.addEventListener('click', () => {
            this.changeFunc()
        })
    }

    convertFunc() {

        if (this.inputElem.value === '' || isNaN(this.inputElem.value)) {
            this.resElem.innerHTML = 'please insert correct value !'
            this.resElem.style.color = 'yellow'
        } else {
            if (this.CElem.innerHTML === '°C') {
                this.resultValue = ((this.inputElem.value * 18 / 10) + 32)
                this.resElem.innerHTML = `${this.inputElem.value} °C TO ${this.resultValue.toFixed(2)} °F`
                this.resElem.style.color = 'green'
            } else {
                this.resultValue = ((this.inputElem.value - 32) * 5 / 9)
                this.resElem.innerHTML = `${this.inputElem.value} °F TO ${this.resultValue.toFixed(2)} °C`
                this.resElem.style.color = 'green'
            }
        }
        this.inputElem.value = ''
    }

    resetFunc() {
        this.inputElem.value = ''
        this.resElem.innerHTML = ''
    }

    changeFunc() {
        if (this.CElem.innerHTML === '°C') {
            this.CElem.innerHTML = '°F'
            this.FElem.innerHTML = '°C'
            this.inputElem.setAttribute('placeholder', '°F')
            $.title = 'convert °F to °C'
        } else {
            this.CElem.innerHTML = '°C'
            this.FElem.innerHTML = '°F'
            this.inputElem.setAttribute('placeholder', '°C')
            $.title = 'convert °C to °F'
        }

    }

}


new convertCToF()
