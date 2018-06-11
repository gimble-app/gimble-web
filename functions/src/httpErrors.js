import { https } from 'firebase-functions';

export const httpFailedPrecondition = () => new https.HttpsError('failed-precondition', 'The function must be called while authenticated.');
