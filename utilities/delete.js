const Conf = require('conf')

const config = new Conf()

module.exports = (args) => {
    const selected = args.selected || args.s
    const all = args.all || args.a

    const values = [
        "recent",
        "apiKey",
        "cities"
    ]

    if (all === undefined || all === null){
        config.delete(values[1])
      }
}