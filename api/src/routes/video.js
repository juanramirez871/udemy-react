import { Router } from "express";
import { isAuth } from "../middlewares/auth.js";
import Video from "../services/Video.js";
const router = Router();


router

    .use(isAuth)

    .get("/modules", Video.getModules)


export default router