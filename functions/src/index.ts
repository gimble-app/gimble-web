import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import validateFirebaseIdToken from './authTokenValidator';

const app = express();
app.use(cors({origin: true}));
app.use(cookieParser());
app.use(validateFirebaseIdToken);

app.post('/requests', (req, res) => {
  console.log(req.body.to);
  res.sendStatus(200);
});

export const friends = functions.https.onRequest(app);
