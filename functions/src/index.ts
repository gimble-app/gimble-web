import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as admin from 'firebase-admin';

import validateFirebaseIdToken from './authTokenValidator';
admin.initializeApp();
const app = express();
app.use(cors({origin: true}));
app.use(cookieParser());
app.use(validateFirebaseIdToken);

app.post('/requests', async (req, res) => {
  const firestore = admin.firestore();
  console.log(`received: ${JSON.stringify(req.body)}`);
  try {
    await firestore.collection('friendRequests').add({...req.body});
    res.sendStatus(200);
  } catch(e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export const friends = functions.https.onRequest(app);
