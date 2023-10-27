const dataUsers = [
    {
    nombre: "Juan",
    primer_apellido: "Gómez",
    segundo_apellido: "López",
    email: "juan.gomez@email.com"
  },
  {
    nombre: "María",
    primer_apellido: "Rodríguez",
    segundo_apellido: "Pérez",
    email: "maria.rodriguez@email.com"
  },
  {
    nombre: "Luis",
    primer_apellido: "Fernández",
    segundo_apellido: "Martínez",
    email: "luis.fernandez@email.com"
  },
  {
    nombre: "Laura",
    primer_apellido: "García",
    segundo_apellido: "Sánchez",
    email: "laura.garcia@email.com"
  },
  {
    nombre: "Pedro",
    primer_apellido: "Pérez",
    segundo_apellido: "Gómez",
    email: "pedro.perez@email.com"
  },
  {
    nombre: "Ana",
    primer_apellido: "López",
    segundo_apellido: "Fernández",
    email: "ana.lopez@email.com"
  },
  {
    nombre: "Carlos",
    primer_apellido: "Martínez",
    segundo_apellido: "González",
    email: "carlos.martinez@email.com"
  },
  {
    nombre: "Elena",
    primer_apellido: "Díaz",
    segundo_apellido: "Rodríguez",
    email: "elena.diaz@email.com"
  }
];
let users = [];
let maxId = 1;

for (let i = 0; i < 8; i++) {
    const newUser = {
        id: i + 1,
        nombre: dataUsers[i].nombre,
        primer_apellido: dataUsers[i].primer_apellido,
        segundo_apellido: dataUsers[i].segundo_apellido,
        email: dataUsers[i].email
    }
    users.push(newUser);
    maxId++;
}

const getAll = () => {
    return [null, users];
}

const getById = (id) => {
    try {
        const user = users.find(element => element.id == id);
        return [null, user];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = (nombre, primer_apellido, segundo_apellido, email) => {
    if (nombre === undefined || primer_apellido === undefined || segundo_apellido === undefined || email === undefined) {
        const error = "nombre, primer_apellido y email deben ser definidos";
        return [error, null];
    }
    const user = {
        id: maxId++,
        nombre: nombre,
        primer_apellido: primer_apellido,
        email: email
    };
    users.push(user);
    return [null, user];
}

const update = (id, nombre, primer_apellido, segundo_apellido, email) => {

    if (id === undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
    if (nombre === undefined || primer_apellido === undefined || segundo_apellido === undefined || email === undefined) {
        const error = "nombre, primer_apellido y email deben ser definidos";
        return [error, null];
    }
    try {
        const user = users.find(element => element.id == id);
        user.nombre = nombre;
        user.primer_apellido = primer_apellido;
        user.segundo_apellido = segundo_apellido;
        user.email = email;
        return [null, user];
    }
    catch (e) {
        return [e.message, null];
    }
};

const remove = (id) => {
    try {
        const user = users.find(element => element.id == id);
        users = users.filter(element => element.id != id);
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