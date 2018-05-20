import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import validateFirebaseIdToken from './authTokenValidator';

const app = express();
app.use(cors({origin: true}));
app.use(cookieParser());
app.use(validateFirebaseIdToken);

app.post('/requests', async (req, res) => {
  console.log(`received: ${req.body}`);
  try {
    await functions.firestore.collection('temp').add({...req.body});
    res.sendStatus(200);
  } catch(e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export const friends = functions.https.onRequest(app);
