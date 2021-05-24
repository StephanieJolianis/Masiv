const urlBase = 'http://xkcd.com/';

const ObtenerData = (number) => {
    let urlData = urlBase + number +'/'+ "info.0.json";
    let response = fetch(urlData)
    .then((resp) => resp.json())
    .then(function(data) {
        return data
  })
  .catch(function(error) {
      return error
    });
    return response;
}

export { ObtenerData }







