const {argv11}=require('./cursos');
const {argv}=require('./usuario');
const {argv2}=require('./inscribir');
const funciones=require('./funciones')

let comando=argv._[0];

switch (comando){
// caso para crear un curso   (se debe ingresar la informacion obligatoria del curso)
	case 'crear':
	funciones.crear(argv11);
	break
// comando para registrar un usuario en la lista de usuarios (se debe ingresar la informacion personal)
	case 'registrar':
	funciones.crearu(argv);
	break
// comando para mostrar los cursos ofertados
	case 'mostrar':
	funciones.mostrar();
	break
// comando para inscribir estudiante a un curso
	case 'inscribir':
	funciones.creari(argv2);
	break	
// comando para mostrar los usuarios registrados	
	case 'registrados':
	funciones.mostraru();
	break
// comando para mostrar la informacion de un curso  (de requiere el nombre como parametro de busqueda)
    case 'mostrarcurso':
	funciones.mostrarcurso(argv11.nombre);
    break
// comando para mostrar si un curso especifico esta disponible (se requiere el nombre como parametro de busqueda)    
    case 'mostrarcursodisponible':
    funciones.mostrarCursoDisponible(argv11.nombre);
    break
//comando para mostrar los cursos disponibles
	case 'mostrarcursosdisponibles':
	funciones.mostrarCursosDisponibles();
	break	
//comando para mostrar los estudiantes inscritos en cada curso		
	case 'mostrarinscritos':
	funciones.mostrarinscritos();
	break
//comando para actualizar el estado de un curso
	case 'actualizar':
	funciones.actualizar(argv11.id);
	break
// comando para eliminar la inscripción de un estudiante en un curso
	case 'eliminarInscrito':
	funciones.eliminarInscrito(argv2.id, argv2.curso);
	break
// muestra mensaje de error a un comando no existente	
	default:
	console.log('No ingreso una funcion existente')

}