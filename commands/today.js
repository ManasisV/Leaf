const ora = require('ora')
const getWeather = require('../utilities/weather')
const chalk = require('chalk')
const Conf = require('conf')

const config = new Conf()

const help_today = chalk.bold('\nUsage: leaf today <options>\n\n') + chalk.bold("Options:  --location, -l     the location of weather forecast");

module.exports = async (args) => {
  const spinner = ora("Wait..").start()

  try {
    const location = args.location || args.l

    if (location === undefined || location === null){
      console.log(help_today)
    }

    config.set("recent", location)
    const weather = await getWeather(location)

    

    spinner.stop()
    
    let overall = weather.data.weather[0].description
    let temperature =  Math.round(weather.data.main.temp)
    let humidity =  weather.data.main.humidity
    let pressure = weather.data.main.pressure

    console.log(chalk.bold(`\nWeather in: ${chalk.blue(location)}`))
    console.log(chalk.magenta(`    Overall weather: ${overall}`))
    console.log(chalk.yellow(`    Temperature: ${temperature}°C`))
    console.log(chalk.cyanBright(`    Humidity: ${humidity}%`))
    console.log(chalk.green(`    Pressure: ${pressure}mb`))
    console.log(chalk.red(`\nCoordinates:\n    Longitude: ${weather.data.coord.lon}\n    Langitute: ${weather.data.coord.lat} `))

  } catch (err) {
    spinner.stop()
  }
}