import { Router } from "express";
import User from "../services/User.js";
import { passport } from "../helpers/passport.js";
const router = Router();


router

    .get("/login", passport.authenticate("discord", { failureRedirect: "/profile" }) ,User.login)

    .get("/profile", User.profile)

export default router