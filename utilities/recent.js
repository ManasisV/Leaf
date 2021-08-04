const getWeather = require('../utilities/weather')
const kleur = require('kleur')
const Conf = require('conf')

const config = new Conf()

module.exports = async (args) => {
    const recentLocation = config.get("recent")

    if(recentLocation === undefined || recentLocation === null){
        throw new Error("No recent location")
    }

    const weather = await getWeather(recentLocation)

    console.log(kleur.bold(`\nYour recent searched location: ${kleur.blue(recentLocation)}`))
    console.log(kleur.green(`   Temperature: ${Math.round(weather.data.main.temp)}°C`))
    console.log(kleur.cyan(`   Humidity: ${weather.data.main.humidity}%`))
    console.log(kleur.yellow(`   Pressure: ${weather.data.main.pressure}mb`))
}