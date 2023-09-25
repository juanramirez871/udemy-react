import { Router } from "express";
import { isAuth } from "../middlewares/auth.js";
import Video from "../services/Video.js";
import { isVideo } from "../middlewares/isVideo.js";
const router = Router();


router

    .use(isAuth)

    .use(isVideo)

    .get("/", Video.getVideo)

    .get("/modules", Video.getModules)

    .post("/comment/:idVideo", Video.postComment)

    .post("/response/:idComment/:idVideo", Video.postResponse)

    .put("/dislike/:idVideo/:idUser", Video.postDislike)

    .put("/like/:idVideo/:idUser", Video.postlike)

    .delete("/dislike/:idVideo/:idUser", Video.depostDislike)

    .delete("/like/:idVideo/:idUser", Video.depostlike)

    .put("/seen/:idVideo/:boolean/:idUser", Video.seenChange)

export default router