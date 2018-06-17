import { https } from 'firebase-functions';

export const httpFailedPrecondition = () => new https.HttpsError('failed-precondition', 'The function must be called while authenticated.');

export const alreadyExists = (message) => new https.HttpsError('already-exists', message);
export const invalidArgument = (message) => new https.HttpsError('invalid-argument', message);
