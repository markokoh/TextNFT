// require("dotenv").config();
// console.log(process.env);
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

const signalWireProject = "5e5451d0-ffab-4b99-8758-9d6f135b4938";
const signalWireToken = "PT5a74b887e5b88dacfc86f13db97bbff8125a3323fce37252";

import {Messaging} from "@signalwire/realtime-api";

const sendTextMessage = async () => {
  const client = new Messaging.Client({
    project: signalWireProject,
    token: signalWireToken,
    contexts: ["office"],
  });

  client.on("message.received", (message) => {
    console.log("message.received", message);
  });

  await client.send({
    context: "office",
    from: "+1223242-8478",
    to: "+13235297141",
    body: "Hello World!",
  });
};

const getSelection = async (num) => {
  console.log("Art selected:", num);
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
  getSelection(req.body.Body);
  sendTextMessage();
  res.end();
});
