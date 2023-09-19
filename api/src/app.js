import express from "express";
import cors from "cors";
import routerUser from "./routes/user.js";
import session  from "express-session";
import passport from "passport";
import "dotenv/config";
const PORT = process.env.PORT || 3000;
const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
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

    .listen(PORT, () => console.log("server api run http://localhost:" + PORT))