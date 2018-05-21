import { https } from 'firebase-functions';
import admin from 'firebase-admin';
import request from './addFriendRequest';

admin.initializeApp();

export const requestFriend = https.onCall(request);
