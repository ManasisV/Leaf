const kleur = require('kleur')

const menus = {
    main: 
    kleur.bold("\nUsage: leaf [command] <option>\n\n") + 
    
    `Options:
      today     show weather for today
      aspen     show your 5 starred cities
      config    configuration of leaf
      version   show package version
      help      show help menu for a command`,

  today: kleur.bold('\nUsage: leaf today <options>\n\n') + 
  
  `Options:
    --location, -l     the location of weather forecast`,

  star: kleur.bold("\nUsage: leaf star\n\n") + 
  
  `Configuration: leaf config --star`,

  config: kleur.bold("\nUsage: leaf config <options>\n\n") + 

  `Options: 
    --apikey     Change/Configurate the api key of OpenWeatherMap Api
    --aspen       Change/Configurate the starred cities`

}

module.exports = (args) => {
  if(args.today){
    console.log(menus.today)
  } else if(args.star){
    console.log(menus.star)
  } else if(args.config){
    console.log(menus.config)
  } else{
    console.log(menus.main)
  }
}