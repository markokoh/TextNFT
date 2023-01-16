
const functions = require("firebase-functions");
const {Messaging} = require("@signalwire/realtime-api");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
require("dotenv").config();
const nfts = require("./data/nfts.json");
const fromNumber = process.env.FROM_NUMBER;


const sendTextMessage = async (body, toNumber) => {
  try {
    const nft = Object.values(nfts)[parseFloat(body) - 1];
    const nftTextMessage = nft.name + "\n" + "\n" +
    nft.description + "\n" + "\n" + nft.price + "\n" + "\n" +

    "https://www.w3schools.com/html/default.asp"
    ;

    const client = new Messaging.Client({
      project: process.env.PROJECT_ID,
      token: process.env.API_TOKEN,
    });

    await client.send({
      from: fromNumber,
      to: toNumber,
      body: nftTextMessage,
      media: [nft.URL],
    });
  } catch (err) {
    console.log("Error sending text: ", err);
  }
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
