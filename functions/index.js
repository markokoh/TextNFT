
const functions = require("firebase-functions");
const {Messaging} = require("@signalwire/realtime-api");

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();



const nfts = require("./data/nfts.json");


const sendTextMessage = async (body, TO_NUMBER) => {
  const nft = Object.values(nfts)[parseFloat(body) - 1];

  const nftTextMessage = nft.name + "\n" + "\n" +
  nft.description + "\n" + "\n" + nft.price;

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
    body: nftTextMessage,
    media: [nft.URL],
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
  const from = req.body.From;
  getSelection(messageBody);
  sendTextMessage(messageBody, from);
  res.end();
});
