let hospedajeCalc = document.getElementById('hospedajeCalc')

 hospedajeCalc.addEventListener('submit', calcularGastos)


 function calcularGastos(e){

e.preventDefault();

let habitacion = document.getElementById('habitacion').value;
let presupuesto = document.getElementById('presupuesto').value;
let transporte = document.getElementById('transporte').value;
let comida = document.getElementById('comida').value;

let gastos = parseInt(habitacion) +  parseInt(transporte) + parseInt(comida)
let balance = presupuesto - gastos


UI(habitacion, presupuesto, balance)

 }


 function UI(habitacion, presupuesto, balance){
    let resultado = document.getElementById('resultado')
    let mostrarResultado = document.createElement('div')

    mostrarResultado.innerHTML = `
    <div class= "container-data row">
    <div class="col s4"
     <h6>${habitacion}</h6>
    </div>
    <div class="col s4"
     <h6>${presupuesto}</h6>
    </div>
    <div class="col s4"
     <h6>${balance}</h6>
    </div>

     </div>


    `
    resultado.appendChild(mostrarResultado)

    limpiar()

 }

 function limpiar(){
    document.getElementById('hospedajeCalc').limpiar()
 }