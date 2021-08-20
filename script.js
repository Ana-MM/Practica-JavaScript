let ArrayLetraDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

const numeroDNI = document.getElementById('numeroDNI');
const letraaDNI = document.getElementById('letraDNI');
const botonEnviar = document.getElementById('button');
const letra = document.getElementById('letra')
const resultadoLetra = document.getElementById('resultadoLetra');

const comprobarValidez = () => {
    if (numeroDNI.value === "" && letraDNI.value === "") {
        alert("No se ha rellenado ningún campo ")
    } else if (numeroDNI.value === "") {
        alert("El campo Número DNI está vacío")
        borrarDatos()
    } else if (letraDNI.value === "") {
        alert("El campo Letra DNI está vacío")
        borrarDatos()
    } else {
        comprobarNumero()
    }
}

const comprobarNumero = () => {
    let valorNumericoDNI = parseInt(numeroDNI.value, 10)
    if (isNaN(valorNumericoDNI)) {
        alert("El formato no es válido")
        borrarDatos()
    } else if (valorNumericoDNI > 99999999) {
        alert("El campo número del DNI es demasiado largo")
        borrarDatos()
    } else if (valorNumericoDNI < 1) {
        alert("El número del DNI no es válido, es negativo")
        borrarDatos()
    } else {
        comprobarLetra(valorNumericoDNI)
    }
}

const comprobarLetra = num => {
    let restoDNI = num % 23
    if (ArrayLetraDNI[restoDNI] === letraDNI.value.toUpperCase()) {
        letra.textContent = ArrayLetraDNI[restoDNI]
        resultadoLetra.classList.remove('ocultar')
        letra.classList.remove('rojo')
        letra.classList.add('verde')
        alert("La letra introducida SI es correcta")
    } else if (letraDNI.value.length > 1) {
        alert("El campo letra DNI es demasiado largo")
        borrarDatos()
    } else {
        letra.textContent = ArrayLetraDNI[restoDNI]
        resultadoLetra.classList.remove('ocultar')
        letra.classList.remove('verde')
        letra.classList.add('rojo')
        alert("La letra introducida NO es correcta")
    }
}

function borrarDatos() {
    numeroDNI.value = ""
    letraDNI.value = ""
    resultadoLetra.classList.add('ocultar')
}

botonEnviar.addEventListener('click', () => {
    comprobarValidez()
})

numeroDNI.addEventListener('keyup', e => {
    if (e.key === "Enter") {
        comprobarValidez()
    }
})
letraDNI.addEventListener('keyup', e => {
    if (e.key === "Enter") {
        comprobarValidez()
    }
})