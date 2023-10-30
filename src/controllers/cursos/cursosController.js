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
    cursos.push(user);
    return [null, user];
}

const update = (nombre_curso, fecha_curso, id_profe, email) => {

    if (id === undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
    if (nombre_curso === undefined || fecha_curso === undefined || id_profe === undefined || email === undefined) {
        const error = "nombre_curso, fecha_curso y email deben ser definidos";
        return [error, null];
    }
    try {
        const user = cursos.find(element => element.id == id);
        user.nombre_curso = nombre_curso;
        user.fecha_curso = fecha_curso;
        user.id_profe = id_profe;
        user.email = email;
        return [null, user];
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