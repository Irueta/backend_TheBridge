import { Router } from "express";

import usersRouter from "./usersRouter.js";
import cursosRouter from "./cursosRouter.js";
import authRouter from "./authRouter.js";
const router = Router();

router.use("/users",usersRouter);
router.use("/cursos", cursosRouter);
router.use("/", authRouter);
export default router;