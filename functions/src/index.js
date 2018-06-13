import { https } from 'firebase-functions';
import admin from 'firebase-admin';
import { request, rescind, accept } from './friendRequests';
import { registerProfileName } from './profiles';

admin.initializeApp();

export const requestFriend = https.onCall(request);
export const rescindFriendRequest = https.onCall(rescind);
export const acceptFriendRequest = https.onCall(accept);
export const registerUniqueProfileName = https.onCall(registerProfileName);
export { attachImageToEvent } from './events';

