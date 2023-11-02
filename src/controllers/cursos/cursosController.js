import cursoModel from "../../models/cursoModel.js";
import {Op} from "sequelize"
 
    
const getAll = async(q=null) => 
{
    const options = {};
    if(q){
        options.where = {nombre_curso:{[Op.like]:`%${q}%`},}

    }
    try{
        const curso = await cursoModel.findAll(options);
        return [null, curso]
    }
    catch(e)
    {
        return[e.message,null];
    }
}

const getById = async (id) => {
    try {
        const curso = await cursoModel.findByPk(id);
        return [null, curso];
    }
    catch (e) {
        return [e.message, null];
    }
}


const create = async (nombre_curso, fecha_curso, id_profe) => {
    if (nombre_curso == undefined || fecha_curso == undefined || id_profe == undefined) {
        const error = "nombre_curso, fecha_curso y id_profe deben ser definidos";
        return [error, null];
    }
    try{
    const curso = await cursoModel.create({nombre_curso,fecha_curso,id_profe})
    return [null, curso];
    }

    catch (e) {
        return [e.message, null];
    }
}


const update = async (id,nombre_curso,fecha_curso,id_profe) => {

    if (id == undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
    if (nombre_curso == undefined || fecha_curso == undefined || id_profe == undefined) {
        const error = "nombre_curso, fecha_curso y id_profe deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id", id)
        const curso = await cursoModel.findByPk(id);
        curso.nombre_curso = nombre_curso;
        curso.fecha_curso = fecha_curso;
        curso.id_profe = id_profe;
        return [null, curso];
    }
    catch (e) {
        console.log(e);
        return [e.message, null];
    }
};

const remove = async (id) => {
    try {
        const curso = await cursoModel.findByPk(id);
        
        if (!curso) {
            const error = "No se ha encontrado ningún elemento con ese ID";
            return [error, null];
        }
        curso.destroy();
        return [null, curso];
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