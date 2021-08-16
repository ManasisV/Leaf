#!/usr/bin/env node
const minimist = require('minimist')
const kleur = require('kleur')
const Conf = require('conf')

const config = new Conf()

module.exports = () => {
  const recent = config.get('recent')

  const args = minimist(process.argv.slice(2))
  let cmd = args._[0] || 'undefined'

  if (args.version || args.v) {
    cmd = 'version'
  }

  switch(cmd){
    case 'undefined':
      if(recent != undefined || recent != null){

        require('./utilities/recent')(args)
    }else{
      console.log("No recent location")
    }
      console.log(kleur.bold("\nType [leaf help] for more information."))
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
      require('./utilities/aspen')(args)
      break
    case 'recent':
      require('./utilities/recent')(args)
      break
    default:
      console.log(`${cmd} is not a valid command.`)
      break
  }
  
}