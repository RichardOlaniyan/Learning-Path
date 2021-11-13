window.addEventListener('DOMContentLoaded', tempConverter)
function tempConverter() {
    let tKev = document.getElementById('tempK')
    let tFah = document.getElementById('fahResult')
    let convertBtn = document.getElementById('convert')
    let tCel = document.getElementById('celResult')

    convertBtn.addEventListener('click', () => { tFah.innerHTML = fahConvert(tKev.value) + "°F"
    tCel.innerHTML = celConvert(tKev.value) + "°C"
    })

}

function fahConvert(temp) {
  return ((temp - 273.15)* 1.8) + 32
}

function celConvert(temp) {
return (temp - 273.15)
}