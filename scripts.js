const convert = document.getElementById("convert-btn")
let clear = document.getElementById("clear-btn")
let input = document.getElementById("num-input")
const convertedVals = document.getElementsByClassName("converted-val")


//20 meters = 65.616 feet | 20 feet = 6.096 meters
const length = document.getElementById("length-el")
const meter = 1
const foot = 3.2808

//20 liters = 5.284 gallons | 20 gallons = 75.708 liters
const volume = document.getElementById("volume-el")
const liter = 1
const gallon = 0.2641

//20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
const mass = document.getElementById("mass-el")
const kilo = 1
const pound = 2.2046

convert.addEventListener("click", function() {
    renderConversion()
})

function renderConversion() {    
    let value = +input.value
    let meterInput = +input.value * meter 
    let footInput = +input.value * foot

    let literInput = +input.value * liter
    let gallonInput = +input.value * gallon

    let kiloInput = +input.value * kilo
    let poundInput = +input.value * pound


    length.innerHTML = `
        ${value} <strong>meters</strong> = ${footInput.toFixed(3)}  <strong>feet</strong><br>  
        ${value} <strong>feet</strong> = ${(meterInput / foot).toFixed(3)} <strong>meters</strong>
    `  

    volume.innerHTML = `
        ${value} <strong>liters</strong> = ${gallonInput.toFixed(3)}  <strong>gallons</strong><br> 
        ${value} <strong>gallons</strong> = ${(literInput / gallon).toFixed(3)} <strong>liters</strong>
    `
    mass.innerHTML = `
        ${value} <strong>kilos</strong> = ${poundInput.toFixed(3)}  <strong>pounds</strong><br> 
        ${value} <strong>pounds</strong> = ${(kiloInput / pound).toFixed(3)} <strong>kilos</strong>
    `
}

clear.addEventListener("click", function() {    
    for(let i = 0; i < convertedVals.length; i++) {
        convertedVals[i].innerHTML = ""
    }
    input.value = ""
})