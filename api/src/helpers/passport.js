import passport from "passport";
import { Strategy } from "passport-discord";
import "dotenv/config";

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((obj, done) => done(null, obj))

passport.use(new Strategy({

    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://192.168.129.72:5056",
    scope: ["identify", "guilds"]
}, (accesToken, refresToken, profile, cb) => {

    process.nextTick(() => {

        return cb(null, profile)
    })
}))


export { passport };