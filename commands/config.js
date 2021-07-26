const Conf = require('conf')
const chalk = require('chalk')
const config = new Conf()

//Modules
const apiKey = require('../config/apikey')
const favcities = require('../config/cities')

module.exports = (args) => {
  if(args.apikey){
    const run  = async () => {
    const key = await apiKey()
    config.set("apiKey", key)
    }
    run()
  }
  else if (args.star){
    const run  = async () => {
      const cities = await favcities.askCities()
      config.set("cities", cities)
      }
      run()
  }
  else{
    console.log(chalk.red("This in not a valid config command. PLease type ") + chalk.blue("leaf help --config") + chalk.red("for more information about config commands"))
  }
}