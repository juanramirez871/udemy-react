import express from "express";
import cors from "cors";
import routerUser from "./routes/user.js";
import routerVideo from "./routes/video.js";
import session  from "express-session";
import passport from "passport";
import "dotenv/config";
import compressios from "compression";
const PORT = process.env.PORT_BACKEND;
const app = express();
const corsOptions = {
    origin: `http://${process.env.HOST}:${process.env.PORT_FRONTEND}`,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  };
app

    .use(compressios())

    .use(express.json())

    .use(cors(corsOptions))

    .use(session({ secret: "loginDiscord", resave: false, saveUninitialized: false, cookie: {
        secure: false,
        httpOnly: true,
      }, }))

    .use(passport.initialize())

    .use(passport.session())

    .use("/user", routerUser)

    .use("/video", routerVideo)

    .listen(PORT, () => console.log(`server api run http://${process.env.HOST}:` + PORT))