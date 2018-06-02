import { https } from 'firebase-functions';
import admin from 'firebase-admin';
import { request, rescind, accept } from './friendRequests';

admin.initializeApp();

export const requestFriend = https.onCall(request);
export const rescindFriendRequest = https.onCall(rescind);
export const acceptFriendRequest = https.onCall(accept);
export { attachImageToEvent } from './events';

