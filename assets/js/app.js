console.log("Javascript de Conecta Cultura está funcionando");


const nombreActividad = "Taller de fotografía";
const capacidad = 30;
let inscritos = 29;

console.log(nombreActividad);
console.log(capacidad);
console.log(inscritos);




const cuposDisponibles = capacidad - inscritos;

console.log(
  `Quedan ${cuposDisponibles} cupos disponibles`
);



console.log(cuposDisponibles > 0);  // true
console.log(cuposDisponibles === 0); // false


if (cuposDisponibles > 0) {
  console.log("La actividad tiene cupos");
}

if (cuposDisponibles > 0) {
  console.log("La actividad tiene cupos");
} else {
  console.log("La actividad está completa");
}

let estado = "Sin determinar";

if (cuposDisponibles === 0) {
  estado = "Completa";
} else if (cuposDisponibles <= 5) {
  estado = "Últimos cupos";
} else {
  estado = "Disponible";
}

console.log(estado);

function calcularCupos(capacidad, inscritos) {
  const disponibles = capacidad - inscritos;
  return disponibles;
}

const cuposTaller = calcularCupos(30, 18);
console.log(cuposTaller);



//-------------------------------------------------------

const actividades = [
  "Taller de fotografía",
  "Concierto comunitario",
  "Muestra de teatro"
];

console.log(actividades[0]);
console.log(actividades[1]);
//-------------------------------------------------------

console.log(`La agenda contiene ${actividades.length} actividades`);
//-------------------------------------------------------


for (const actividad of actividades) {
  console.log(actividad);
}


