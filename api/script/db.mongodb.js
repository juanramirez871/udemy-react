use("udemy-react");

db.videos.updateMany({}, { $set: { seenPeople: [] } })

//db.createCollection("videos");

db.videos.insertMany([
  {
    module: 17,
    modulName: "Sección 17: Cierre del curso",
    urlVideo: "",
    comments: [],
    title: "",
    likesPeople: [],
    dislikesPeople: [],
    seenPeople: false,
    timesSeen: 0,
    lastWached: "",
  },
]);
