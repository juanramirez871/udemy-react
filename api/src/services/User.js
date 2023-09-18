import "dotenv/config";
import jwt from "jsonwebtoken";

class User {
  static login(req, res) {
      const user = { name: req.user.username, avatar: req.user.avatar };
      const token = jwt.sign(user, process.env.JWT_SECRET);
      res.send(`<script>window.opener.postMessage(${JSON.stringify(req.user)}, "http://localhost:5173");</script>`);
  }

  static profile(req, res) {
    res.json({ data: req.user });
  }

  static logout(req, res) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.json({ msg: "logout session" });
    });
  }
}

export default User;
