import "dotenv/config";
import db from "../config/db.js";
const Videos = db.getInstance().connect();

export const isVideo = async (req, res, next) => {
  const newData = await Videos.findOne({ idVideo: req.headers.idvideo });
  if (newData){
    req.data = newData;
    next()
  }
  else {
    const a = await Videos.insertOne({
      comments: [],
      idVideo: req.headers.idvideo,
      likesPeople: [],
      disLikesPeople: [],
      seenPeople: false,
      timesSeen: 0,
      seenPeople: [],
      lastWached: "",
    });
    req.data = a;
    next()
  }
};
