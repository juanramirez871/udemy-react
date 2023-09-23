import "dotenv/config";
import db from "../config/db.js";
import { ObjectId } from "mongodb";
const Videos = db.getInstance().connect();

class Video {
  static async getModules(req, res) {
    const data = await Videos.aggregate([
      {
        $group: {
          _id: "$module",
          title: { $first: "$modulName" },
          videos: { $push: "$$ROOT" },
        },
      },
      { $sort: { _id: 1 } },
    ]).toArray();
    return res.json({ data });
  }

  static async postComment(req, res) {
    await Videos.updateOne(
      { _id: new ObjectId(req.params.idVideo) },
      { $push: { comments: req.body } }
    );
    return res.json({ msg: "success" });
  }

  static async postResponse(req, res) {
    const a = await Videos.updateOne(
      {
        _id: new ObjectId(req.params.idVideo),
        "comments.timeAgo": Number(req.params.idComment),
      },
      { $push: { "comments.$.responses": req.body } }
    );
    return res.json({ msg: "success", data: a });
  }

  static async postDislike(req, res) {
    const a = await Videos.updateOne(
      {
        _id: new ObjectId(req.params.idVideo),
      },
      { $push: { disLikesPeople: req.params.idUser } }
    );
    return res.json({ msg: "success", data: a });
  }

  static async postlike(req, res) {
    const a = await Videos.updateOne(
      {
        _id: new ObjectId(req.params.idVideo),
      },
      { $push: { likesPeople: req.params.idUser } }
    );
    return res.json({ msg: "success", data: a });
  }

  static async depostDislike(req, res) {

    const dislike = await Videos.findOne({ _id: new ObjectId(req.params.idVideo) })
    const newLikes = dislike.disLikesPeople.filter(el => el != req.params.idUser)

    const a = await Videos.updateOne(
      {
        _id: new ObjectId(req.params.idVideo),
      },
      { $set: { disLikesPeople: newLikes } }
    );
    return res.json({ msg: "success", data: a });
  }

  static async depostlike(req, res) {
    const dislike = await Videos.findOne({ _id: new ObjectId(req.params.idVideo) })
    const newLikes = dislike.likesPeople.filter(el => el != req.params.idUser)

    const a = await Videos.updateOne(
      {
        _id: new ObjectId(req.params.idVideo),
      },
      { $set: { likesPeople: newLikes } }
    );
    return res.json({ msg: "success", data: a });
  }

  static seenChange = async(req, res) => {

    console.log("🚀 ~ file: Video.js:94 ~ Video ~ seenChange=async ~ req.params.boolean:", req.params.boolean)
    const a = await Videos.updateOne(
      {
        _id: new ObjectId(req.params.idVideo),
      },
      { $set: { seen: !req.params.boolean ? 0 : req.params.boolean } }
    );
    return res.json({ msg: "success", data: a });
  }
}

export default Video;
