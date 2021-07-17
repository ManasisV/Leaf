const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  switch (cmd) {
    case 'today':
      require('./commands/today')(args)
      break
    case 'version':
        require('./commands/version')(args)
        break
    case 'help':
        require('./commands/help')(args)
        break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}