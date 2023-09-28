import "dotenv/config";

class User {
  static login(req, res) {
    res.send(
      `<script>window.opener.postMessage(${JSON.stringify(
        req.user
      )}, "http://${process.env.HOST}:${process.env.PORT_FRONTEND}");</script>`
    );
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

  static isServerCampus(req, res) {
    const response = req.user.guilds.find(el => el.id == "1101581994355347526")
    res.json({ isAuth: response ? true : false });
  }
}

export default User;
