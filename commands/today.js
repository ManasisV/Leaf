const ora = require('ora')
const getWeather = require('../utilities/weather')
const kleur = require('kleur')
const Conf = require('conf')

const config = new Conf()

const help_today = kleur.bold('\nUsage: leaf today <options>\n\n') + kleur.bold("Options:  --location, -l     the location of weather forecast");

module.exports = async (args) => {
  const spinner = ora("Wait..").start()

  try {
    const location = args.location || args.l

    if (location === undefined || location === null){
      console.log(help_today)
    }

    config.set("recent", location)
    const key = config.get("apiKey")

    if(key === undefined || key === null){
      spinner.stop()
      console.log(kleur.red("No OpenWeatherMap API Key is defined"))
      console.log(kleur.blue("Please type leaf config --apikey in order to setup an API Key"))
      process.exit()
    }
    const weather = await getWeather(location)

    

    spinner.stop()
    
    let overall = weather.data.weather[0].description
    let temperature =  Math.round(weather.data.main.temp)
    let humidity =  weather.data.main.humidity
    let pressure = weather.data.main.pressure

    console.log(kleur.bold(`\nWeather in: ${kleur.blue(location)}`))
    console.log(kleur.magenta(`    Overall weather: ${overall}`))
    console.log(kleur.yellow(`    Temperature: ${temperature}°C`))
    console.log(kleur.cyanBright(`    Humidity: ${humidity}%`))
    console.log(kleur.green(`    Pressure: ${pressure}mb`))
    console.log(kleur.red(`\nCoordinates:\n    Longitude: ${weather.data.coord.lon}\n    Langitute: ${weather.data.coord.lat} `))

  } catch (err) {
    spinner.stop()
  }
}