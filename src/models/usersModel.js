import connection from "../config/mysql.js";

//Listar todos los usuarios
const findAll= async ()=>{
    const queryString = "SELECT * FROM usuarios;";
    const [rows,fields] = await connection.query(queryString);
    console.log(rows);
    console.log(fields);
    return rows;
}

//Listar todos los usuarios de id concreto

const findByPk = async (pk) =>{
    const queryString = "SELECT * FROM usuarios WHERE id_usuario=?;";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log(rows);
    console.log(fields);
    return rows[0];
}

const update = async(data,pk) =>{
    let queryString = "UPDATE usuarios SET nombre=?, primer_apellido=?, segundo_apellido=?, email=?, role=?, password=?, WHERE id_usuario=?;";
    const [rows,fields] = await connection.query(queryString,[data.nombre,data.primer_apellido,data.segundo_apellido,data.email,data.role,data.password,pk]);
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

const remove = async (pk)=>{
    const queryString = "DELETE FROM usuarios WHERE id_usuario=?;";
    const [rows,fields] = await connection.query(queryString,[pk]);
    return "Usuario eliminado: " + rows[0];
}

export default {
    findAll,
    findByPk,
    update,
    remove
    
}