import { Router } from "express";
import User from "../services/User.js";
import { passport } from "../helpers/passport.js";
import { isAuth } from "../middlewares/auth.js";
const router = Router();


router

    .get("/login", passport.authenticate("discord", { failureRedirect: "/user/login" }) , User.login)

    .use(isAuth)

    .get("/logout", User.logout)

    .get("/profile", User.profile)


export default router