// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import axios from 'axios';
// import * as admin from 'firebase-admin';
import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

exports.getCharacterInfo = functions.https.onRequest(async (req, res) => {
  const { charName } = req.query;

  // const urlEncoded = encodeURI(`https://loawa.com/char/${charName}`);
  const urlEncoded = encodeURI(
    `https://lostark.game.onstove.com/Profile/Character/${charName}`
  );

  const fromWebsite = await axios.get(urlEncoded);

  // const writeResult = await admin
  //   .firestore()
  //   .collection('messages')
  //   .add({ body: fromWebsite });
  res.json({
    result: `Message with - added`,
    html: JSON.stringify(fromWebsite.data),
  });
});
