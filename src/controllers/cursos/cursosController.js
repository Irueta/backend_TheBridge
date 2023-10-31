const getAll = () => {
    return [null, cursos];
}

const getById = (id) => {
    try {
        const curso = cursos.find(element => element.id_curso == id);
        return [null, curso];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = (nombre_curso, fecha_curso, id_profe) => {
    if (nombre_curso === undefined || fecha_curso === undefined || id_profe === undefined) {
        const error = "nombre_curso, fecha_curso y id_profe deben ser definidos";
        return [error, null];
    }
    const curso = {
        nombre_curso: nombre_curso,
        fecha_curso: fecha_curso,
        id_profe : id_profe
    };
    /////HAMEN ZER??? INSERT VALUES....??
    cursos.push(curso);
    return [null, curso];
}

const update = (id, nombre_curso, fecha_curso, id_profe) => {

    if (id === undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
    if (nombre_curso === undefined || fecha_curso === undefined || id_profe === undefined) {
        const error = "nombre_curso, fecha_curso y id_profe deben ser definidos";
        return [error, null];
    }
    try {
        const curso = cursos.find(element => element.id_curso == id);
        curso.nombre_curso = nombre_curso;
        curso.fecha_curso = fecha_curso;
        curso.id_profe = id_profe;
        return [null, curso];
    }
    catch (e) {
        return [e.message, null];
    }
};

const remove = (id) => {
    try {
        const user = cursos.find(element => element.id == id);
        cursos = cursos.filter(element => element.id != id);
        if (!user) {
            const error = "No se ha encontrado ningún elemento con ese ID";
            return [error, null];
        }
        return [null, user];
    }
    catch (e) {
        return [e.message, null];
    }
}


export default {
    getAll,
    getById,
    create,
    update,
    remove
};