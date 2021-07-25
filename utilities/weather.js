const axios = require('axios')
const Conf = require('conf');

const config = new Conf()

module.exports = async (location) => {
  const response = await axios({
    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather",
    params: {
      q: location,
      appid: config.get("apiKey"),
      units: "metric"
    }
  }, 
).catch(function (error) {
  console.log(error.toJSON());
})

  return response
}