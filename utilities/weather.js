const axios = require('axios')

module.exports = (location) => {
  axios.get({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    params: {
      q: "Serres",
      appid: "00f076b552c20414cff5bc9b0eef368e"
    },
  })
  .then(response => () => {return response})
}