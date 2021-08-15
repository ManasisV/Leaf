const Conf = require('conf')
const kleur = require('kleur')
const config = new Conf()

//Modules
const apiKey = require('../config/apikey')
const favcities = require('../config/cities')

module.exports = (args) => {
  try{
    if(args.apikey){
      const run  = async () => {
      const key = await apiKey()
      config.set("apiKey", key)
      }
      run()
    }
    else if (args.aspen){
      const run  = async () => {
        const cities = await favcities.askCities()
        config.set("cities", cities)
        }
        run()
    }
    else{
      console.log(kleur.red("This in not a valid config command. PLease type ") + kleur.blue("leaf help --config") + kleur.red("for more information about config commands"))
    }
  }
  catch(err){
    process.exit()
  }
}