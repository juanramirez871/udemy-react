import passport from "passport";
import { Strategy } from "passport-discord";
import "dotenv/config";

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((obj, done) => done(null, obj))

passport.use(new Strategy({

    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: `http://${process.env.HOST}:${process.env.PORT_BACKEND}/user/login`,
    scope: ["identify", "guilds"]
}, (accesToken, refresToken, profile, cb) => {

    process.nextTick(() => {

        return cb(null, profile)
    })
}))


export { passport };