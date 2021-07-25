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

  config: chalk.bold("\nUsage: leaf config <options>") + 

  `Options: 
    --apikey     Change/Configurate the api key of OpenWeatherMap Api
    --star        Change/Configurate the starred cities`

}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}