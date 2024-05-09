import { Modal } from './modal.js'
import { AlertError } from './alert.error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value



    if (notANumber(weight) || notANumber(height)) { //se weight ou height não forem um número ou forem vazios, será mostrado o alert de erro e o return irá parar a execução da funcção para baixo 
        AlertError.open()
        return;
    }

    AlertError.close()

    const imc = calculateIMC(weight, height)
    const message = `Seu IMC é de ${imc}`

    Modal.message.innerText = message
    Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()