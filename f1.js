const tabla = document.querySelector('table');
const botones = document.getElementsByTagName('button');
const filas = document.getElementsByTagName('tr');
const inputs = document.getElementsByTagName('input');

//CREAR
botones[0].onclick = () => {
    let nuevaFila = document.createElement('tr');
    for(let i=0; i < 3; i++) {
        let nuevaColumna = document.createElement('td');
        nuevaColumna.appendChild(document.createTextNode(inputs[i].value));
        nuevaFila.appendChild(nuevaColumna);
        inputs[i].value = "";
    }
    tabla.appendChild(nuevaFila);
}
