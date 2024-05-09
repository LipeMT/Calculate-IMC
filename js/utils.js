export function notANumber(value){
    return isNaN(value) || value == "" //return a boolean value (true or false)
}

export function calculateIMC(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2)
}