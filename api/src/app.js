import express from "express";
import cors from "cors";
import routerUser from "./routes/user.js";
import routerVideo from "./routes/video.js";
import session  from "express-session";
import passport from "passport";
import "dotenv/config";
const PORT = process.env.PORT || 5057;
const app = express();
const corsOptions = {
    origin: ['http://192.168.129.72:5056', 'http://localhost:5056'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  };
app

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

    .listen(PORT, () => console.log("server api run http://192.168.129.72:" + PORT))