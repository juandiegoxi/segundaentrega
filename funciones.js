const fs = require('fs');
listaCursos = [];
listaUsuarios = [];
listaInscritos = [];

// metodo para crear la lista con los cursos disponibles
const crear = (curso) => {
    listar();
    let cur = {
        nombre: curso.nombre,
        id: curso.id,
        descripcion: curso.descripcion,
        valor: curso.valor,
        modalidad: curso.modalidad,
        intensidad: curso.intensidad,
        estado: curso.estado
    };
    // valida que el id del curso no este repetido
    let duplicado = listaCursos.find(nom => nom.id == curso.id)
    if (!duplicado) {
        listaCursos.push(cur);
        console.log(listaCursos);
        guardar();
    }
    else
        console.log('ya existe ese id, no se puede crear el curso')
}

// metodo para crear la lista de usuarios
const crearu = (usuario) => {
    listaru();
    let ur = {
        nombre: usuario.nombre,
        id: usuario.id,
        correo: usuario.correo,
        telefono: usuario.telefono
    };
    // valida que el id del usuario no este repetido
    let duplicado = listaUsuarios.find(nom => nom.id == usuario.id)
    if (!duplicado) {
        listaUsuarios.push(ur);
        console.log(listaUsuarios);
        guardaru();
    }
    else
        console.log('ya existe esa identificacion en la base de datos')
}

// metodo para crear la lista de estudiantes inscritos 
const creari = (usuario) => {
    listaru();
    listar();
    let cur = listaCursos.find(existe => existe.nombre == usuario.curso && existe.estado == "disponible")
    if (!cur) {
        console.log('El curso solicitado no esta disponible')
    } else {
        let est = listaUsuarios.find(buscar => buscar.id == usuario.id && buscar.nombre == usuario.nombre)
        if (!est) {
            console.log('no se encuentra matriculado este estudiante')
        } else {
            listari();
            let ur = {
                nombre: usuario.nombre,
                id: usuario.id,
                curso: usuario.curso
            };
            // valida que el usuario no este matriculado en el curso
            let duplicado = listaInscritos.find(nom => nom.curso == usuario.curso && nom.nombre == usuario.nombre)
            if (!duplicado) {
                listaInscritos.push(ur);
                console.log(listaInscritos);
                console.log('Te has inscrito exitosamente al curso solicitado')
                guardari();
            } else
                console.log('Ya estas matriculado a ese curso')
        }
    }
}

// metodo para cargar los usuarios del JSON
const listaru = () => {
    try {
        listaUsuarios = require('./listadou.json');
    } catch (error) {
        listaUsuarios = [];
    }
}

// metodo para cargar los datos del JSON
const listar = () => {
    try {
        listaCursos = require('./listado.json');
    } catch (error) {
        listaCursos = [];
    }
}

// metodo para cargar los estudiantes inscritos del JSON
const listari = () => {
    try {
        listaInscritos = require('./listadoi.json');
    } catch (error) {
        listaInscritos = [];
    }
}

// para guardar los datos en el JSON
const guardar = () => {
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo de cursos.txt ')
    });
}

// metodo para guardar los usuarios en el JSON
const guardaru = () => {
    let datos = JSON.stringify(listaUsuarios);
    fs.writeFile('listadou.json', datos, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo de usuarios.txt ')
    });
}

// metodo para guardar los usuarios inscritos en el JSON
const guardari = () => {
    let datos = JSON.stringify(listaInscritos);
    fs.writeFile('listadoi.json', datos, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo de inscritos.txt ')
    });
}

// metodo para mostrar la informacion de los cursos
const mostrar = () => {
    listar()
    console.log('Los cursos disponibles son:' + "\n")
    listaCursos.forEach(curso => {
        console.log('El nombre del curso es: ' + curso.nombre);
        console.log(' Descripcion: ' + curso.descripcion);
        console.log(' El valor a pagar para matricular el curso es: ' + curso.valor + "\n")
    });
}

// metodo para mostrar los usuarios registrados en la base de datos
const mostraru = () => {
    listaru()
    console.log('Los estudiantes registrados son:' + "\n")
    listaUsuarios.forEach(usuario => {
        console.log('El nombre del usuario es: ' + usuario.nombre);
        console.log('Su identificacion es: ' + usuario.id);
        console.log('Su correo electronico es: ' +usuario.correo);
        console.log('Su telefono es: ' + usuario.telefono +  "\n")
    });
}

