import cursosController from "./cursosController.js";

 const getAll =(req,res) =>{
    const [error, cursos] = cursosController.getAll();
    res.render("cursos/list",{error,cursos});
}

const getById = (req,res) =>{
    const id = req.params.id;
    const [error,curso] = cursosController.getById(id);
    res.render("cursos/show",{error,curso});   
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("cursos/new",{error});
}

const create = (req,res) =>{
    const {nombre, primer_apellido, segundo_apellido, email} = req.body;
    const [error,user] = cursosController.create(nombre, primer_apellido, segundo_apellido, email);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/cursos/new?error=${uriError}`)
    }
    res.redirect("/cursos");
}

const updateForm = (req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,user] = cursosController.getById(id);
    if(error){
        res.redirect("/cursos");
    }
    res.render("cursos/edit",{error:errorMessage,user});
}

const update = (req,res) =>{
    const id = req.params.id;
    const {tipo, peso} = req.body;
    const [error,user] = cursosController.update(id,tipo,peso);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/cursos/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/cursos/${id}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,user] = cursosController.remove(id);
    res.redirect("/cursos");
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