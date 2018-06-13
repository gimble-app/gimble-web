import { https } from 'firebase-functions';

export const httpFailedPrecondition = () => new https.HttpsError('failed-precondition', 'The function must be called while authenticated.');
export const invalidArgument = (message) => new https.HttpsError('invalid-argument', message);
