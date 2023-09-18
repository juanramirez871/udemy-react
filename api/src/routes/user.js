import { Router } from "express";
import User from "../services/User.js";
import { passport } from "../helpers/passport.js";
import { isAuth } from "../middlewares/auth.js";
const router = Router();


router

    .get("/login", passport.authenticate("discord", { failureRedirect: "/" }) , User.login)

    .get("/logout", User.logout)
    
    .use(isAuth)

    .get("/profile", User.profile)


export default router