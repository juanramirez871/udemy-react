import { Router } from "express";
import { isAuth } from "../middlewares/auth.js";
import Video from "../services/Video.js";
const router = Router();


router

    .use(isAuth)

    .get("/modules", Video.getModules)

    .get("/seenn/:idUser", Video.last)

    .post("/comment/:idVideo", Video.postComment)

    .post("/response/:idComment/:idVideo", Video.postResponse)

    .put("/dislike/:idVideo/:idUser", Video.postDislike)

    .put("/like/:idVideo/:idUser", Video.postlike)

    .delete("/dislike/:idVideo/:idUser", Video.depostDislike)

    .delete("/like/:idVideo/:idUser", Video.depostlike)

    .put("/seen/:idVideo/:boolean/:idUser", Video.seenChange)

    .put("/seen/:idUser/:course", Video.lastVideo)

export default router