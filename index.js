#!/usr/bin/env node

const minimist = require('minimist')
const Conf = require('conf')

const chalk = require('chalk')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  let cmd = args._[0] || 'undefined'

  const config = new Conf()

  if (args.version || args.v) {
    cmd = 'version'
  }

  switch(cmd){
    case 'undefined':
      require('./utilities/recent')(args)
      console.log(chalk.bold("\nPlease type [leaf help] for more information."))
      break
    // Cases of weather forecast for today
    case 'today':
      require('./commands/today')(args)
      break
    case 'begonia':
      require('./commands/today')(args)
      break
    case 'version':
        require('./commands/version')(args)
        break
    case 'help':
        require('./commands/help')(args)
        break
    case 'config':
      require('./commands/config')(args)
      break
    // Cases of starred cities
    case 'star':
      require('./utilities/starred')(args)
      break
    case 'aspen':
      require('./utilities/starred')(args)
      break
    case 'recent':
      require('./utilities/recent')(args)
      break
    case 'settings':
      require('./utilities/settings')(args)
      break
    default:
      console.log(`${cmd} is not a valid command.`)
      break
  }
  
}