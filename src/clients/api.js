export default (token) => {
  const apihost = 'https://us-central1-gimble-app.cloudfunctions.net/';

  const post = (path, body) => {
    return fetch(`${apihost}${path}`, {
       method: 'post',
       headers: new Headers({
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
       }),
       body: JSON.stringify(body)
     });
  };

  return { post };
}
