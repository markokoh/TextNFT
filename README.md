# Title: Text NFT

# Description:

“Text NFT" is an open-source project that allows gallery visitors to change an NFT displayed on a screen by sending a text message. Visitors will receive a link to purchase the NFT they are viewing. This innovative project brings the world of NFTs to physical galleries, making the process of buying and collecting digital art more accessible and engaging.

It uses Firebase for the backend, SignalWire for SMS, and Vue.js for the front end. A Firebase cloud function ‘selectArt’ , is triggered by a SignalWire ‘LaML’ web hook, when an SMS is received. A Cloud Firestore database is updated with each selection, and the ‘Frame.vue’ component listens for these updates.

# How to use:

Text a number from 1 - 12 to the phone number bellow, to change the NFT on screen. You will receive a reply with a description and link (the price and the buy button are not real).

Tel: +1 (833) 333-3545

**Video Demo:**

https://firebasestorage.googleapis.com/v0/b/textvote-7a52e.appspot.com/o/images%2FTEXT%20NFT%20VID.mp4?alt=media&token=628d3142-83ab-40bb-b487-f0cd8680278a

**Demo Site:**

https://textnft-c54c9.web.app

**Code Sandbox:**

https://codesandbox.io/p/github/markokoh/TextNFT/main?file=%2Fsrc%2Fviews%2FFrame.vue

If you wish to fork this project and make your own version, you will need Firebase and SignalWire accounts:

https://signalwire.com/

https://firebase.google.com/

The code is made available through a GNU LGPLv3 license.
