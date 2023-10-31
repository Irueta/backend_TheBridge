import { Router } from "express";

import cursosViewController from "../controllers/cursos/cursosViewController.js";

const router = Router();

router.get("/",(req,res)=>{
    cursosViewController.getAll(req,res);
});

router.get("/new",cursosViewController.createForm);

router.get("/:id",(req,res)=>{
    cursosViewController.getById(req,res);
});

router.post("/",(req,res)=>{
    cursosViewController.create(req,res);
});

router.get("/:id/edit",cursosViewController.updateForm);

router.post("/:id",(req,res)=>{
    cursosViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    cursosViewController.remove(req,res);
});

export default router;
