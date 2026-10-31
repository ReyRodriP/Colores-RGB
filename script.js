const red = document.getElementById('rojo');
const green = document.getElementById('verde');
const blue = document.getElementById('azul')

const valueB = document.getElementById('valueB');
const valueG = document.getElementById('valueG');
const valueR = document.getElementById('valueR');


let cambio = () => {
    valueR.textContent = red.value;
    valueB.textContent = blue.value;
    valueG.textContent = green.value;

    document.body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
}
cambio();

red.addEventListener('input', cambio);
green.addEventListener('input', cambio);
blue.addEventListener('input', cambio);


