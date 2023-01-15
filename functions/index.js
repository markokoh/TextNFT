// require("dotenv").config();
// console.log(process.env);
const functions = require("firebase-functions");

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

const sendTextMessage = async (bodyText) => {
  console.log("signalWireProject", signalWireProject);
  console.log("signalWireToken", signalWireToken);
  console.log("bodyText", bodyText);

  const client = new RelayClient({
    project: signalWireProject,
    token: signalWireProject,
  });

  const sendResult = await client.messaging.send({
    context: "office",
    from: "+12232428478",
    to: "+13235297141",
    body: bodyText,
  });

  if (sendResult.successful) {
    console.log("Message ID: ", sendResult.messageId);
  }


  sendTextMessage().catch(console.error);
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
  sendTextMessage("MESSAGE SENT");
  res.end();
});
