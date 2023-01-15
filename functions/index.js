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

const sendTextMessage = (bodyText) => {
  const consumer = new RelayConsumer({

    project: signalWireProject,
    token: signalWireToken,
    contexts: ["default"],
    ready: async ({client}) => {
      const params = {

        context: "+default",
        from: +12232428478,
        to: +13235297141,
        body: bodyText,
        tags: ["TextNFT"],

      };

      const {successful, messageId} = await client.messaging.send(params);

      if (successful) {
        console.log("Message send 'succesful'. Details - " +
                          "From: +12232428478 " +
                          ", To: +13235297141 " +
                          ", Message: " + bodyText +
                          ", SignalWire Message ID: " + messageId);

        // what happens on'successful' differs depending when/where it is called
        // return onSuccessful
      } else {
        console.log("Message not sent. +12232428478" + ", id" + messageId );
        return;
      }
    },

  });

  consumer.run();
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
