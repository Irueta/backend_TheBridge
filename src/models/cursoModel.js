import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const cursoModel = sequelize.define("curso",
{
    id_curso:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    nombre_curso: {
        type: DataTypes.STRING,
        allowNull:false
    },
    fecha_curso: {
        type: DataTypes.DATE,
        allowNull:false
    },
    id_profe:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false
    }
})

export default cursoModel;