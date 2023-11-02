import cursosController from "./cursosController.js";

 const getAll = async (req,res) =>{
  
    const errorMessage = req.query.error;
    const q = req.query.q;
    const[error,cursos] = await cursosController.getAll(q);
    res.render("cursos/list",{error: error || errorMessage,cursos,session:req.session});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,curso] = await cursosController.getById(id);
    res.render("cursos/show",{error,curso,session:req.session});   
}


const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("cursos/new",{error});
}

const create = async (req,res) =>{
    const {nombre_curso, fecha_curso, id_profe}=req.body;
    const [error,curso] = await cursosController.create(nombre_curso, fecha_curso, id_profe);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/cursos/new?error=${uriError}`)
    }
    res.redirect("/cursos");
}

const updateForm = async (req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,curso] = await cursosController.getById(id);
    if(error){
        res.redirect("/cursos");
    }
    res.render("cursos/edit",{error:errorMessage,curso,session:req.session});
}

const update = async (req,res) =>{
    const id = req.params.id;
    console.log("params id", id);
    const {nombre_curso, fecha_curso, id_profe} = req.body;

    const [error,curso] = await cursosController.update(nombre_curso, fecha_curso, id_profe);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/cursos/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/cursos/${id}`);
};

const remove = async (req,res)=>{
    const id = req.params.id;
    const [error,curso] = await cursosController.remove(id);
    if(error)
    {
        const uriError= encodeURIComponent(error);
        return res.redirect(`/cursos?error=${uriError}`);

    }
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