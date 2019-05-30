export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Could not fetch characters';

      return json;
    })
    .then(json => json.map(character => ({
      _id: character._id,
      photoUrl: character.photoUrl,
      name: character.name
    })
    ));
};
