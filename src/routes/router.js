import { Router } from "express";

import usersRouter from "./usersRouter.js";
import cursosRouter from "./cursosRouter.js";

const router = Router();

router.use("/users",usersRouter);
router.use("/cursos", cursosRouter);


export default router;