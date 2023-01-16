
const functions = require("firebase-functions");
const {Messaging} = require("@signalwire/realtime-api");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
require("dotenv").config();
const nfts = require("./data/nfts.json");


const sendTextMessage = async (body, toNumber) => {
  console.log("process.env.PROJECT_ID", process.env.PROJECT_ID);
  console.log("process.env.API_TOKEN", process.env.API_TOKEN);


  const nft = Object.values(nfts)[parseFloat(body) - 1];

  const nftTextMessage = nft.name + "\n" + "\n" +
  nft.description + "\n" + "\n" + nft.price;

  const client = new Messaging.Client({
    project: process.env.PROJECT_ID,
    token: process.env.API_TOKEN,
  });

  client.on("message.received", (message) => {
    console.log("message.received", message);
  });

  await client.send({
    from: "+18333333545",
    to: toNumber,
    body: nftTextMessage,
    media: [nft.URL],
  });
};

const getSelection = async (num) => {
  try {
    const frameRef = db.collection("shows").doc("gallery");
    await frameRef.set({
      frame: parseFloat(num),
    });
  } catch (err) {
    console.log("Error adding vote: ", err);
  }
};


exports.selectArt = functions.https.onRequest((req, res) => {
  const messageBody = req.body.Body;
  const from = req.body.From;
  getSelection(messageBody);
  sendTextMessage(messageBody, from);
  res.end();
});
