import { Router } from "express";
import User from "../services/User.js";
import { passport } from "../helpers/passport.js";
import { isAuth } from "../middlewares/auth.js";
const router = Router();


router

    .get("/login", passport.authenticate("discord", { failureRedirect: "/user/login" }) , User.login)

    .use(isAuth)

    .get("/profile", User.profile)
    
    .get("/logout", User.logout)



export default router