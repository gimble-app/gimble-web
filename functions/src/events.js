import { config, firestore } from 'firebase-functions';
import axios from 'axios';

export const attachImageToEvent = firestore
  .document('events/{id}')
  .onCreate(async snap => {
    const title = snap.data().title;
    const id = config().unsplash.clientid;
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${title}`,
      {
        headers: {
          'Authorization': `Client-ID ${id}`
        }
      }
    );

    const data = response.data;
    const image = {};
    image.src = data.results[0].urls.regular;
    image.author = data.results[0].user.username;
    return snap.ref.set({image: image}, {merge: true});
  });
