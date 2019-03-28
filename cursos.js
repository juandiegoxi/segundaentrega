// clase curso con los atributos obligatorios y opcionales
const nombre = {
   demand: true,
   alias: 'n',
}

const id = {
   demand: true,
   alias: 'i',
}

const descripcion = {
   demand: true,
   alias: 'd',
}

const valor = {
   demand: true,
   alias: 'v',
}

const modalidad = {
   defauld: 'presencial',
   alias: 'm',
}

const intensidad = {
   defauld: 0,
   alias: 't',
}

const estado = {
   default: 'disponible',
   alias: 'e',
}

// metodo de la clase para instanciar las variables
const creacion = {
   nombre,
   id,
   descripcion,
   valor,
   modalidad,
   intensidad,
   estado
}

// metodo para enviar como parametro el nombre capturado por consola
const muestracurso = {
	nombre
}

//metodo para mostrar inscritos
const mostrarinscritos = {
   
}

//metodo para actualizar el estado de un curso
const actualizar = {
   id
}

// comandos para ejecutar trabajar con los cursos y ver la informacion de los mismos
const argv11= require('yargs')
   .command('crear', 'crear curso alias', creacion)
   .command('mostrar', 'mostrar cursos disponibles')
   .command('mostrarcurso', 'muestra la informacion de un curso',muestracurso)
   .command('mostrarcursodisponible', 'muestra la informacion de un curso disponible',muestracurso)
   .command('mostrarcursosdisponibles','muestra todos los cursos con estado dispinible')
   .command('mostrarinscritos', 'muestra los inscritos en cada curso')
   .command('actualizar', 'actualiza el estado de un curso', actualizar)
   .argv

module.exports = {
   argv11
};
