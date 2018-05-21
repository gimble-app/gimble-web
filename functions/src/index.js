import { https } from 'firebase-functions';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import validateFirebaseIdToken from './authTokenValidator';
import admin from 'firebase-admin';

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

export const friends = https.onRequest(app);
