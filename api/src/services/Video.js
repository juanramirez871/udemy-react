import "dotenv/config";
import db from "../config/db.js";
import { ObjectId } from "mongodb";
const Videos = db.getInstance().connect()

class Video {

  static async getModules(req, res) {

    const data = await Videos.aggregate(
      [
        {
          $group: {
            _id: "$module",
            title: { $first: "$modulName" },
            videos: { $push: "$$ROOT" }
          }
        },
        { $sort: { _id: 1 } },
        
      ]).toArray();
    return res.json({ data })
  }

  static async postComment(req, res){

    await Videos.updateOne({ _id: new ObjectId(req.params.idVideo) }, { $push: { comments: req.body } });
    return res.json({ msg: "success" })
  }
}

export default Video;
