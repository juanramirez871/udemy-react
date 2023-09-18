import "dotenv/config";
import jwt from "jsonwebtoken";

class User {

  static login(req, res) {

    const isCamper = req.user.guilds.find(el => el.id == "1101581994355347526");
    if(!isCamper) return res.json({ msg: "no camper" })
    const user = { name: req.user.username, avatar: req.user.avatar, };
    const token = jwt.sign(user, process.env.JWT_SECRET);
    res.json({ token, data: user });
  }

  static profile(req, res) {
    res.json({ data: req.user });
  }

  static logout(req, res){

    req.logout(function(err) {
      if (err) { return next(err); }
      res.json({ msg: "logout session" })
    });
  }
}

export default User;
