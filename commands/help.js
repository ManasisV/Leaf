const chalk = require("chalk")

const menus = {
    main: 
    chalk.bold("\nUsage: leaf [command] <option>\n\n") + 
    
    `Options:
      today     show weather for today
      star      show your 5 starred cities
      config    configuration of leaf
      version   show package version
      help      show help menu for a command`,

  today: chalk.bold('\nUsage: leaf today <options>\n\n') + 
  
  `Options:
    --location, -l     the location of weather forecast`,

  star: chalk.bold("\nUsage: leaf star\n\n") + 
  
  `Configuration: leaf config --star`,

  config: chalk.bold("\nUsage: leaf config <options>\n\n") + 

  `Options: 
    --apikey     Change/Configurate the api key of OpenWeatherMap Api
    --star        Change/Configurate the starred cities`

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