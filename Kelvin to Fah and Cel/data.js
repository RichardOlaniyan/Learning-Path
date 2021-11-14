window.addEventListener('DOMContentLoaded', tempConverter)
function tempConverter() {
    let tKev = document.getElementById('tempK')
    let tFah = document.getElementById('fahResult')
    let convertBtn = document.getElementById('convert')
    let tCel = document.getElementById('celResult')

    convertBtn.addEventListener('click', () => { 
    
    //This line passes in the value of the Fahrenheit conversion into the HTML element//
    tFah.innerHTML = fahConvert(tKev.value) + "°F"

    //This line passes in the value of the Celsius conversion into the HTML element//
    tCel.innerHTML = celConvert(tKev.value) + "°C"
    })
}

//This function converts the tempK input to Fahrenheit//
function fahConvert(temp) {
  return Math.round(((temp - 273.15)* 1.8) + 32)
}

//This function converts the tempK input to Celsius//
function celConvert(temp) {
return Math.round((temp - 273.15))
}