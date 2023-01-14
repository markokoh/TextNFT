const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

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
  res.end();
});
