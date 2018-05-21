import { https } from 'firebase-functions';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import admin from 'firebase-admin';
import validateFirebaseIdToken from './authTokenValidator';
import addFriendRequest from 'addFriendRequest';

admin.initializeApp();
const app = express();
app.use(cors({origin: true}));
app.use(cookieParser());
app.use(validateFirebaseIdToken);

app.post('/requests', async (req, res) => {
  try {
    await addFriendRequest(req.body);
    res.sendStatus(200);
  } catch(e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export const friends = https.onRequest(app);
