const ora = require('ora')
const getWeather = require('../utilities/weather')
const chalk = require('chalk')
const Conf = require('conf')

const config = new Conf()

module.exports = async (args) => {

    const recentLocation = config.get("recent")

    if(recentLocation === undefined || recentLocation === null){
        exit()
    }

    const weather = await getWeather(recentLocation)

    console.log(chalk.bold(`\nYour recent searched location: ${chalk.blue(recentLocation)}`))
    console.log(chalk.green(`   Temperature: ${Math.round(weather.data.main.temp)}°C`))
    console.log(chalk.cyanBright(`   Humidity: ${weather.data.main.humidity}%`))
    console.log(chalk.yellow(`   Pressure: ${weather.data.main.pressure}mb`))
}