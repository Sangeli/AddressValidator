var axios = require('axios');


//"https://us-zipcode.api.smartystreets.com/lookup?auth-id=05c7a732-94f4-1f04-99d4-c6564b5a98e1&auth-token=5hMtTPLIEPj1Lt1KjREa&city=[yourCity]&state=[yourState]&zipcode=[yourZipCode]";
var url = "https://us-zipcode.api.smartystreets.com/lookup";


exports.validate = (user) => {
  return axios.get(url, {
    params: {
      'auth-id': '05c7a732-94f4-1f04-99d4-c6564b5a98e1',
      'auth-token': '5hMtTPLIEPj1Lt1KjREa',
      'city': user.city,
      'state': user.state,
      'zipcode': user.zipCode
    }
  })
  .then( (payload) => {
    return payload.data[0];
  });
}