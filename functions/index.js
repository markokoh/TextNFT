
const functions = require("firebase-functions");
const {Messaging} = require("@signalwire/realtime-api");

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();




const sendTextMessage = async () => {
  console.log("sendTextMessage");
  const client = new Messaging.Client({
    project: PROJECT_ID,
    token: API_TOKEN,
    contexts: ["office"],
  });

  client.on("message.received", (message) => {
    console.log("message.received", message);
  });

  await client.send({
    context: "office",
    from: FROM_NUMBER,
    to: TO_NUMBER,
    body: "Hello World Mark!!!",
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
