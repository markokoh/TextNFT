// require("dotenv").config();
// console.log(process.env);
const functions = require("firebase-functions");
import {Messaging} from "@signalwire/realtime-api";



const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// const sendTextMessage = () => {
//   console.log(
//       // "sendTextMessage",
//       "signalWireProject", signalWireProject,
//       "signalWireToken", signalWireToken,
//   );
// };

const sendTextMessage = async (messageToSend) => {
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
    from: "+12232428478",
    to: "+13235297141",
    body: messageToSend,
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
  const messageBody = req.body.Body;
  getSelection(messageBody);
  sendTextMessage("You selected Art work", messageBody);
  res.end();
});
