import { Router } from "express";
import cursosViewController from "../controllers/cursos/cursoViewController.js";
import {isAdmin} from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/",(req,res)=>{
    cursosViewController.getAll(req,res);
});


router.get("/new",isAdmin, cursosViewController.createForm);


router.get("/:id",(req,res)=>{
    cursosViewController.getById(req,res);
});


router.post("/",isAdmin, (req,res)=>{
    cursosViewController.create(req,res);
});


router.get("/:id/edit",isAdmin, cursosViewController.updateForm);


router.post("/:id",isAdmin, (req,res)=>{
    cursosViewController.update(req,res);
});


router.get("/:id/delete",isAdmin, (req,res)=>{
    cursosViewController.remove(req,res);
});

export default router;
