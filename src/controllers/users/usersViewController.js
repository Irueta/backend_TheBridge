import usersController from "./usersController.js";

 const getAll =(req,res) =>{
    const [error, users] = usersController.getAll();
    res.render("users/list",{error,users});
}

const getById = (req,res) =>{
    const id = req.params.id;
    const [error,user] = usersController.getById(id);
    res.render("users/show",{error,user});   
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("users/new",{error});
}

const create = (req,res) =>{
    const {nombre, primer_apellido, segundo_apellido, email} = req.body;
    const [error,user] = usersController.create(nombre, primer_apellido, segundo_apellido, email);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/users/new?error=${uriError}`)
    }
    res.redirect("/users");
}

const updateForm = (req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,user] = usersController.getById(id);
    if(error){
        res.redirect("/users");
    }
    res.render("users/edit",{error:errorMessage,user});
}

const update = (req,res) =>{
    const id = req.params.id;
    const {tipo, peso} = req.body;
    const [error,user] = usersController.update(id,tipo,peso);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/users/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/users/${id}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,user] = usersController.remove(id);
    res.redirect("/users");
}

export default{
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
};