// metodo para mostrar la informacion detallada de un curso especifico recibiendo como parametro el nombre
const mostrarcurso = (nom) => {
    listar()
    let cur = listaCursos.find(buscar => buscar.nombre == nom)
    if (!cur) {
        console.log('no existe este curso en nuestra base de datos')
    }
    else {
        console.log('Descripcion del curso: ' + cur.descripcion);
        console.log('Modalidad: ' + cur.modalidad);
        console.log('Intensidad horaria: ' + cur.intensidad + "\n")
    }
}

// metodo para buscar un curso disponible ingresando por pantalla el nombre
const mostrarCursosDisponibles = () => {
    listar()
    let disponibles = listaCursos.filter(est => est.estado == 'disponible')
    if (disponibles.lenght == 0) {
        console.log('no hay ningun curso disponible')
    }
    else
        console.log('Los cursos disponibles son: ' + "\n")
    disponibles.forEach(curso => {
        console.log('Nombre del curso: '+ curso.nombre);
        console.log('Descripcion del curso: ' + curso.descripcion);
        console.log('Modalidad: ' + curso.modalidad);
        console.log('Intensidad horaria: ' + curso.intensidad + "\n")
    });
}

// metodo para mostrar todos los cursos por pantalla 
const mostrarCursoDisponible = (nom) => {
    listar();
    let cur = listaCursos.find(buscar => buscar.nombre == nom)
    if (!cur) {
        console.log('El curso inscrito no esta disponible o no existe')
    } else {
        listaCursos.forEach(curso => {
            if (curso.nombre == nom && curso.estado == 'disponible') {
                console.log('Descripcion del curso: ' + curso.descripcion);
                console.log('Modalidad: ' + curso.modalidad);
                console.log('Intensidad horarioa: ' + curso.intensidad + "\n")
            } 
        });
    }
}

// metodo para mostrar los estudiantes por curso
const mostrarinscritos = () => {
    console.log('Cargando la informacion de los cursos.......' + "\n")
    listar();
    listaCursos.forEach(curso => {
        console.log('Curso: ' + curso.nombre + ' estudiantes inscritos : ' + "\n")
        cargarInscritos(curso.nombre);
    });
}

// metodo que recibe como parametro un curso para imprimir los estudiantes inscritos en el
const cargarInscritos = (nom) => {
    listari();
    listaInscritos.forEach(ins => {
        if (ins.curso == nom) {
            console.log('' + ins.nombre + "\n");
        }
    });
}

// metodo que actualiza el estado de un curso
const actualizar = (id) => {
    listar()
    let encontrado = listaCursos.find(buscar => buscar.id == id)
    if(!encontrado){
        console.log('el curso no existe')
    }
    else{
        if(encontrado.estado == "disponible"){
            encontrado.estado = "cerrado";
            console.log('Se ha actualizado el estado');
            guardar();
        }
    else{
        encontrado.estado = "disponible";
        console.log('Se ha actualizado el estado');
        guardar();
    }
    }
}

// método que recibe como parámetro el id del estudiante y el nombre del curso para proceder a eliminar la inscripción
const eliminarInscrito = (idx, cursox) => {
    listari();
    let nuevo = listaInscritos.filter(mat => !(mat.id == idx && mat.curso == cursox));
    if (nuevo.length == listaInscritos.length){
        console.log('No se encontró ningun registro con la información suministrada');
    }else{
        listaInscritos = nuevo;
        guardari();
        console.log('Inscripción eliminada correctamente' + '\n');
        console.log('Estudiantes inscritos en '+ cursox + '\n');
        nuevo.forEach(ins =>  {
            if (ins.curso == cursox) {
            console.log('' + ins.nombre + "\n");
            }
        });
    }
}

module.exports = {
    crear,
    crearu,
    creari,
    mostrar,
    mostraru,
    mostrarcurso,
    mostrarCursosDisponibles,
    mostrarCursoDisponible,
    mostrarinscritos,
    actualizar,
    eliminarInscrito
};